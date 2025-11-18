import React from 'react';
import Link from 'next/link';

const PageLayout = ({ children, title }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <h1 className="ml-3 text-2xl font-bold text-gray-900">AI Full-Stack Generator</h1>
            </div>
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
              ← Back to Generator
            </Link>
          </div>
        </div>
      </header>

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {title && (
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
            </div>
          )}
          {children}
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">AI Full-Stack Generator v3.0</p>
            <p className="mt-2 text-gray-500 text-sm">Create production-ready applications with AI</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PageLayout;