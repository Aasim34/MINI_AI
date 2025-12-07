import React, { useState } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  const [user] = useState({ name: 'John Doe', email: 'john@example.com' });
  const primaryColor = "#FFB74D";
  const secondaryColor = "#FF9800";
  const accentColor = "#FF5722";

  const stats = [
    { label: 'Total Projects', value: '24', change: '+12%' },
    { label: 'Active Users', value: '1.2K', change: '+8%' },
    { label: 'Revenue', value: '$45K', change: '+23%' },
    { label: 'Success Rate', value: '98%', change: '+5%' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 text-white p-6" style={{ backgroundColor: primaryColor }}>
        <div className="mb-10">
          <h1 className="text-2xl font-bold">Buddy's World</h1>
        </div>
        
        <nav className="space-y-2">
          <Link href="/dashboard" className="block px-4 py-3 rounded-lg bg-white bg-opacity-20">
            Dashboard
          </Link>
          <Link href="/dashboard/projects" className="block px-4 py-3 rounded-lg hover:bg-white hover:bg-opacity-10">
            Projects
          </Link>
          <Link href="/dashboard/analytics" className="block px-4 py-3 rounded-lg hover:bg-white hover:bg-opacity-10">
            Analytics
          </Link>
          <Link href="/dashboard/settings" className="block px-4 py-3 rounded-lg hover:bg-white hover:bg-opacity-10">
            Settings
          </Link>
          <Link href="/" className="block px-4 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 mt-auto">
            ← Back to Home
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2" style={{ color: primaryColor }}>Dashboard</h1>
            <p className="text-gray-600">Welcome back, {user.name}!</p>
          </div>
          <button className="px-6 py-3 rounded-lg text-white font-bold" style={{ backgroundColor: accentColor }}>
            + New Project
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow p-6">
              <div className="text-sm text-gray-600 mb-2">{stat.label}</div>
              <div className="text-3xl font-bold mb-2" style={{ color: primaryColor }}>{stat.value}</div>
              <div className="text-sm font-medium" style={{ color: accentColor }}>{stat.change} from last month</div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <h2 className="text-xl font-bold mb-6" style={{ color: primaryColor }}>Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-center justify-between py-4 border-b">
                <div>
                  <div className="font-medium">New project created</div>
                  <div className="text-sm text-gray-600">2 hours ago</div>
                </div>
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: accentColor }}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition cursor-pointer">
            <h3 className="font-bold mb-2" style={{ color: primaryColor }}>Create Project</h3>
            <p className="text-gray-600 text-sm">Start a new project from scratch</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition cursor-pointer">
            <h3 className="font-bold mb-2" style={{ color: primaryColor }}>View Analytics</h3>
            <p className="text-gray-600 text-sm">Check your performance metrics</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition cursor-pointer">
            <h3 className="font-bold mb-2" style={{ color: primaryColor }}>Invite Team</h3>
            <p className="text-gray-600 text-sm">Collaborate with team members</p>
          </div>
        </div>
      </div>
    </div>
  );
}
