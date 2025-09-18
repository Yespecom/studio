"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
  Video,
  MessageCircle,
  ExternalLink,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function HelpPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const sidebarItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard", active: false },
    { icon: Star, label: "My Products", href: "/products", active: false },
    { icon: Activity, label: "Usage & Analytics", href: "/analytics", active: false },
    { icon: Settings, label: "Account Settings", href: "/settings", active: false },
    { icon: Link2, label: "Integrations", href: "/integrations", active: false },
    { icon: HelpCircle, label: "Help Center", href: "/help", active: true },
    { icon: FileText, label: "Documentation", href: "/docs", active: false },
    { icon: Headphones, label: "Support", href: "/support", active: false },
  ]

  const helpCategories = [
    {
      title: "Getting Started",
      description: "Learn the basics and set up your first project",
      icon: BookOpen,
      articles: 12,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides for common tasks",
      icon: Video,
      articles: 8,
      color: "from-green-500 to-green-600",
    },
    {
      title: "API Reference",
      description: "Complete documentation for our APIs",
      icon: FileText,
      articles: 24,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Community Forum",
      description: "Connect with other users and get help",
      icon: MessageCircle,
      articles: 156,
      color: "from-orange-500 to-orange-600",
    },
  ]

  const popularArticles = [
    "How to create your first project",
    "Setting up integrations",
    "Understanding analytics data",
    "Troubleshooting common issues",
    "API authentication guide",
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
                <h1 className="text-xl font-medium text-foreground">Help Center</h1>
                <p className="text-sm text-muted-foreground">Find answers and get support</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search help articles..." className="w-80 pl-10" />
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
          {/* Search Section */}
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">How can we help you?</h2>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search for help articles, tutorials, or guides..."
                  className="pl-12 h-12 text-lg"
                />
              </div>
            </div>
          </div>

          {/* Help Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpCategories.map((category) => (
              <Card
                key={category.title}
                className="border border-border bg-card hover:shadow-md transition-shadow cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-medium text-foreground mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                  <div className="flex items-center justify-center space-x-1">
                    <span className="text-sm font-medium text-primary">{category.articles} articles</span>
                    <ExternalLink className="h-3 w-3 text-primary" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Popular Articles */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border border-border bg-card">
              <CardHeader>
                <CardTitle>Popular Articles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {popularArticles.map((article, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    <span className="text-sm text-foreground">{article}</span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border border-border bg-card">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Start Live Chat
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <Headphones className="h-4 w-4 mr-2" />
                  Contact Support
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  View Documentation
                </Button>
                <Button className="w-full justify-start bg-transparent" variant="outline">
                  <Video className="h-4 w-4 mr-2" />
                  Watch Tutorials
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
