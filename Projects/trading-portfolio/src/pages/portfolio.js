import React from 'react';
import Link from 'next/link';

export default function Portfolio() {
  const primaryColor = "#4CAF50";
  
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="text-indigo-600 font-semibold">← Back to Home</Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">"Our Work"</h1>
        <p className="text-xl text-gray-600 mb-12">"Explore our trading portfolio showcasing successful projects and strategies."</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#4CAF50" }}></div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"Algorithmic Trading"</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Algorithmic Trading System"</h3>
              <p className="text-gray-600 mb-4">"A sophisticated algorithmic trading system that utilizes machine learning."</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"algorithm"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"machine learning"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"automation"</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#4CAF50" }}></div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"Forex"</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Forex Trading Strategy"</h3>
              <p className="text-gray-600 mb-4">"A comprehensive strategy for trading foreign exchange markets effectively."</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"forex"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"strategy"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"currency"</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#4CAF50" }}></div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"Options"</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Options Trading Simulator"</h3>
              <p className="text-gray-600 mb-4">"An interactive simulator for practicing options trading with real-time data."</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"options"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"simulator"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"practice"</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#4CAF50" }}></div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"Cryptocurrency"</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Cryptocurrency Portfolio Management"</h3>
              <p className="text-gray-600 mb-4">"A tool for managing and optimizing cryptocurrency investments."</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"crypto"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"portfolio"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"management"</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#4CAF50" }}></div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"Risk Management"</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Risk Management Framework"</h3>
              <p className="text-gray-600 mb-4">"A framework designed to assess and mitigate trading risks effectively."</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"risk"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"management"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"framework"</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
