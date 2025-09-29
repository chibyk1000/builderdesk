"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X } from "lucide-react"

const comparisonData = [
  {
    feature: "Natural Language Processing",
    assistAI: true,
    competitor1: true,
    competitor2: false,
  },
  {
    feature: "Advanced Task Automation",
    assistAI: true,
    competitor1: false,
    competitor2: true,
  },
  {
    feature: "Real-time Collaboration",
    assistAI: true,
    competitor1: true,
    competitor2: false,
  },
  {
    feature: "Enterprise Security",
    assistAI: true,
    competitor1: false,
    competitor2: false,
  },
  {
    feature: "Custom Workflow Builder",
    assistAI: true,
    competitor1: false,
    competitor2: true,
  },
  {
    feature: "Multi-language Support",
    assistAI: true,
    competitor1: true,
    competitor2: false,
  },
  {
    feature: "API Integrations",
    assistAI: true,
    competitor1: false,
    competitor2: false,
  },
  {
    feature: "24/7 Support",
    assistAI: true,
    competitor1: false,
    competitor2: true,
  },
]

export function ComparisonSection() {
  return (
    <section id="compare" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why choose <span className="text-primary">Assist</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how we compare to other virtual assistant solutions in the market.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Feature Column */}
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-center">Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {comparisonData.map((item, index) => (
                  <div key={index} className="py-3 text-sm font-medium">
                    {item.feature}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* AssistAI Column */}
            <Card className="bg-primary/5 border-primary/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-center text-primary">
                  Assist
                  <Badge className="ml-2 bg-primary text-primary-foreground">Recommended</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {comparisonData.map((item, index) => (
                  <div key={index} className="py-3 flex justify-center">
                    {item.assistAI ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <X className="w-5 h-5 text-red-500" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Competitor 1 Column */}
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-center text-muted-foreground">Competitor A</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {comparisonData.map((item, index) => (
                  <div key={index} className="py-3 flex justify-center">
                    {item.competitor1 ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <X className="w-5 h-5 text-red-500" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Competitor 2 Column */}
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-center text-muted-foreground">Competitor B</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {comparisonData.map((item, index) => (
                  <div key={index} className="py-3 flex justify-center">
                    {item.competitor2 ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <X className="w-5 h-5 text-red-500" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
