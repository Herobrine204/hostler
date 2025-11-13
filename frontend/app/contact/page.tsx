"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MessageCircle } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "student",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-5xl font-bold text-foreground">Get in Touch</h1>
            <p className="text-xl text-foreground/60">We'd love to hear from you. Send us a message!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card border border-border rounded-xl p-8">
              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-foreground/40"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-foreground/40"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">I'm a:</label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  >
                    <option value="student">Student</option>
                    <option value="owner">Hostel Owner</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">Message</label>
                  <textarea
                    name="message"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-foreground/40 resize-none"
                  />
                </div>

                <button
                  type="button"
                  className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 mt-6"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div>
                  <p className="text-foreground/60 text-sm mb-2">QUICK RESPONSE</p>
                  <p className="text-2xl font-bold text-foreground">We reply in less than 2 hours!</p>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-foreground/60">support@hostler.com</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">WhatsApp</h3>
                      <p className="text-foreground/60">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Chat</h3>
                      <p className="text-foreground/60">Live chat on website</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-foreground/40">📍 Service Area Map</p>
                  <p className="text-foreground/60 text-sm">Available across India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
