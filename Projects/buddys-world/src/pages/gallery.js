import React from 'react';
import Link from 'next/link';

export default function Gallery() {
  const primaryColor = "#FFB74D";
  const secondaryColor = "#FF9800";
  const accentColor = "#F57C20";

  return (
    <div className="min-h-screen bg-white">
      <div className="py-20 px-4" style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Buddy's Gallery</h1>
          <p className="text-xl md:text-2xl">A Pawsitively Adorable Collection of Buddy's Adventures</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#FFB74D' }}>Playtime Fun</h2>
          <p className="text-lg text-gray-700 leading-relaxed">Explore the joyous moments of Buddy playing with his favorite toys in the backyard. From chasing balls to tug-of-war, these snapshots capture his playful spirit.</p>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#FFB74D' }}>Adventurous Outings</h2>
          <p className="text-lg text-gray-700 leading-relaxed">Join Buddy on his exciting outdoor adventures! Whether he's exploring the local park or hiking through nature trails, these photos showcase his love for the great outdoors.</p>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#FFB74D' }}>Cuddle Time</h2>
          <p className="text-lg text-gray-700 leading-relaxed">Nothing beats the warmth of cuddles! This section features heartwarming images of Buddy snuggling up on the couch, sharing cozy moments with his family.</p>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#FFB74D' }}>Special Occasions</h2>
          <p className="text-lg text-gray-700 leading-relaxed">Celebrate Buddy's milestones with us! From birthday parties to holiday celebrations, these images highlight the special moments that make Buddy's life extraordinary.</p>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#FFB74D' }}>Meet Buddy's Friends</h2>
          <p className="text-lg text-gray-700 leading-relaxed">Buddy's world is full of furry friends! Here, you'll find pictures of Buddy with his pals at the dog park, showcasing their camaraderie and fun-filled playdates.</p>
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
