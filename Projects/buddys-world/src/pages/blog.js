import React from 'react';
import Link from 'next/link';

export default function Blog() {
  const primaryColor = "#FFB74D";
  const secondaryColor = "#FF9800";
  const accentColor = "#FF5722";

  return (
    <div className="min-h-screen bg-white">
      <div className="py-20 px-4" style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Buddy's Adventures: The Blog</h1>
          <p className="text-xl md:text-2xl">Join Buddy on his exciting journey through life!</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#FFB74D' }}>A Day in the Life of Buddy</h2>
          <p className="text-lg text-gray-700 leading-relaxed">Ever wondered what a typical day looks like for Buddy? From his morning stretches to his afternoon playtime in the park, every moment is filled with joy and curiosity. Join us as we explore Buddy's daily routine and the little adventures that make each day special.</p>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#FFB74D' }}>Buddy’s Favorite Toys</h2>
          <p className="text-lg text-gray-700 leading-relaxed">Buddy has a collection of toys that keep him entertained for hours! In this post, we’ll share his top favorites, from squeaky balls to fluffy companions. Discover what makes each toy special and how they contribute to Buddy’s playful personality.</p>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#FFB74D' }}>Training Tips from Buddy’s Perspective</h2>
          <p className="text-lg text-gray-700 leading-relaxed">Training can be a fun and rewarding experience for both dogs and their owners. In this section, Buddy shares his perspective on training sessions, including his favorite commands and tricks. Learn some tips that can help make training a more enjoyable experience for your furry friend!</p>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#FFB74D' }}>Buddy’s Best Dog Friends</h2>
          <p className="text-lg text-gray-700 leading-relaxed">Buddy loves to socialize! In this post, we introduce you to some of Buddy's best dog friends. Each friend has their own unique personality, and we’ll share stories about their playdates and adventures together. Get ready for some adorable canine camaraderie!</p>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#FFB74D' }}>Tips for Pet Owners</h2>
          <p className="text-lg text-gray-700 leading-relaxed">Being a pet owner comes with its own set of challenges and joys. In this article, we’ll share some practical tips for taking care of your dog, including nutrition, exercise, and grooming advice. Let Buddy guide you through the essentials of being a responsible and loving pet parent!</p>
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
