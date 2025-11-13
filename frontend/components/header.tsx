"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Moon, Sun } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement
    if (html.classList.contains("dark")) {
      html.classList.remove("dark")
      setIsDark(false)
    } else {
      html.classList.add("dark")
      setIsDark(true)
    }
  }

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:scale-105 transition-transform">
            H
          </div>
          <span className="font-bold text-xl text-foreground hidden sm:inline">Hostler</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-foreground/80 hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/features" className="text-foreground/80 hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="/dashboard" className="text-foreground/80 hover:text-primary transition-colors">
            Dashboard
          </Link>
          <Link href="/contact" className="text-foreground/80 hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <Link
            href="/auth"
            className="hidden sm:inline px-4 py-2 text-foreground/80 hover:text-primary transition-colors"
          >
            Login
          </Link>
          <Link
            href="/auth?tab=signup"
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all hover:scale-105"
          >
            Sign Up Free
          </Link>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2" aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden border-t border-border bg-background">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="/" className="text-foreground/80 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/features" className="text-foreground/80 hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="/dashboard" className="text-foreground/80 hover:text-primary transition-colors">
              Dashboard
            </Link>
            <Link href="/contact" className="text-foreground/80 hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="/auth" className="text-foreground/80 hover:text-primary transition-colors">
              Login
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
