"use client";

import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BACKEND_URL = 'https://hostler.onrender.com';
const STUDENT_ID_TO_FETCH = 1; // Demo: Fetching for Student ID 1

interface Bill {
  id: number;
  month: string;
  amount: number;
  status: 'Paid' | 'Due';
}

export function MessBillDashboard() {
  const [bills, setBills] = useState<Bill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBills() {
      try {
        const response = await fetch(`${BACKEND_URL}/api/students/${STUDENT_ID_TO_FETCH}/mess-bills`);
        if (!response.ok) throw new Error('Failed to fetch mess bills');
        const data: Bill[] = await response.json();
        setBills(data);
      } catch (err: unknown) {
        if (err instanceof Error) setError(err.message);
        else setError("An unknown error occurred");
      } finally {
        setLoading(false);
      }
    }
    fetchBills();
  }, []);

  if (loading) {
    return <div className="p-4 rounded-lg bg-gray-50 flex items-center justify-center min-h-[300px]">Loading bill dashboard...</div>;
  }

  if (error) {
    return <div className="p-4 rounded-lg bg-red-50 text-red-700 flex items-center justify-center min-h-[300px]">Error: {error}</div>;
  }

  const totalPaid = bills
    .filter(bill => bill.status === 'Paid')
    .reduce((sum, bill) => sum + bill.amount, 0);
    
  const totalDue = bills
    .filter(bill => bill.status === 'Due')
    .reduce((sum, bill) => sum + bill.amount, 0);

  const chartData = [
    { name: 'Paid', value: totalPaid },
    { name: 'Due', value: totalDue },
  ];
  
  const COLORS = ['#00C49F', '#FF8042'];

  const latestBill = bills.find(bill => bill.status === 'Due') || bills[bills.length - 1];

  return (
    <div className="w-full h-full p-4 bg-white rounded-lg shadow-sm border flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value: number) => `₹${value.toFixed(2)}`} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="w-full md:w-1/2 p-4">
        <h4 className="font-semibold text-lg text-gray-800">Your Next Bill</h4>
        {latestBill ? (
          <div className="mt-2">
            <p className="text-3xl font-bold text-gray-900">₹{latestBill.amount.toFixed(2)}</p>
            <p className="text-gray-500">For {latestBill.month}</p>
            <span className={`mt-2 inline-block px-3 py-1 text-sm rounded-full ${
              latestBill.status === 'Due'
                ? 'bg-orange-100 text-orange-700'
                : 'bg-green-100 text-green-700'
            }`}>
              Status: {latestBill.status}
            </span>
          </div>
        ) : (
          <p className="text-gray-500 mt-2">No bills found.</p>
        )}
      </div>
    </div>
  );
}
