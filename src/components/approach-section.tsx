"use client"

import { Button } from "@/components/ui/button"

export function ApproachSection() {
  const approaches = [
    {
      image: "/business-handshake-partnership.png",
      title: "Partnership",
      description: "Collaborative relationships built on trust and shared success",
    },
    {
      image: "/modern-staircase-architecture-design.jpg",
      title: "Growth",
      description: "Scalable strategies that evolve with your business needs",
    },
    {
      image: "/luxury-crystal-glass-design.jpg",
      title: "Excellence",
      description: "Uncompromising quality in every solution we deliver",
    },
  ]

  return (
    <section className="px-6 py-16 lg:px-12 lg:py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-light mb-4 text-balance text-white">
            A comprehensive approach
            <br />
            for future-ready solutions
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {approaches.map((approach, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={approach.image || "/placeholder.svg"}
                  alt={approach.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-medium text-center text-white mb-2">{approach.title}</h3>
              <p className="text-sm text-gray-400 text-center">{approach.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-light mb-8 text-white">Ready to transform your business?</h3>
          <Button className="bg-green-600 text-white hover:bg-green-700 px-8 py-3 rounded-full">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  )
}
