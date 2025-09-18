"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Users, Shield, Bot, Workflow } from "lucide-react"
import { JoinYespModal } from "@/components/join-yesp-modal"

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* <Image src="/yesp-logo.png" alt="Yesp Studio Logo" width={32} height={32} className="w-8 h-8" /> */}
            <span className="text-xl font-normal text-gray-900">Yesp Studio</span>
            <Badge variant="secondary" className="ml-2 text-xs bg-gray-100 text-gray-700">
              Beta
            </Badge>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-gray-900 transition-colors font-normal">
              Products
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors font-normal">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors font-normal">
              Contact
            </Link>
          </nav>
          <Button onClick={() => setIsModalOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white border-0">
            Join Yesp Studio
          </Button>
        </div>
      </header>

      <section className="py-16 sm:py-20 lg:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8">
            <Badge variant="outline" className="mb-6 border-blue-200 text-blue-700 bg-blue-50">
              🚀 Premium Beta Access Available
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-gray-900 text-balance leading-tight tracking-tight">
              Join innovative companies driving <span className="text-blue-600">exponential growth</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto text-pretty leading-relaxed">
              One intelligent platform for all your SaaS and AI needs. Yesp offers a unified suite of beta products for
              workflow automation, lead generation, community building, and intelligent AI agents.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button
                onClick={() => setIsModalOpen(true)}
                size="lg"
                className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-sm flex items-center gap-2"
              >
                Join Yesp Studio
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 px-8 border-gray-300 hover:bg-gray-50 bg-white text-gray-700"
              >
                <Link href="/contact">Request a Demo</Link>
              </Button>
            </div>

            <div className="pt-6 text-sm text-gray-500">
              <p>✨ No credit card required • Early access to cutting-edge tools</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-normal text-gray-900 mb-4">Featured Beta Product</h2>
            <p className="text-gray-600 text-lg">Start with our flagship automation platform</p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="p-8 sm:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                      <Workflow className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-normal text-gray-900">Feedlooply</h3>
                      <p className="text-gray-600">AI Workflow & Form Automation</p>
                    </div>
                  </div>

                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center gap-2">
                      <Bot className="w-4 h-4 text-blue-600" />
                      AI-powered form creation and data clustering
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-blue-600" />
                      Seamless collaboration with workspaces
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-blue-600" />
                      Early beta access for premium users
                    </li>
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                      <Link href="https://feedlooply.com/">Try Feedlooply Beta</Link>
                    </Button>
                    <Button
                      onClick={() => setIsModalOpen(true)}
                      variant="outline"
                      className="flex-1 border-gray-300 hover:bg-gray-50 bg-white"
                    >
                      Join Beta Access
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-gray-200 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <Workflow className="w-16 h-16 text-blue-600 mx-auto" />
                  
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-normal text-gray-900 mb-4 text-balance">
              Your Growth Stack, Unified
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
              Yesp is a flexible SaaS + AI suite designed to help businesses scale efficiently:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-normal text-gray-900 mb-3">Subscribe to Products</h3>
              <p className="text-gray-600 leading-relaxed">
                Subscribe to individual products or the full suite – flexible pricing for your business needs.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Bot className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-normal text-gray-900 mb-3">Automate Workflows</h3>
              <p className="text-gray-600 leading-relaxed">
                Automate workflows, sales, and lead generation – reduce manual work and accelerate results.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-normal text-gray-900 mb-3">AI-Powered Agents</h3>
              <p className="text-gray-600 leading-relaxed">
                Leverage AI-powered agents to optimize operations and drive exponential business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-50 border-t border-gray-200 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                {/* <Image src="/yesp-logo.png" alt="Yesp Studio Logo" width={32} height={32} className="w-8 h-8" /> */}
                <span className="text-lg font-normal text-gray-900">Yesp Studio</span>
              </div>
              <p className="text-sm text-gray-600">About Yesp Corporation – Business growth SaaS in beta</p>
              <p className="text-sm text-gray-600">Contact: contact@yesptech.in | +91 90012 70298</p>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="https://feedlooply.com/" className="hover:text-gray-900 transition-colors">
                    Feedlooply
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link href="" className="hover:text-gray-900 transition-colors">
                    {" "}
                    Ecom Studio{" "}
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href="" className="hover:text-gray-900 transition-colors">
                    {" "}
                    Web Studio{" "}
                  </Link>{" "}
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="/blog" className="hover:text-gray-900 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-gray-900 transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-gray-900 transition-colors">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>contact@yesptech.in</li>
                <li>+91 90012 70298</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-600">© 2025 Yesp Corporation – Made with ❤️ from Erode </p>
          </div>
        </div>
      </footer>

      <JoinYespModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
