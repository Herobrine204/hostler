"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Home, Book, Utensils } from 'lucide-react';

// Helper component for a loading placeholder
const ComponentLoader = () => (
  <div className="p-4 rounded-lg bg-gray-50 flex items-center justify-center min-h-[300px]">
    Loading component...
  </div>
);

// --- Dynamic Imports (Using relative paths to be safe) ---

const RoomVisualization = dynamic(
  () => import('../components/room-visualization').then(mod => mod.RoomVisualization),
  { 
    ssr: false,
    loading: () => <ComponentLoader /> 
  }
);

const OnlineBooking = dynamic(
  () => import('../components/online-booking').then(mod => mod.OnlineBooking),
  { 
    ssr: false,
    loading: () => <ComponentLoader /> 
  }
);

const MessBillDashboard = dynamic(
  () => import('../components/mess-bill-dashboard').then(mod => mod.MessBillDashboard),
  { 
    ssr: false,
    loading: () => <ComponentLoader /> 
  }
);

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Header/Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link className="flex items-center gap-2 font-bold text-lg" href="/">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold">H</span>
            <span>Hostler</span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <Link className="font-medium text-green-600 font-bold" href="/">Home</Link>
            <Link className="font-medium text-gray-600 hover:text-green-600" href="/features">Features</Link>
            <Link className="font-medium text-gray-600 hover:text-green-600" href="/dashboard">Dashboard</Link>
            <Link className="font-medium text-gray-600 hover:text-green-600" href="/contact">Contact</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link className="font-medium text-gray-600 hover:text-green-600" href="/auth">Login</Link>
            <Link className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-6 text-sm font-medium text-white shadow transition-colors hover:bg-green-700" href="/auth?tab=signup">
              Sign Up Free
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50/50">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Everything you need to manage your hostel efficiently
              </h1>
            </div>

            {/* 1. Room Allocation Section */}
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-green-100 text-green-600">
                    <Home className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold">Smart Room Allocation</h2>
                </div>
                <p className="text-gray-600">
                  Automatically assign rooms based on student preferences, room type, and availability.
                </p>
                <ul className="grid gap-2 text-gray-600">
                  <li>✓ Automatic assignment algorithms</li>
                  <li>✓ Preference-based matching</li>
                  <li>✓ Real-time availability tracking</li>
                </ul>
              </div>
              <div className="w-full rounded-lg border bg-white p-4 shadow-sm">
                <RoomVisualization />
              </div>
            </div>

            {/* 2. Online Booking Section */}
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="w-full">
                <OnlineBooking />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-green-100 text-green-600">
                    <Book className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold">Online Booking System</h2>
                </div>
                <p className="text-gray-600">
                  Let students book rooms online with just a few clicks. Reduce paperwork.
                </p>
                <ul className="grid gap-2 text-gray-600">
                  <li>✓ Simple booking interface</li>
                  <li>✓ Instant confirmations</li>
                  <li>✓ Digital documentation</li>
                </ul>
              </div>
            </div>
            
            {/* 3. Mess Bill Section */}
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-green-100 text-green-600">
                    <Utensils className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold">Mess Bill Tracking</h2>
                </div>
                <p className="text-gray-600">
                  Transparent mess billing system with itemized breakdowns and easy payment options.
                </p>
                <ul className="grid gap-2 text-gray-600">
                  <li>✓ Detailed bill records</li>
                  <li>✓ Payment reminders</li>
                  <li>✓ Monthly summaries</li>
                </ul>
              </div>
              <div className="w-full">
                <MessBillDashboard />
              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}