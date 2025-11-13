"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Lock, Phone, User, Eye, EyeOff } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AuthPage() {
  const [tab, setTab] = useState("login")
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
    rememberMe: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="pt-20 pb-12 px-4 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md">
          {/* Tabs */}
          <div className="flex gap-4 mb-8 bg-muted p-1 rounded-lg">
            <button
              onClick={() => setTab("login")}
              className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
                tab === "login" ? "bg-primary text-white" : "text-foreground/70 hover:text-foreground"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setTab("signup")}
              className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
                tab === "signup" ? "bg-primary text-white" : "text-foreground/70 hover:text-foreground"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <div className="bg-card border border-border rounded-xl p-8 space-y-6">
            <div className="text-center space-y-2 mb-6">
              <h2 className="text-2xl font-bold text-foreground">
                {tab === "login" ? "Welcome Back" : "Join Hostler"}
              </h2>
              <p className="text-foreground/60">{tab === "login" ? "Login to your account" : "Create a new account"}</p>
            </div>

            <form className="space-y-4">
              {tab === "signup" && (
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-foreground/40" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-foreground/40"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-foreground/40" />
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-foreground/40"
                  />
                </div>
              </div>

              {tab === "signup" && (
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-5 h-5 text-foreground/40" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-foreground/40"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-5 h-5 text-foreground/40" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-10 pr-10 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-foreground/40"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-foreground/40 hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {tab === "login" && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      className="w-4 h-4 rounded border-border"
                    />
                    <span className="text-foreground/70">Remember me</span>
                  </label>
                  <a href="#" className="text-primary hover:text-primary/80">
                    Forgot password?
                  </a>
                </div>
              )}

              <button
                type="button"
                className="w-full py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 mt-6"
              >
                {tab === "login" ? "Login" : "Create Account"}
              </button>
            </form>

            {/* Google Button */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-card text-foreground/60">Or continue with</span>
              </div>
            </div>

            <button className="w-full py-2 border border-border rounded-lg font-semibold text-foreground hover:bg-muted transition-colors flex items-center justify-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google
            </button>
          </div>

          <p className="text-center text-foreground/60 text-sm mt-6">
            {tab === "login" ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => setTab(tab === "login" ? "signup" : "login")}
              className="text-primary hover:text-primary/80 font-semibold"
            >
              {tab === "login" ? "Sign up" : "Login"}
            </button>
          </p>
        </div>
      </div>

      <Footer />
    </main>
  )
}
