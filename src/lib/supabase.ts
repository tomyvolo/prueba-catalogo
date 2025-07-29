import { createClient } from '@supabase/supabase-js'

// Estas variables se leerán desde el archivo .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

export interface Product {
  id: number
  name: string
  price: number
  category: 'remeras' | 'buzos' | 'pantalones'
  description?: string
  size?: string
  image_url?: string
  created_at?: string
}

// Funciones para obtener productos desde Supabase
export async function getProductsFromDB(): Promise<Product[]> {
  const { data, error } = await supabase
    .from('productos')
    .select('*')
    .order('created_at', { ascending: false }) // Ordenar por los más nuevos
  
  if (error) {
    console.error('Error fetching products:', error)
    return []
  }
  return data as Product[]
}

export async function getProductsByCategoryFromDB(category: string): Promise<Product[]> {
  const { data, error } = await supabase
    .from('productos')
    .select('*')
    .eq('category', category)
    .order('created_at', { ascending: false })
  
  if (error) {
    console.error(`Error fetching products for category ${category}:`, error)
    return []
  }
  return data as Product[]
}

export async function getProductByIdFromDB(id: string): Promise<Product | null> {
  const { data, error } = await supabase
    .from('productos')
    .select('*')
    .eq('id', parseInt(id))
    .single() // Para obtener un solo resultado
  
  if (error && error.code !== 'PGRST116') { // PGRST116 es "no rows found"
    console.error(`Error fetching product with ID ${id}:`, error)
    return null
  }
  return data as Product | null
}