"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Calendar, Users, Home, CreditCard, FileText } from "lucide-react"

const occupancyData = [
  { month: "Jan", occupancy: 65 },
  { month: "Feb", occupancy: 72 },
  { month: "Mar", occupancy: 85 },
  { month: "Apr", occupancy: 78 },
  { month: "May", occupancy: 92 },
  { month: "Jun", occupancy: 88 },
]

const sidebarItems = [
  { icon: Home, label: "Home", href: "/dashboard" },
  { icon: Home, label: "Rooms", href: "/dashboard/rooms" },
  { icon: Users, label: "Students", href: "/dashboard/students" },
  { icon: CreditCard, label: "Mess", href: "/dashboard/mess" },
  { icon: CreditCard, label: "Payments", href: "/dashboard/payments" },
  { icon: FileText, label: "Reports", href: "/dashboard/reports" },
]

export default function DashboardPage() {
  const pathname = usePathname()

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="flex min-h-screen pt-20">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 bg-foreground/5 border-r border-border p-6 space-y-2">
          {sidebarItems.map((item, index) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={index}
                href={item.href}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive ? "bg-primary text-white" : "text-foreground/70 hover:bg-muted"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            )
          })}
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-foreground mb-8">Dashboard (Demo Preview)</h1>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              {[
                { label: "Total Rooms", value: "48", icon: Home },
                { label: "Occupied", value: "42", icon: Users },
                { label: "Pending Check-in", value: "5", icon: Calendar },
                { label: "Pending Payments", value: "$2,450", icon: CreditCard },
              ].map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-foreground/60 text-sm">{stat.label}</p>
                        <p className="text-2xl font-bold text-foreground mt-2">{stat.value}</p>
                      </div>
                      <Icon className="w-8 h-8 text-primary/30" />
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Recent Activities */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Upcoming Check-ins</h3>
                <div className="space-y-3">
                  {[
                    { name: "Raj Patel", room: "301", date: "Today" },
                    { name: "Priya Sharma", room: "205", date: "Tomorrow" },
                    { name: "Arjun Singh", room: "412", date: "Dec 15" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 hover:bg-muted rounded-lg transition-colors"
                    >
                      <div>
                        <p className="font-medium text-foreground">{item.name}</p>
                        <p className="text-sm text-foreground/60">Room {item.room}</p>
                      </div>
                      <p className="text-sm text-primary font-medium">{item.date}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Pending Housekeeping</h3>
                <div className="space-y-3">
                  {[
                    { room: "105", issue: "Bedding replacement", priority: "High" },
                    { room: "208", issue: "Deep cleaning needed", priority: "Medium" },
                    { room: "310", issue: "Minor repairs", priority: "Low" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 hover:bg-muted rounded-lg transition-colors"
                    >
                      <div>
                        <p className="font-medium text-foreground">Room {item.room}</p>
                        <p className="text-sm text-foreground/60">{item.issue}</p>
                      </div>
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded ${
                          item.priority === "High"
                            ? "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200"
                            : item.priority === "Medium"
                              ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200"
                              : "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200"
                        }`}
                      >
                        {item.priority}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </main>
  )
}
