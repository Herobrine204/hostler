import { BookOpen, Home, Users, Utensils, CreditCard, ClipboardList } from "lucide-react"

const featuresList = [
  {
    icon: Home,
    title: "Smart Room Allocation",
    description: "Automated room assignment based on preferences and availability",
  },
  {
    icon: BookOpen,
    title: "Online Booking",
    description: "Easy, seamless booking system for students and guests",
  },
  {
    icon: Utensils,
    title: "Mess Bill Tracker",
    description: "Track and manage mess bills with transparency",
  },
  {
    icon: CreditCard,
    title: "Fee & Dues Management",
    description: "Simple payment tracking and reminder system",
  },
  {
    icon: ClipboardList,
    title: "Housekeeping Scheduler",
    description: "Manage cleaning requests and schedules efficiently",
  },
  {
    icon: Users,
    title: "Student Directory",
    description: "Organized student information and contact management",
  },
]

export default function Features() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Powerful Features</h2>
          <p className="text-xl text-foreground/60">Everything you need to run a modern hostel</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-foreground/60">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
