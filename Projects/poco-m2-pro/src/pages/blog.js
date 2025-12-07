import React from 'react';
import Link from 'next/link';

export default function Blog() {
  const primaryColor = "#4A90E2";
  const secondaryColor = "#50E3C2";
  const accentColor = "#F5A623";

  return (
    <div className="min-h-screen bg-white">
      <div className="py-20 px-4" style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Poco M2 Pro Blog</h1>
          <p className="text-xl md:text-2xl">Unleashing the Power of Poco M2 Pro</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#4A90E2' }}>Introduction to Poco M2 Pro</h2>
          <p className="text-lg text-gray-700 leading-relaxed">The Poco M2 Pro is a powerful smartphone that combines performance, style, and affordability. In this blog, we will explore its key features, specifications, and why it stands out in the competitive smartphone market.</p>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#4A90E2' }}>Key Features of Poco M2 Pro</h2>
          <p className="text-lg text-gray-700 leading-relaxed">The Poco M2 Pro boasts a 6.67-inch FHD+ display, Snapdragon 720G processor, and a quad-camera setup with a 48MP main sensor. It also offers a massive 5000mAh battery, ensuring that you stay powered throughout the day.</p>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#4A90E2' }}>User Experience and Performance</h2>
          <p className="text-lg text-gray-700 leading-relaxed">With its smooth performance and user-friendly MIUI interface, the Poco M2 Pro provides an exceptional experience for both casual users and mobile gamers. The device handles multitasking effortlessly, making it a great choice for anyone on the go.</p>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#4A90E2' }}>Comparing Poco M2 Pro with Competitors</h2>
          <p className="text-lg text-gray-700 leading-relaxed">In this section, we will compare the Poco M2 Pro with other smartphones in the same price range. We will discuss its advantages and disadvantages, helping you make an informed decision when choosing your next device.</p>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#4A90E2' }}>Tips for Maximizing Your Poco M2 Pro Experience</h2>
          <p className="text-lg text-gray-700 leading-relaxed">To get the most out of your Poco M2 Pro, we will share some tips and tricks, including optimizing battery life, customizing settings, and utilizing hidden features that enhance your smartphone experience.</p>
        </div>
        <div className="text-center mt-12">
          <Link href="/" className="text-lg hover:underline" style={{ color: primaryColor }}>
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
