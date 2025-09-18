"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  MessageSquare,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  Home,
  HelpCircle,
  FileText,
  Headphones,
  Link2,
  Star,
  Activity,
  BookOpen,
  Code,
  Zap,
  Shield,
  ExternalLink,
  ChevronRight,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function DocsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const sidebarItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard", active: false },
    { icon: Star, label: "My Products", href: "/products", active: false },
    { icon: Activity, label: "Usage & Analytics", href: "/analytics", active: false },
    { icon: Settings, label: "Account Settings", href: "/settings", active: false },
    { icon: Link2, label: "Integrations", href: "/integrations", active: false },
    { icon: HelpCircle, label: "Help Center", href: "/help", active: false },
    { icon: FileText, label: "Documentation", href: "/docs", active: true },
    { icon: Headphones, label: "Support", href: "/support", active: false },
  ]

  const docSections = [
    {
      title: "Getting Started",
      description: "Quick start guides and basic concepts",
      icon: BookOpen,
      articles: [
        "Introduction to YESP Studio",
        "Creating your first project",
        "Basic configuration",
        "Understanding the dashboard",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "API Reference",
      description: "Complete API documentation and examples",
      icon: Code,
      articles: ["Authentication", "REST API endpoints", "WebSocket connections", "Rate limiting"],
      color: "from-green-500 to-green-600",
    },
    {
      title: "Advanced Features",
      description: "Power user guides and advanced configurations",
      icon: Zap,
      articles: ["Custom integrations", "Webhook configuration", "Advanced analytics", "Performance optimization"],
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Security",
      description: "Security best practices and compliance",
      icon: Shield,
      articles: ["Security overview", "Data encryption", "Access controls", "Compliance standards"],
      color: "from-red-500 to-red-600",
    },
  ]

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-sidebar border-r border-sidebar-border transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between h-16 px-6 border-b border-sidebar-border flex-shrink-0">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-medium text-sidebar-foreground">YESP Studio</span>
            </div>
            <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
            {sidebarItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors hover:bg-sidebar-primary ${
                  item.active
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:text-sidebar-foreground"
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="sticky top-0 z-30 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-16 items-center justify-between px-6">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(true)}>
                <Menu className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-xl font-medium text-foreground">Documentation</h1>
                <p className="text-sm text-muted-foreground">Comprehensive guides and API reference</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search documentation..." className="w-80 pl-10" />
              </div>
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-primary rounded-full"></span>
              </Button>
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback className="bg-primary text-primary-foreground">YS</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 space-y-8">
          {/* Welcome Section */}
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Welcome to YESP Studio Documentation</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about building with YESP Studio. From quick start guides to detailed API
              references.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Badge variant="secondary">v2.1.0</Badge>
              <Badge variant="outline">Last updated: 2 days ago</Badge>
            </div>
          </div>

          {/* Documentation Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {docSections.map((section) => (
              <Card key={section.title} className="border border-border bg-card">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center`}
                    >
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-medium text-card-foreground">{section.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{section.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  {section.articles.map((article, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group"
                    >
                      <span className="text-sm text-foreground">{article}</span>
                      <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </div>
                  ))}
                  <div className="pt-2">
                    <Button variant="ghost" size="sm" className="w-full">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View all {section.title.toLowerCase()} docs
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Links */}
          <Card className="border border-border bg-card">
            <CardHeader>
              <CardTitle>Quick Links</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" className="justify-start h-auto p-4 bg-transparent">
                  <div className="text-left">
                    <div className="font-medium">API Playground</div>
                    <div className="text-sm text-muted-foreground">Test API endpoints</div>
                  </div>
                </Button>
                <Button variant="outline" className="justify-start h-auto p-4 bg-transparent">
                  <div className="text-left">
                    <div className="font-medium">Code Examples</div>
                    <div className="text-sm text-muted-foreground">Ready-to-use snippets</div>
                  </div>
                </Button>
                <Button variant="outline" className="justify-start h-auto p-4 bg-transparent">
                  <div className="text-left">
                    <div className="font-medium">Changelog</div>
                    <div className="text-sm text-muted-foreground">Latest updates</div>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
