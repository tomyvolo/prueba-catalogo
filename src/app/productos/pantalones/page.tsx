import Navigation from "@/components/navigation"
import ProductCard from "@/components/product-card"
import { getProductsByCategoryFromDB } from "@/lib/supabase" // Importa desde supabase.ts

export default async function PantalonesPage() { // Hacerla async
  const pantalones = await getProductsByCategoryFromDB("pantalones") // Obtener productos de la DB

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Pantalones</h1>
          <p className="text-gray-600">Pantalones versátiles para cualquier ocasión</p>
          <p className="text-sm text-gray-500 mt-2">{pantalones.length} productos encontrados</p>
        </div>

        {pantalones.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {pantalones.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No hay pantalones disponibles en este momento.</p>
          </div>
        )}
      </main>
    </div>
  )
}