import React from 'react';
import Link from 'next/link';

export default function Features() {
  const primaryColor = "#4A90E2";
  const secondaryColor = "#50E3C2";
  const accentColor = "#F5A623";

  return (
    <div className="min-h-screen bg-white">
      <div className="py-20 px-4" style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Features of the Poco M2 Pro</h1>
          <p className="text-xl md:text-2xl">Unleash the Power of Innovation</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#4A90E2' }}>Stunning Display</h2>
          <p className="text-lg text-gray-700 leading-relaxed">The Poco M2 Pro features a 6.67-inch FHD+ DotDisplay with a resolution of 2400 x 1080 pixels. Enjoy vibrant colors and sharp details, perfect for streaming your favorite shows or playing games.</p>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#4A90E2' }}>Powerful Performance</h2>
          <p className="text-lg text-gray-700 leading-relaxed">Equipped with the Qualcomm Snapdragon 720G processor, the Poco M2 Pro delivers seamless multitasking and smooth gaming experiences. With up to 6GB of RAM, you can run multiple applications without any lag.</p>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#4A90E2' }}>Quad Camera System</h2>
          <p className="text-lg text-gray-700 leading-relaxed">Capture stunning photos with the Poco M2 Pro's versatile quad-camera setup. Featuring a 48MP main camera, 8MP ultra-wide lens, 5MP macro camera, and a 2MP depth sensor, you can take professional-quality images in any situation.</p>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#4A90E2' }}>Long-lasting Battery</h2>
          <p className="text-lg text-gray-700 leading-relaxed">The Poco M2 Pro is powered by a massive 5000mAh battery, ensuring you stay connected throughout the day. Plus, with 33W fast charging support, you can quickly recharge your device and get back to what matters.</p>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#4A90E2' }}>MIUI for POCO</h2>
          <p className="text-lg text-gray-700 leading-relaxed">Experience a user-friendly interface with MIUI for POCO, designed specifically for the Poco M2 Pro. Enjoy customizable features, enhanced performance, and a clean design that enhances your smartphone experience.</p>
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
