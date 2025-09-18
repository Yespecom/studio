import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles, ArrowLeft } from "lucide-react"

export default function TermsPage() {
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
            <h1 className="text-4xl font-normal text-gray-900">Terms of Service</h1>
            <p className="text-lg text-gray-600">Last updated: January 2025</p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-normal text-gray-900">Agreement to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using Yesp Studio and related services provided by Yesp Corporation ("Company," "we,"
                "our," or "us"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these
                Terms, please do not use our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-normal text-gray-900">Description of Services</h2>
              <p className="text-gray-600 leading-relaxed">
                Yesp Studio is a comprehensive SaaS and AI platform that provides workflow automation, lead generation,
                community building tools, and intelligent AI agents. Our services include but are not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Feedlooply - AI workflow and form automation</li>
                <li>Ecom Studio - E-commerce solutions</li>
                <li>Web Studio - Website development tools</li>
                <li>AI-powered business automation tools</li>
                <li>Beta access to new products and features</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-normal text-gray-900">User Accounts and Registration</h2>
              <div className="space-y-3">
                <p className="text-gray-600 leading-relaxed">
                  To access certain features, you must create an account and provide accurate information. You are
                  responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized access</li>
                  <li>Providing accurate and up-to-date information</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-normal text-gray-900">Acceptable Use Policy</h2>
              <p className="text-gray-600 leading-relaxed">You agree not to use our services to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Transmit harmful, offensive, or illegal content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt our services</li>
                <li>Use our services for competitive intelligence or benchmarking</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-normal text-gray-900">Beta Services</h2>
              <p className="text-gray-600 leading-relaxed">
                Some of our services are offered in beta. Beta services are provided "as is" and may contain bugs or
                limitations. We may modify, suspend, or discontinue beta services at any time without notice. Your
                feedback and usage data help us improve these services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-normal text-gray-900">Subscription and Payment</h2>
              <div className="space-y-3">
                <p className="text-gray-600 leading-relaxed">
                  Our services are offered through various subscription plans:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Subscription fees are billed in advance on a recurring basis</li>
                  <li>All fees are non-refundable unless otherwise stated</li>
                  <li>We may change pricing with 30 days' notice</li>
                  <li>You may cancel your subscription at any time</li>
                  <li>Access continues until the end of your billing period</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-normal text-gray-900">Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed">
                All content, features, and functionality of our services are owned by Yesp Corporation and protected by
                international copyright, trademark, and other intellectual property laws. You retain ownership of
                content you create using our services, while granting us necessary rights to provide the services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-normal text-gray-900">Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                To the maximum extent permitted by law, Yesp Corporation shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages, including but not limited to loss of profits,
                data, or business opportunities.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-normal text-gray-900">Termination</h2>
              <p className="text-gray-600 leading-relaxed">
                We may terminate or suspend your account and access to our services at our sole discretion, without
                prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or
                third parties.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-normal text-gray-900">Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify users of significant changes via
                email or through our platform. Continued use of our services after changes constitutes acceptance of the
                new Terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-normal text-gray-900">Contact Information</h2>
              <p className="text-gray-600 leading-relaxed">
                For questions about these Terms of Service, please contact us:
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
