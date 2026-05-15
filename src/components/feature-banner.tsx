'use client'

import { Users, TrendingUp, Shield } from 'lucide-react'

export function FeatureBanner() {
  return (
    <div className="bg-blue-400 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {/* Feature 1 */}
          <div className="flex items-center gap-4">
            <Users className="w-8 h-8 flex-shrink-0" />
            <span className="text-sm font-medium">Dedicated Team Support</span>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-4">
            <TrendingUp className="w-8 h-8 flex-shrink-0" />
            <span className="text-sm font-medium">Proven Track Record</span>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-4">
            <Shield className="w-8 h-8 flex-shrink-0" />
            <span className="text-sm font-medium">Industry Certified</span>
          </div>
        </div>
      </div>
    </div>
  )
}
