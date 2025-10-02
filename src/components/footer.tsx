"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="py-10 pt-30 px-4 bg-slate-950 border-t border-slate-800 text-slate-200">
      <div className="max-w-6xl mx-auto">
        {/* CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to transform{" "}
            <span className="text-teal-500">your workflow</span>?
          </h2>
          <p className="text-xl text-slate-400 mb-8 max-w-3xl mx-auto">
            Join thousands of teams already using BuildersDesk to boost
            productivity and streamline their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="rounded-full text-lg px-8 bg-teal-600 text-white hover:bg-teal-500"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-lg px-8 border-slate-600 text-slate-200 hover:border-slate-400 hover:text-slate-900 bg-transparent"
            >
              Contact Sales
            </Button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {[
            {
              title: "Product",
              links: ["Features", "Pricing", "API", "Integrations"],
            },
            { title: "Company", links: ["About", "Blog", "Careers", "Press"] },
            {
              title: "Resources",
              links: ["Documentation", "Help Center", "Community", "Status"],
            },
            {
              title: "Legal",
              links: ["Privacy", "Terms", "Security", "Cookies"],
            },
          ].map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4 text-white">{section.title}</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-2 border-t border-slate-800">
          <div className="font-bold text-lg mb-4 md:mb-0  rounded ">
            <Link to="/" className="font-bold text-xl bg-white inline-block rounded p-2">
              <img src="/logo.png" alt="" className="w-20 h-fit" />
            </Link>
          </div>
          <p className="text-sm text-slate-400">
            © 2025 BuildersDesk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
