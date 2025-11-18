import React from 'react';
import Link from 'next/link';

export default function Blog() {
  const primaryColor = "#007BFF";
  
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="text-indigo-600 font-semibold">← Back to Home</Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">"Customer Churn Prediction Insights"</h1>
        <p className="text-xl text-gray-600 mb-12">Latest news and updates</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#007BFF" }}>  </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"2023-10-01" • "Churn Analysis"</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">"Understanding Customer Churn: Why It Matters"</h3>
              <p className="text-gray-600 mb-4">"Explore the importance of predicting customer churn for business sustainability."</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">By "Jane Doe"</span>
                <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-700">Read More →</a>
              </div>
            </div>
          </article>
          <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#007BFF" }}>  </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"2023-10-15" • "Data Science"</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">"Top 5 Techniques for Accurate Churn Prediction"</h3>
              <p className="text-gray-600 mb-4">"Learn about the most effective methods for predicting customer churn accurately."</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">By "John Smith"</span>
                <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-700">Read More →</a>
              </div>
            </div>
          </article>
          <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#007BFF" }}>  </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"2023-10-20" • "Case Studies"</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">"Case Study: Reducing Churn with Predictive Analytics"</h3>
              <p className="text-gray-600 mb-4">"A detailed study on how one company successfully reduced churn rates using analytics."</p>
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
