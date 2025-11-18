import React from 'react';
import Link from 'next/link';

export default function Blog() {
  const primaryColor = "#4A90E2";
  
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="text-indigo-600 font-semibold">← Back to Home</Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">"Real Estate Portfolio Insights"</h1>
        <p className="text-xl text-gray-600 mb-12">Latest news and updates</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#4A90E2" }}>  </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"2023-10-15" • "Investment Strategies"</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">"Maximizing Your Real Estate Portfolio Returns"</h3>
              <p className="text-gray-600 mb-4">"Discover strategies to enhance your real estate investment returns effectively."</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">By "John Doe"</span>
                <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-700">Read More →</a>
              </div>
            </div>
          </article>
          <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#4A90E2" }}>  </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"2023-10-12" • "Portfolio Management"</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">"The Importance of Diversification in Real Estate"</h3>
              <p className="text-gray-600 mb-4">"Learn why diversifying your real estate portfolio can mitigate risks and boost profits."</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">By "Jane Smith"</span>
                <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-700">Read More →</a>
              </div>
            </div>
          </article>
          <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#4A90E2" }}>  </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"2023-10-10" • "Market Analysis"</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">"Trends to Watch in the Real Estate Market"</h3>
              <p className="text-gray-600 mb-4">"Stay ahead of the curve with key trends that will shape the real estate landscape."</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">By "Emily Johnson"</span>
                <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-700">Read More →</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
