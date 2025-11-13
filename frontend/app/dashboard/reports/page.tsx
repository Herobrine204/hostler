import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Home, Users, CreditCard, FileText } from "lucide-react"

export default function ReportsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="flex min-h-screen pt-20">
        <aside className="hidden lg:block w-64 bg-foreground/5 border-r border-border p-6 space-y-2">
          <Link
            href="/dashboard"
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-foreground/70 hover:bg-muted transition-colors"
          >
            <Home className="w-5 h-5" />
            <span className="font-medium">Home</span>
          </Link>
          <Link
            href="/dashboard/rooms"
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-foreground/70 hover:bg-muted transition-colors"
          >
            <Home className="w-5 h-5" />
            <span className="font-medium">Rooms</span>
          </Link>
          <Link
            href="/dashboard/students"
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-foreground/70 hover:bg-muted transition-colors"
          >
            <Users className="w-5 h-5" />
            <span className="font-medium">Students</span>
          </Link>
          <Link
            href="/dashboard/mess"
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-foreground/70 hover:bg-muted transition-colors"
          >
            <CreditCard className="w-5 h-5" />
            <span className="font-medium">Mess</span>
          </Link>
          <Link
            href="/dashboard/payments"
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-foreground/70 hover:bg-muted transition-colors"
          >
            <CreditCard className="w-5 h-5" />
            <span className="font-medium">Payments</span>
          </Link>
          <div className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-primary text-white">
            <FileText className="w-5 h-5" />
            <span className="font-medium">Reports</span>
          </div>
        </aside>

        <main className="flex-1 p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-foreground mb-8">Reports</h1>
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <p className="text-foreground/60">Reports page - Coming soon</p>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </main>
  )
}
