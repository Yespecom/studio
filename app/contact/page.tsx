import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
          
            <span className="text-xl font-normal text-gray-900">Yesp Studio</span>
            <Badge variant="secondary" className="ml-2 text-xs bg-gray-100 text-gray-700">
              Beta
            </Badge>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/#features" className="text-gray-600 hover:text-gray-900 transition-colors font-normal">
              Products
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors font-normal">
              Blog
            </Link>
            <Link href="/contact" className="text-blue-600 font-medium">
              Contact
            </Link>
          </nav>
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white border-0">
            <Link href="/signup">Join Yesp Studio</Link>
          </Button>
        </div>
      </header>

      <main className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-normal text-gray-900 mb-4 text-balance">Get in Touch</h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
              Ready to transform your business with AI-powered solutions? We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h2>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                      First Name *
                    </Label>
                    <Input id="firstName" type="text" required className="mt-1" placeholder="Enter your first name" />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                      Last Name *
                    </Label>
                    <Input id="lastName" type="text" required className="mt-1" placeholder="Enter your last name" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address *
                  </Label>
                  <Input id="email" type="email" required className="mt-1" placeholder="Enter your email address" />
                </div>

                <div>
                  <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                    Company Name
                  </Label>
                  <Input id="company" type="text" className="mt-1" placeholder="Enter your company name" />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-sm font-medium text-gray-700">
                    Subject *
                  </Label>
                  <Input id="subject" type="text" required className="mt-1" placeholder="What's this about?" />
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    className="mt-1"
                    placeholder="Tell us more about your project or inquiry..."
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Email</h3>
                      <p className="text-gray-600">contact@yesptech.in</p>
                      <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Phone</h3>
                      <p className="text-gray-600">+91 90012 70298</p>
                      <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM IST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Location</h3>
                      <p className="text-gray-600">India</p>
                      <p className="text-sm text-gray-500">Remote-first company</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday</p>
                      <p className="text-sm text-gray-500">9:00 AM - 6:00 PM IST</p>
                    </div>
                  </div>
                </div>
              </div>

         

          
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 py-12 px-4 mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
               
                <span className="text-lg font-normal text-gray-900">Yesp Studio</span>
              </div>
              <p className="text-sm text-gray-600">About Yesp Corporation – Business growth SaaS in beta</p>
              <p className="text-sm text-gray-600">Contact: contact@yesptech.in | +91 90012 70298</p>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="/products/feedlooply" className="hover:text-gray-900 transition-colors">
                    Feedlooply
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-gray-900 transition-colors">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link href="/signup" className="hover:text-gray-900 transition-colors">
                    Beta Access
                  </Link>
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
                <li>
                  <Link href="/partner" className="hover:text-gray-900 transition-colors">
                    Partner Program
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
            <p className="text-sm text-gray-600">© 2025 Yesp Corporation – Made with ❤️</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
