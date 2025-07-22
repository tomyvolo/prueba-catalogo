import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import Navigation from "@/components/navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Mi Marca de Ropa</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Descubre nuestra colección de ropa moderna y cómoda. Calidad premium para tu estilo de vida.
          </p>
          <Link
            href="/productos"
            className="inline-flex items-center px-8 py-4 bg-gray-900 text-white text-lg font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Ver Productos
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="py-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">R</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Remeras</h3>
            <p className="text-gray-600">Remeras básicas y estampadas de la mejor calidad</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">B</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Buzos</h3>
            <p className="text-gray-600">Buzos cómodos y modernos para todas las ocasiones</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">P</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Pantalones</h3>
            <p className="text-gray-600">Pantalones versátiles para tu día a día</p>
          </div>
        </div>
      </main>
    </div>
  )
}