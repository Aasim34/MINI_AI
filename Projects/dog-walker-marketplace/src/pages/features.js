import React from 'react';
import Link from 'next/link';

export default function Features() {
  const primaryColor = "#FFCC00";
  
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="text-indigo-600 font-semibold">← Back to Home</Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">"Features"</h1>
        <p className="text-xl text-gray-600 mb-12">"Discover our comprehensive Dog Walker Marketplace, designed to connect dog owners with trusted walkers, ensuring safety and convenience."</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: "#FFCC00" }}>
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM2 10a8 8 0 1116 0 8 8 0 01-16 0z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">"Real-Time GPS Tracking"</h3>
            <p className="text-gray-600 mb-6">"Track your dog's walk in real-time with our GPS feature, ensuring peace of mind during every outing."</p>
            <ul className="space-y-2">
              <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Monitor your dog's route"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Ensure the walker is on track"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Receive notifications on walk status"</span></li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: "#FFCC00" }}>
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM2 10a8 8 0 1116 0 8 8 0 01-16 0z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">"User Reviews and Ratings"</h3>
            <p className="text-gray-600 mb-6">"Read reviews and ratings from other dog owners to choose the best walker for your furry friend."</p>
            <ul className="space-y-2">
              <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Make informed decisions"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Find highly-rated walkers"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Enjoy a community-driven platform"</span></li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: "#FFCC00" }}>
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM2 10a8 8 0 1116 0 8 8 0 01-16 0z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">"Secure Payments"</h3>
            <p className="text-gray-600 mb-6">"Experience hassle-free payments through our secure platform, ensuring safety for both owners and walkers."</p>
            <ul className="space-y-2">
              <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Easy payment processing"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"No cash required"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Transparent pricing"</span></li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: "#FFCC00" }}>
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM2 10a8 8 0 1116 0 8 8 0 01-16 0z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">"Profile Verification"</h3>
            <p className="text-gray-600 mb-6">"All walkers undergo a thorough verification process, providing you with trustworthy options for your dog."</p>
            <ul className="space-y-2">
              <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Increased safety for your pet"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Peace of mind for owners"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Reliable walking services"</span></li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: "#FFCC00" }}>
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM2 10a8 8 0 1116 0 8 8 0 01-16 0z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">"Customizable Walk Preferences"</h3>
            <p className="text-gray-600 mb-6">"Set your dog's specific needs, such as duration, intensity, and special instructions for personalized walks."</p>
            <ul className="space-y-2">
              <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Tailored walking experiences"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Better care for your dog"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Flexibility for owners"</span></li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: "#FFCC00" }}>
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM2 10a8 8 0 1116 0 8 8 0 01-16 0z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">"In-App Messaging"</h3>
            <p className="text-gray-600 mb-6">"Communicate directly with your dog walker through our in-app messaging feature for real-time updates."</p>
            <ul className="space-y-2">
              <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Stay informed during walks"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Address any concerns immediately"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Enhance communication"</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
