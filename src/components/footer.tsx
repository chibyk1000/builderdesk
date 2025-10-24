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
            <span className="text-blue-500">your workflow</span>?
          </h2>
          <p className="text-xl text-slate-400 mb-8 max-w-3xl mx-auto">
            Join thousands of teams already using BuildersDesk to boost
            productivity and streamline their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className=" text-lg px-8 bg-blue-600 text-white hover:bg-blue-500"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className=" text-lg px-8 border-slate-600 text-slate-200 hover:border-slate-400 hover:text-slate-900 bg-transparent"
            >
              Contact Sales
            </Button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  to="/#features"
                  className="hover:text-foreground transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="hover:text-foreground transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-foreground transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-foreground transition-colors">
                  Integrations
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  to="/about"
                  className="hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="hover:text-foreground transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="#" className="hover:text-foreground transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-foreground transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-foreground transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-foreground transition-colors">
                  Status
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-foreground transition-colors"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-foreground transition-colors"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-foreground transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-foreground transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-2 border-t border-slate-800">
          <div className="font-bold text-lg mb-4 md:mb-0  rounded ">
            <Link
              to="/"
              className="font-bold text-xl bg-white inline-block rounded p-2"
            >
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
