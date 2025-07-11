import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl mb-6">Service Not Found</h2>
        <p className="text-gray-400 mb-8">The service you're looking for doesn&apos;t exist.</p>
        <Link href="/">
          <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full">Back to Services</Button>
        </Link>
      </div>
    </div>
  )
}
