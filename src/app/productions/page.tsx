
import Productions from "@/components/Productions"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Productions - Marketing Agency",
  description: "Explore our portfolio of award-winning productions, from commercial campaigns to documentaries.",
}

export default function ProductionsPage() {
  return (
    <main className="relative">
      
      <div className="pt-16 sm:pt-20">
        <Productions />
      </div>
    </main>
  )
}
