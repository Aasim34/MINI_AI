import React from 'react';
import Link from 'next/link';

export default function Blog() {
  const primaryColor = "#3E4E50";
  
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="text-indigo-600 font-semibold">← Back to Home</Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">"Photography Portfolio Blog"</h1>
        <p className="text-xl text-gray-600 mb-12">Latest news and updates</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#3E4E50" }}>  </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"2023-10-01" • "Photography Tips"</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">"Capturing the Urban Landscape: Tips for City Photography"</h3>
              <p className="text-gray-600 mb-4">"Explore essential tips to elevate your urban photography skills in bustling cityscapes."</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">By "Jane Doe"</span>
                <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-700">Read More →</a>
              </div>
            </div>
          </article>
          <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#3E4E50" }}>  </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"2023-10-05" • "Photography Techniques"</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">"The Magic of Golden Hour: Why Timing Matters"</h3>
              <p className="text-gray-600 mb-4">"Discover how the golden hour can transform your photographs with its magical lighting."</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">By "John Smith"</span>
                <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-700">Read More →</a>
              </div>
            </div>
          </article>
          <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#3E4E50" }}>  </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"2023-10-10" • "Travel Photography"</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">"Exploring Nature: A Journey Through Landscape Photography"</h3>
              <p className="text-gray-600 mb-4">"Join me as I share my experiences and techniques for capturing breathtaking landscapes."</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">By "Emily Chen"</span>
                <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-700">Read More →</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
