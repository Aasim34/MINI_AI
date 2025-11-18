import React from 'react';
import Link from 'next/link';

export default function Blog() {
  const primaryColor = "#FFB74D";
  
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="text-indigo-600 font-semibold">← Back to Home</Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">"PawTrack Blog"</h1>
        <p className="text-xl text-gray-600 mb-12">Latest news and updates</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#FFB74D" }}>  </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"2023-10-01" • "Safety"</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">"The Benefits of Real-Time GPS Tracking for Dog Walks"</h3>
              <p className="text-gray-600 mb-4">"Discover how GPS tracking enhances safety and peace of mind for dog owners."</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">By "Emily Johnson"</span>
                <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-700">Read More →</a>
              </div>
            </div>
          </article>
          <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#FFB74D" }}>  </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"2023-10-10" • "Tips"</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">"Choosing the Right Dog Walker: What to Look For"</h3>
              <p className="text-gray-600 mb-4">"Learn key factors to consider when selecting a dog walker through our marketplace."</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">By "Michael Smith"</span>
                <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-700">Read More →</a>
              </div>
            </div>
          </article>
          <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#FFB74D" }}>  </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"2023-10-15" • "News"</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">"How PawTrack is Revolutionizing Dog Walking Services"</h3>
              <p className="text-gray-600 mb-4">"Explore how our platform is changing the way dog owners connect with walkers."</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">By "Sara Lee"</span>
                <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-700">Read More →</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
