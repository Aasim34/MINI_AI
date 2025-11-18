import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setStats([
      { label: 'Total Users', value: '1,234', change: '+12%' },
      { label: 'Revenue', value: '$45,234', change: '+8%' },
      { label: 'Orders', value: '567', change: '+5%' },
      { label: 'Conversion', value: '3.24%', change: '+1.2%' },
    ]);
    setLoading(false);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="text-indigo-600 font-semibold">← Back to Home</Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600 mb-2">{stat.label}</p>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-green-600 text-sm mt-2">{stat.change} from last month</p>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b">
              <div>
                <p className="font-semibold">New Order</p>
                <p className="text-gray-600 text-sm">Order #12345 received</p>
              </div>
              <span className="text-green-600">+$150</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b">
              <div>
                <p className="font-semibold">New User</p>
                <p className="text-gray-600 text-sm">User registered successfully</p>
              </div>
              <span className="text-blue-600">User</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold">Payment Received</p>
                <p className="text-gray-600 text-sm">Invoice #INV-001 paid</p>
              </div>
              <span className="text-green-600">+$500</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
