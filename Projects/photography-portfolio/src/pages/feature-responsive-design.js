import React from 'react';
import Link from 'next/link';

export default function FeatureDetail() {
  const primaryColor = "#3E4E50";
  const secondaryColor = "#F4F4F9";
  const accentColor = "#FF6F61";
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="text-indigo-600 font-semibold">← Back to Home</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4" style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl font-bold mb-4">"Responsive Design for Your Photography Portfolio"</h1>
          <p className="text-2xl opacity-90">"Showcase your photography seamlessly on any device!"</p>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 -mt-20 relative z-10">
          <p className="text-xl text-gray-700 leading-relaxed">"Responsive design ensures that your photography portfolio looks stunning on all devices, from desktops to smartphones. This feature adapts your layout and images dynamically, providing an optimal viewing experience for every visitor."</p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Key Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#3E4E50" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Enhanced User Experience"</h3>
            <p className="text-gray-600">"Visitors enjoy a smooth and engaging browsing experience."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#3E4E50" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Device Compatibility"</h3>
            <p className="text-gray-600">"Your portfolio works beautifully on all screen sizes."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#3E4E50" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Improved SEO"</h3>
            <p className="text-gray-600">"Google favors responsive sites, boosting your search rankings."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#3E4E50" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Increased Engagement"</h3>
            <p className="text-gray-600">"Higher engagement due to visually appealing layouts."</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">How It Works</h2>
        <div className="space-y-8">
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#3E4E50" }}>
              1
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Fluid Grid Layout"</h3>
              <p className="text-gray-600">"Your portfolio uses a grid that adjusts to the screen size, ensuring images are displayed proportionally."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#3E4E50" }}>
              2
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Media Queries"</h3>
              <p className="text-gray-600">"CSS media queries determine the layout and style changes based on the device's characteristics."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#3E4E50" }}>
              3
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Flexible Images"</h3>
              <p className="text-gray-600">"Images resize automatically to fit the viewing environment while maintaining their aspect ratio."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-6xl mx-auto px-4 py-16 bg-white">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Use Cases</h2>
        <div className="space-y-6">
          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#FF6F61" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Showcasing Diverse Projects"</h3>
            <p className="text-gray-600 mb-2">"Easily display various photography styles across devices."</p>
            <p className="text-sm text-gray-500 italic">"A wedding portfolio that looks great on tablets and phones."</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#FF6F61" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Client Presentations"</h3>
            <p className="text-gray-600 mb-2">"Present your work to clients without technical issues."</p>
            <p className="text-sm text-gray-500 italic">"A photographer presenting their portfolio on a laptop during a meeting."</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#FF6F61" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Social Media Sharing"</h3>
            <p className="text-gray-600 mb-2">"Share your portfolio link confidently, knowing it looks good everywhere."</p>
            <p className="text-sm text-gray-500 italic">"Sharing your site on Instagram and Pinterest."</p>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Technical Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"CSS Frameworks"</h4>
            <p className="text-gray-600 text-sm">"Utilizes CSS frameworks like Bootstrap or Foundation for responsive layouts."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Viewport Meta Tag"</h4>
            <p className="text-gray-600 text-sm">"Includes the viewport meta tag in HTML for proper scaling on mobile devices."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Image Optimization"</h4>
            <p className="text-gray-600 text-sm">"Images are optimized for different resolutions to ensure fast loading times."</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" style={{ backgroundColor: primaryColor }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">"Start Building Your Stunning Portfolio Today!"</h2>
          <button className="bg-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105" style={{ color: primaryColor }}>
            "Get Started"
          </button>
        </div>
      </section>
    </div>
  );
}
