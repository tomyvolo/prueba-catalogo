import Image from "next/image"
import Link from "next/link" // <-- Asegúrate de que esté importado
import type { Product } from "@/lib/supabase" // Ahora es de supabase

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/productos/${product.id}`} className="group">
      <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
        <div className="aspect-square overflow-hidden">
          <Image
            src={product.image_url || "/placeholder.svg"}
            alt={product.name}
            width={400}
            height={400}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
          <p className="text-2xl font-bold text-gray-900 mb-2">${product.price.toLocaleString()}</p>
          {product.size && <p className="text-sm text-gray-600 mb-2">Talles: {product.size}</p>}
          {product.description && <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>}
        </div>
      </div>
    </Link>
  )
}