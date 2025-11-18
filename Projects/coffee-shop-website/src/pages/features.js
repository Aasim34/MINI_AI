import React from 'react';
import Link from 'next/link';

export default function Features() {
  const primaryColor = "#6F4C3E";
  
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="text-indigo-600 font-semibold">← Back to Home</Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">"Features"</h1>
        <p className="text-xl text-gray-600 mb-12">"Discover the unique features of our Coffee Shop website designed to enhance your experience and engagement with our brand."</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: "#6F4C3E" }}>
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM2 10a8 8 0 1116 0 8 8 0 01-16 0z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">"Online Ordering"</h3>
            <p className="text-gray-600 mb-6">"Conveniently order your favorite coffee and snacks online for pickup or delivery."</p>
            <ul className="space-y-2">
              <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Saves time on busy mornings"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Easy customization of orders"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Secure payment options"</span></li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: "#6F4C3E" }}>
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM2 10a8 8 0 1116 0 8 8 0 01-16 0z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">"Loyalty Program"</h3>
            <p className="text-gray-600 mb-6">"Join our loyalty program to earn points for every purchase and redeem them for discounts."</p>
            <ul className="space-y-2">
              <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Incentives for regular customers"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Exclusive rewards and offers"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Encourages repeat business"</span></li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: "#6F4C3E" }}>
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM2 10a8 8 0 1116 0 8 8 0 01-16 0z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">"Menu Showcase"</h3>
            <p className="text-gray-600 mb-6">"Explore our extensive menu with detailed descriptions and images of each item."</p>
            <ul className="space-y-2">
              <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Easy navigation through offerings"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Informed decision-making"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Mouth-watering visuals"</span></li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: "#6F4C3E" }}>
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM2 10a8 8 0 1116 0 8 8 0 01-16 0z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">"Store Locator"</h3>
            <p className="text-gray-600 mb-6">"Find the nearest Coffee Shop location with our user-friendly store locator feature."</p>
            <ul className="space-y-2">
              <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Convenient access to locations"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Get directions easily"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Check store hours"</span></li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: "#6F4C3E" }}>
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM2 10a8 8 0 1116 0 8 8 0 01-16 0z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">"Events and Promotions"</h3>
            <p className="text-gray-600 mb-6">"Stay updated on upcoming events, special promotions, and seasonal offers."</p>
            <ul className="space-y-2">
              <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Never miss a special deal"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Engage with community events"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Enhances customer interaction"</span></li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: "#6F4C3E" }}>
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM2 10a8 8 0 1116 0 8 8 0 01-16 0z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">"Customer Reviews"</h3>
            <p className="text-gray-600 mb-6">"Read and leave reviews to share your experiences and help others make choices."</p>
            <ul className="space-y-2">
              <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Builds community trust"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Improves customer feedback"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Encourages quality service"</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
