import Link from "next/link"
import { Linkedin, Twitter, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Hostler</h3>
            <p className="text-foreground/60 text-sm">Smart hostel management for the modern generation</p>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold">Product</h4>
            <Link href="/features" className="block text-foreground/60 hover:text-primary transition-colors text-sm">
              Features
            </Link>
            <Link href="/dashboard" className="block text-foreground/60 hover:text-primary transition-colors text-sm">
              Dashboard
            </Link>
            <Link href="/pricing" className="block text-foreground/60 hover:text-primary transition-colors text-sm">
              Pricing
            </Link>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold">Company</h4>
            <Link href="/about" className="block text-foreground/60 hover:text-primary transition-colors text-sm">
              About
            </Link>
            <Link href="/contact" className="block text-foreground/60 hover:text-primary transition-colors text-sm">
              Contact
            </Link>
            <Link href="/" className="block text-foreground/60 hover:text-primary transition-colors text-sm">
              Blog
            </Link>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex gap-3">
              <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                <Linkedin className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                <Github className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-foreground/60 text-sm">
          <p>© 2025 Hostler. Built by students, for students. Backend Powered by Python 🐍</p>
        </div>
      </div>
    </footer>
  )
}
