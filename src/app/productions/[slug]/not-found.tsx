import Link from "next/link"
import { Button } from "@/components/ui/button"


export default function NotFound() {
  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
   
      <div className="pt-20 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <h2 className="text-2xl mb-6">Production Not Found</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">The production you're looking for doesn't exist.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/productions">
              <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 px-8 py-3 rounded-full">
                Back to Productions
              </Button>
            </Link>
            <Link href="/">
              <Button
                variant="outline"
                className="border-gray-300 dark:border-gray-600 bg-transparent px-8 py-3 rounded-full"
              >
                Go Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
