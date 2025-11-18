import React from 'react';
import Link from 'next/link';

export default function Features() {
  const primaryColor = "#3E4E50";
  
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="text-indigo-600 font-semibold">← Back to Home</Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">"Features"</h1>
        <p className="text-xl text-gray-600 mb-12">"Explore the powerful features of our photography portfolio website designed for photographers to showcase their artistry and creativity."</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: "#3E4E50" }}>
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM2 10a8 8 0 1116 0 8 8 0 01-16 0z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">"Responsive Design"</h3>
            <p className="text-gray-600 mb-6">"Our portfolio adapts seamlessly to all devices, ensuring your work looks stunning on desktops, tablets, and smartphones."</p>
            <ul className="space-y-2">
              <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Enhances user experience"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Increases engagement"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Reaches a wider audience"</span></li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: "#3E4E50" }}>
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM2 10a8 8 0 1116 0 8 8 0 01-16 0z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">"Customizable Layouts"</h3>
            <p className="text-gray-600 mb-6">"Choose from various layouts to present your photos, allowing you to create a unique and personalized portfolio."</p>
            <ul className="space-y-2">
              <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Reflects your style"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Easy to set up"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Flexible presentation options"</span></li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: "#3E4E50" }}>
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM2 10a8 8 0 1116 0 8 8 0 01-16 0z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">"High-Resolution Image Support"</h3>
            <p className="text-gray-600 mb-6">"Showcase your images in high resolution to ensure every detail is captured, providing a rich viewing experience."</p>
            <ul className="space-y-2">
              <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Showcases your work effectively"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Attracts potential clients"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Enhances professional appeal"</span></li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: "#3E4E50" }}>
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM2 10a8 8 0 1116 0 8 8 0 01-16 0z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">"SEO Optimization"</h3>
            <p className="text-gray-600 mb-6">"Built-in SEO tools help your portfolio rank higher in search results, making it easier for clients to find you."</p>
            <ul className="space-y-2">
              <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Increases visibility"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Drives more traffic"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Boosts potential client inquiries"</span></li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: "#3E4E50" }}>
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM2 10a8 8 0 1116 0 8 8 0 01-16 0z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">"Client Galleries"</h3>
            <p className="text-gray-600 mb-6">"Create private galleries for clients to view and select their favorite images, streamlining the selection process."</p>
            <ul className="space-y-2">
              <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Enhances client communication"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Simplifies image selection"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Provides a professional touch"</span></li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: "#3E4E50" }}>
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM2 10a8 8 0 1116 0 8 8 0 01-16 0z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">"Social Media Integration"</h3>
            <p className="text-gray-600 mb-6">"Easily link your social media accounts to promote your work and connect with followers across platforms."</p>
            <ul className="space-y-2">
              <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Expands your reach"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Encourages sharing"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Builds a personal brand"</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
