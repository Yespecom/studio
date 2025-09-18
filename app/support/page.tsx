"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
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
  MessageCircle,
  Mail,
  Phone,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SupportPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const sidebarItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard", active: false },
    { icon: Star, label: "My Products", href: "/products", active: false },
    { icon: Activity, label: "Usage & Analytics", href: "/analytics", active: false },
    { icon: Settings, label: "Account Settings", href: "/settings", active: false },
    { icon: Link2, label: "Integrations", href: "/integrations", active: false },
    { icon: HelpCircle, label: "Help Center", href: "/help", active: false },
    { icon: FileText, label: "Documentation", href: "/docs", active: false },
    { icon: Headphones, label: "Support", href: "/support", active: true },
  ]

  const supportOptions = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: MessageCircle,
      availability: "Available now",
      color: "from-green-500 to-green-600",
      available: true,
    },
    {
      title: "Email Support",
      description: "Send us a detailed message",
      icon: Mail,
      availability: "Response within 24 hours",
      color: "from-blue-500 to-blue-600",
      available: true,
    },
    {
      title: "Phone Support",
      description: "Speak directly with our team",
      icon: Phone,
      availability: "Mon-Fri, 9AM-6PM EST",
      color: "from-purple-500 to-purple-600",
      available: false,
    },
  ]

  const recentTickets = [
    {
      id: "#12345",
      subject: "Integration setup issue",
      status: "Open",
      priority: "High",
      created: "2 hours ago",
    },
    {
      id: "#12344",
      subject: "API rate limit question",
      status: "Resolved",
      priority: "Medium",
      created: "1 day ago",
    },
    {
      id: "#12343",
      subject: "Billing inquiry",
      status: "Closed",
      priority: "Low",
      created: "3 days ago",
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
                <h1 className="text-xl font-medium text-foreground">Support</h1>
                <p className="text-sm text-muted-foreground">Get help when you need it</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search support..." className="w-80 pl-10" />
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
          {/* Support Options */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium text-foreground">Contact Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {supportOptions.map((option) => (
                <Card
                  key={option.title}
                  className={`border border-border bg-card ${option.available ? "hover:shadow-md cursor-pointer" : "opacity-60"} transition-shadow`}
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${option.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                    >
                      <option.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-medium text-foreground mb-2">{option.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{option.description}</p>
                    <div className="flex items-center justify-center space-x-2">
                      {option.available ? (
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-green-600">{option.availability}</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{option.availability}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Create Ticket */}
            <Card className="border border-border bg-card">
              <CardHeader>
                <CardTitle>Create Support Ticket</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Brief description of your issue" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="priority">Priority</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="urgent">Urgent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technical">Technical Issue</SelectItem>
                      <SelectItem value="billing">Billing</SelectItem>
                      <SelectItem value="feature">Feature Request</SelectItem>
                      <SelectItem value="integration">Integration</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Please provide detailed information about your issue..."
                    rows={4}
                  />
                </div>
                <Button className="w-full">Submit Ticket</Button>
              </CardContent>
            </Card>

            {/* Recent Tickets */}
            <Card className="border border-border bg-card">
              <CardHeader>
                <CardTitle>Recent Tickets</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentTickets.map((ticket) => (
                  <div
                    key={ticket.id}
                    className="flex items-center justify-between p-4 rounded-lg border border-border bg-muted/30"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-foreground">{ticket.id}</span>
                        <Badge
                          variant={
                            ticket.status === "Open"
                              ? "destructive"
                              : ticket.status === "Resolved"
                                ? "default"
                                : "secondary"
                          }
                        >
                          {ticket.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-foreground">{ticket.subject}</p>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <span>Priority: {ticket.priority}</span>
                        <span>Created: {ticket.created}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {ticket.status === "Open" && <AlertCircle className="h-4 w-4 text-red-500" />}
                      {ticket.status === "Resolved" && <CheckCircle className="h-4 w-4 text-green-500" />}
                      {ticket.status === "Closed" && <CheckCircle className="h-4 w-4 text-gray-500" />}
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full bg-transparent">
                  View All Tickets
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
