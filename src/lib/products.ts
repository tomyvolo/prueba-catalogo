export interface Product {
  id: string
  name: string
  price: number
  image: string
  description?: string
  size?: string
  category: "remeras" | "buzos" | "pantalones"
}

export const products: Product[] = [
  // Remeras
  {
    id: "1",
    name: "Remera Básica Blanca",
    price: 2500,
    image: "/placeholder.svg?height=400&width=400",
    description: "Remera básica de algodón 100%, perfecta para el día a día. Corte clásico y tela suave.",
    size: "S, M, L, XL",
    category: "remeras",
  },
  {
    id: "2",
    name: "Remera Estampada Negra",
    price: 3200,
    image: "/placeholder.svg?height=400&width=400",
    description: "Remera con estampado moderno, ideal para looks casuales. Tela de alta calidad.",
    size: "S, M, L, XL",
    category: "remeras",
  },
  {
    id: "3",
    name: "Remera Oversize Gris",
    price: 2800,
    image: "/placeholder.svg?height=400&width=400",
    description: "Remera oversize de algodón premium. Estilo relajado y cómodo.",
    size: "M, L, XL",
    category: "remeras",
  },
  {
    id: "4",
    name: "Remera Rayada Azul",
    price: 2900,
    image: "/placeholder.svg?height=400&width=400",
    description: "Remera con rayas clásicas, perfecta para un look náutico y fresco.",
    size: "S, M, L, XL",
    category: "remeras",
  },
  // Buzos
  {
    id: "5",
    name: "Buzo Canguro Negro",
    price: 4500,
    image: "/placeholder.svg?height=400&width=400",
    description: "Buzo con capucha y bolsillo canguro. Interior afelpado para mayor abrigo.",
    size: "S, M, L, XL",
    category: "buzos",
  },
  {
    id: "6",
    name: "Buzo Crewneck Beige",
    price: 4200,
    image: "/placeholder.svg?height=400&width=400",
    description: "Buzo cuello redondo de algodón premium. Diseño minimalista y elegante.",
    size: "S, M, L, XL",
    category: "buzos",
  },
  {
    id: "7",
    name: "Buzo Zip Gris",
    price: 5100,
    image: "/placeholder.svg?height=400&width=400",
    description: "Buzo con cierre y capucha. Perfecto para entrenar o uso casual.",
    size: "M, L, XL",
    category: "buzos",
  },
  {
    id: "8",
    name: "Buzo Oversize Blanco",
    price: 4800,
    image: "/placeholder.svg?height=400&width=400",
    description: "Buzo oversize con capucha. Estilo urbano y cómodo.",
    size: "M, L, XL",
    category: "buzos",
  },
  // Pantalones
  {
    id: "9",
    name: "Jean Skinny Azul",
    price: 6500,
    image: "/placeholder.svg?height=400&width=400",
    description: "Jean skinny de corte moderno. Denim de alta calidad con elastano.",
    size: "28, 30, 32, 34, 36",
    category: "pantalones",
  },
  {
    id: "10",
    name: "Pantalón Cargo Verde",
    price: 5800,
    image: "/placeholder.svg?height=400&width=400",
    description: "Pantalón cargo con múltiples bolsillos. Estilo urbano y funcional.",
    size: "28, 30, 32, 34, 36",
    category: "pantalones",
  },
  {
    id: "11",
    name: "Jogger Negro",
    price: 4200,
    image: "/placeholder.svg?height=400&width=400",
    description: "Pantalón jogger de algodón. Cómodo para entrenar o uso casual.",
    size: "S, M, L, XL",
    category: "pantalones",
  },
  {
    id: "12",
    name: "Chino Beige",
    price: 5200,
    image: "/placeholder.svg?height=400&width=400",
    description: "Pantalón chino clásico. Perfecto para looks semi-formales.",
    size: "28, 30, 32, 34, 36",
    category: "pantalones",
  },
]

export function getProductsByCategory(category: "remeras" | "buzos" | "pantalones") {
  return products.filter((product) => product.category === category)
}

export function getProductById(id: string) {
  return products.find((product) => product.id === id)
}