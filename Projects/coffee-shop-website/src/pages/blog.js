import React from 'react';
import Link from 'next/link';

export default function Blog() {
  const primaryColor = "#6F4C3E";
  
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="text-indigo-600 font-semibold">← Back to Home</Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">"Coffee Chronicles: Brewed Insights from Our Caf\u00e9"</h1>
        <p className="text-xl text-gray-600 mb-12">Latest news and updates</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#6F4C3E" }}>  </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"2023-10-15" • "Coffee Tips"</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">"The Art of Coffee Brewing: Tips from Our Baristas"</h3>
              <p className="text-gray-600 mb-4">"Discover expert tips from our baristas to elevate your coffee brewing at home."</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">By "Emily Johnson"</span>
                <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-700">Read More →</a>
              </div>
            </div>
          </article>
          <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#6F4C3E" }}>  </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"2023-10-10" • "Specials"</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">"Seasonal Flavors: Fall Coffee Specials You Can't Miss"</h3>
              <p className="text-gray-600 mb-4">"Warm up with our new fall coffee specials featuring pumpkin spice and more."</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">By "Michael Lee"</span>
                <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-700">Read More →</a>
              </div>
            </div>
          </article>
          <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#6F4C3E" }}>  </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"2023-10-05" • "Sustainability"</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">"Sustainability in Coffee: How We're Making a Difference"</h3>
              <p className="text-gray-600 mb-4">"Learn about our commitment to sustainability and how we're supporting ethical sourcing."</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">By "Sarah Thompson"</span>
                <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-700">Read More →</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
