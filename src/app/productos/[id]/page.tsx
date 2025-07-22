import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ShoppingCart, Heart } from 'lucide-react'
import Navigation from "@/components/navigation"
import { getProductById } from "@/lib/products"
import { notFound } from "next/navigation"

interface ProductDetailPageProps {
  params: {
    id: string
  }
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  const categoryNames = {
    remeras: "Remeras",
    buzos: "Buzos",
    pantalones: "Pantalones",
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/productos"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver a productos
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="aspect-square overflow-hidden rounded-lg bg-white shadow-sm">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500 mb-2">{categoryNames[product.category]}</p>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <p className="text-3xl font-bold text-gray-900">${product.price.toLocaleString()}</p>
            </div>

            {product.description && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Descripción</h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>
            )}

            {product.size && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Talles disponibles</h3>
                <p className="text-gray-600">{product.size}</p>
              </div>
            )}

            <div className="space-y-4">
              <button className="w-full bg-gray-900 text-white py-4 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Agregar al carrito
              </button>

              <button className="w-full border border-gray-300 text-gray-900 py-4 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center">
                <Heart className="h-5 w-5 mr-2" />
                Agregar a favoritos
              </button>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Información del producto</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Material de alta calidad</li>
                <li>• Envío gratis en compras superiores a $5000</li>
                <li>• Cambios y devoluciones sin cargo</li>
                <li>• Garantía de satisfacción</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}