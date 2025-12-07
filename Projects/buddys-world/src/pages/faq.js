import React from 'react';
import Link from 'next/link';

export default function Faq() {
  const primaryColor = "#FFB74D";
  const secondaryColor = "#FF9800";
  const accentColor = "#FF5722";

  return (
    <div className="min-h-screen bg-white">
      <div className="py-20 px-4" style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl md:text-2xl">All You Need to Know About Buddy's World</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#FFB74D' }}>Who is Buddy?</h2>
          <p className="text-lg text-gray-700 leading-relaxed">Buddy is a lovable dog who enjoys adventures, making new friends, and sharing his experiences with everyone. He is the star of Buddy's World, where you can find fun stories, photos, and updates about his daily life.</p>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#FFB74D' }}>What kind of content can I find on Buddy's World?</h2>
          <p className="text-lg text-gray-700 leading-relaxed">On Buddy's World, you can explore a variety of content including Buddy's daily adventures, training tips, fun facts about dogs, and heartwarming stories from Buddy's life. There are also plenty of adorable photos and videos that showcase Buddy's personality.</p>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#FFB74D' }}>Can I submit my own dog stories?</h2>
          <p className="text-lg text-gray-700 leading-relaxed">Absolutely! We love hearing from fellow dog lovers. You can submit your own stories, photos, or videos of your furry friends through our 'Share Your Story' page. Buddy would be thrilled to feature other dogs in his world!</p>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#FFB74D' }}>How can I stay updated on Buddy's adventures?</h2>
          <p className="text-lg text-gray-700 leading-relaxed">To stay updated on Buddy's latest adventures, you can subscribe to our newsletter. You can also follow us on social media platforms where we regularly post updates, photos, and fun content featuring Buddy.</p>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#FFB74D' }}>Is there a way to support Buddy's World?</h2>
          <p className="text-lg text-gray-700 leading-relaxed">Yes! If you enjoy Buddy's World and want to support it, you can share our content with your friends and family, follow us on social media, or consider making a donation through our 'Support Us' page to help us keep Buddy's adventures going.</p>
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
