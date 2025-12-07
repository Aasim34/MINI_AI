import React from 'react';
import Link from 'next/link';

export default function Team() {
  const primaryColor = "#FFB74D";
  const secondaryColor = "#FF9800";
  const accentColor = "#FF5722";

  return (
    <div className="min-h-screen bg-white">
      <div className="py-20 px-4" style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Meet Buddy's Team</h1>
          <p className="text-xl md:text-2xl">Dedicated humans behind Buddy's adventures</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#FFB74D' }}>Buddy</h2>
          <p className="text-lg text-gray-700 leading-relaxed">The star of the show! Buddy is a lovable Golden Retriever who enjoys chasing squirrels, playing fetch, and cuddling with his humans. His playful personality and unwavering loyalty make him the heart and soul of Buddy's World.</p>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#FFB74D' }}>Sarah - Buddy's Best Friend</h2>
          <p className="text-lg text-gray-700 leading-relaxed">Sarah has been Buddy's human since he was a puppy. She is passionate about animal welfare and spends her time organizing fun activities and events for Buddy and his friends. Her creativity shines through in everything she does for Buddy's World.</p>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#FFB74D' }}>Mark - The Dog Trainer</h2>
          <p className="text-lg text-gray-700 leading-relaxed">Mark is a professional dog trainer with years of experience. He works closely with Buddy to ensure he is well-behaved and happy. Mark is also responsible for sharing training tips and advice with Buddy's followers.</p>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#FFB74D' }}>Emily - The Social Media Manager</h2>
          <p className="text-lg text-gray-700 leading-relaxed">Emily is the voice behind Buddy's online presence. She captures Buddy's adventures through heartwarming photos and engaging posts. Her goal is to connect with fellow dog lovers and create a community that celebrates the joy of having a furry friend.</p>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#FFB74D' }}>Leo - The Vet</h2>
          <p className="text-lg text-gray-700 leading-relaxed">Dr. Leo is Buddy's veterinarian and health advisor. With a deep love for animals, he ensures that Buddy stays healthy and happy. Leo also provides valuable insights on pet care for Buddy's World, helping other pet owners keep their furry companions in top shape.</p>
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
