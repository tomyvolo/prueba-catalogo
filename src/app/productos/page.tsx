import Navigation from "@/components/navigation"
import ProductCard from "@/components/product-card"
import { products } from "@/lib/products"

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Todos los Productos</h1>
          <p className="text-gray-600">Descubre toda nuestra colección</p>
          <p className="text-sm text-gray-500 mt-2">{products.length} productos disponibles</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  )
}