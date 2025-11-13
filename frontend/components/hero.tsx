import Link from "next/link"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">
          Manage Your Hostel <span className="text-primary">Smarter</span> – Save Time, Boost Efficiency
        </h1>

        <p className="text-xl md:text-2xl text-foreground/70 text-balance">
          The All-in-One System for Students & Hostel Owners
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            href="/auth"
            className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
          >
            Login
          </Link>
          <Link
            href="/auth?tab=signup"
            className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all hover:scale-105 active:scale-95"
          >
            Sign Up Free
          </Link>
        </div>

        {/* Animated Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 pt-12">
          <div className="space-y-2 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <p className="text-3xl md:text-4xl font-bold text-primary">500+</p>
            <p className="text-sm md:text-base text-foreground/60">Rooms Managed</p>
          </div>
          <div className="space-y-2 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-3xl md:text-4xl font-bold text-primary">10 min</p>
            <p className="text-sm md:text-base text-foreground/60">Fast Check-in</p>
          </div>
          <div className="space-y-2 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <p className="text-3xl md:text-4xl font-bold text-primary">24/7</p>
            <p className="text-sm md:text-base text-foreground/60">Support</p>
          </div>
        </div>
      </div>
    </section>
  )
}
