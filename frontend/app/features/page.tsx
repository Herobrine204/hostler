"use client"
import { Home, BookOpen, Utensils } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-24 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">Powerful Features</h1>
            <p className="text-xl text-foreground/60">Everything you need to manage your hostel efficiently</p>
          </div>

          {/* Room Allocation Feature */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Smart Room Allocation</h2>
              <p className="text-lg text-foreground/70">
                Automatically assign rooms based on student preferences, room type, and availability. Save hours on
                manual allocation.
              </p>
              <ul className="space-y-2 text-foreground/60">
                <li>✓ Automatic assignment algorithms</li>
                <li>✓ Preference-based matching</li>
                <li>✓ Real-time availability tracking</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 h-64 flex items-center justify-center text-foreground/40">
              [Room allocation visualization]
            </div>
          </div>

          {/* Online Booking */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 h-64 flex items-center justify-center text-foreground/40 order-2 md:order-1">
              [Online booking interface]
            </div>
            <div className="space-y-4 order-1 md:order-2">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Online Booking System</h2>
              <p className="text-lg text-foreground/70">
                Let students book rooms online with just a few clicks. Reduce paperwork and improve user experience.
              </p>
              <ul className="space-y-2 text-foreground/60">
                <li>✓ Simple booking interface</li>
                <li>✓ Instant confirmations</li>
                <li>✓ Digital documentation</li>
              </ul>
            </div>
          </div>

          {/* Mess Bill Tracker */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Utensils className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Mess Bill Tracking</h2>
              <p className="text-lg text-foreground/70">
                Transparent mess billing system with itemized breakdowns and easy payment options.
              </p>
              <ul className="space-y-2 text-foreground/60">
                <li>✓ Detailed bill records</li>
                <li>✓ Payment reminders</li>
                <li>✓ Monthly summaries</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 h-64 flex items-center justify-center text-foreground/40">
              [Mess bill dashboard]
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
