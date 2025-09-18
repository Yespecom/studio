import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles, ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
           
            <span className="text-xl font-normal text-gray-900">Yesp Studio</span>
          </Link>
          <Button asChild variant="outline" className="border-gray-300 hover:bg-gray-50 bg-transparent">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-normal text-gray-900">Privacy Policy</h1>
            <p className="text-lg text-gray-600">Last updated: January 2025</p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-normal text-gray-900">Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                At Yesp Corporation ("we," "our," or "us"), we are committed to protecting your privacy and personal
                information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                when you use our Yesp Studio platform and related services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-normal text-gray-900">Information We Collect</h2>
              <div className="space-y-3">
                <h3 className="text-xl font-medium text-gray-900">Personal Information</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Name, email address, and contact information</li>
                  <li>Account credentials and authentication data</li>
                  <li>Payment and billing information</li>
                  <li>Company information and business details</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-medium text-gray-900">Usage Information</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Platform usage data and analytics</li>
                  <li>Feature interactions and preferences</li>
                  <li>Device information and browser data</li>
                  <li>IP addresses and location data</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-normal text-gray-900">How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Provide and maintain our services</li>
                <li>Process transactions and manage subscriptions</li>
                <li>Improve our platform and develop new features</li>
                <li>Send important updates and communications</li>
                <li>Provide customer support and assistance</li>
                <li>Ensure security and prevent fraud</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-normal text-gray-900">Information Sharing</h2>
              <p className="text-gray-600 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information
                only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and prevent fraud</li>
                <li>With trusted service providers who assist in our operations</li>
                <li>In connection with business transfers or mergers</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-normal text-gray-900">Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We implement industry-standard security measures to protect your information, including encryption,
                secure servers, and regular security audits. However, no method of transmission over the internet is
                100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-normal text-gray-900">Your Rights</h2>
              <p className="text-gray-600 leading-relaxed">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Access and review your personal information</li>
                <li>Request corrections to inaccurate data</li>
                <li>Delete your account and associated data</li>
                <li>Opt-out of marketing communications</li>
                <li>Data portability and export</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-normal text-gray-900">Cookies and Tracking</h2>
              <p className="text-gray-600 leading-relaxed">
                We use cookies and similar technologies to enhance your experience, analyze usage patterns, and provide
                personalized content. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-normal text-gray-900">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg space-y-2">
                <p className="text-gray-900 font-medium">Yesp Corporation</p>
                <p className="text-gray-600">Email: contact@yesptech.in</p>
                <p className="text-gray-600">Phone: +91 90012 70298</p>
                <p className="text-gray-600">Address: Erode, Tamil Nadu, India</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 py-8 px-4 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-600">© 2025 Yesp Corporation – Made with ❤️ from Erode</p>
        </div>
      </footer>
    </div>
  )
}
