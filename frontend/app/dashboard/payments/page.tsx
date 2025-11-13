import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Home, Users, CreditCard, FileText } from "lucide-react"
import { mockPayments } from "@/lib/mock-data"

export default function PaymentsPage() {
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
          <div className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-primary text-white">
            <CreditCard className="w-5 h-5" />
            <span className="font-medium">Payments</span>
          </div>
          <Link
            href="/dashboard/reports"
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-foreground/70 hover:bg-muted transition-colors"
          >
            <FileText className="w-5 h-5" />
            <span className="font-medium">Reports</span>
          </Link>
        </aside>

        <main className="flex-1 p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-foreground mb-8">Payments Management</h1>

            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted border-b border-border">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Student Name</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Room</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Rent</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Mess</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Other</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Total</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Due Date</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockPayments.map((payment) => (
                      <tr key={payment.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                        <td className="px-6 py-4 font-medium text-foreground">{payment.studentName}</td>
                        <td className="px-6 py-4 font-medium text-foreground">#{payment.roomNumber}</td>
                        <td className="px-6 py-4 text-foreground/70">{payment.roomRent}</td>
                        <td className="px-6 py-4 text-foreground/70">{payment.messCharges}</td>
                        <td className="px-6 py-4 text-foreground/70">{payment.otherCharges}</td>
                        <td className="px-6 py-4 font-semibold text-foreground">{payment.totalAmount}</td>
                        <td className="px-6 py-4 text-foreground/70">{payment.dueDate}</td>
                        <td className="px-6 py-4">
                          <span
                            className={`text-xs font-semibold px-3 py-1 rounded-full ${
                              payment.status === "Paid"
                                ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200"
                                : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200"
                            }`}
                          >
                            {payment.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </main>
  )
}
