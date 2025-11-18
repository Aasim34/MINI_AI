import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="text-indigo-600 font-semibold">← Back to Home</Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">About Us</h1>
        
        <div className="prose max-w-none space-y-6">
          <p className="text-xl text-gray-700 leading-relaxed">
            We are a team of passionate developers and designers committed to building exceptional digital solutions.
          </p>
          
          <h2 className="text-3xl font-bold text-gray-900 mt-8">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            To empower businesses with innovative technology that drives growth and success.
          </p>
          
          <h2 className="text-3xl font-bold text-gray-900 mt-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
            {[
              { name: 'Alice Johnson', role: 'Founder & CEO' },
              { name: 'Bob Smith', role: 'CTO' },
              { name: 'Carol White', role: 'Lead Designer' },
            ].map((member, idx) => (
              <div key={idx} className="text-center">
                <div className="w-32 h-32 bg-indigo-600 rounded-full mx-auto mb-4"></div>
                <p className="font-semibold text-gray-900">{member.name}</p>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mt-8">Our Values</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Innovation and continuous improvement</li>
            <li>Customer-first approach</li>
            <li>Transparency and integrity</li>
            <li>Collaboration and teamwork</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
