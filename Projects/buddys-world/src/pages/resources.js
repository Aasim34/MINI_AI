import React from 'react';
import Link from 'next/link';

export default function Resources() {
  const primaryColor = "#FFB74D";
  const secondaryColor = "#FF9800";
  const accentColor = "#F57C20";

  return (
    <div className="min-h-screen bg-white">
      <div className="py-20 px-4" style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Resources for Dog Lovers</h1>
          <p className="text-xl md:text-2xl">Everything You Need to Know About Caring for Your Furry Friend</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#FFB74D' }}>Dog Care Essentials</h2>
          <p className="text-lg text-gray-700 leading-relaxed">Learn about the basic needs of your dog, including nutrition, grooming, and exercise. Discover tips on how to keep your dog healthy and happy.</p>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#FFB74D' }}>Training Tips</h2>
          <p className="text-lg text-gray-700 leading-relaxed">Explore effective training techniques to help your dog learn commands and proper behavior. From basic obedience to advanced tricks, find resources that suit all skill levels.</p>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#FFB74D' }}>Health and Wellness</h2>
          <p className="text-lg text-gray-700 leading-relaxed">Stay informed about your dog's health with articles on common health issues, vaccinations, and preventative care. Find a list of veterinary clinics and pet health resources.</p>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#FFB74D' }}>Fun Activities for Dogs</h2>
          <p className="text-lg text-gray-700 leading-relaxed">Discover fun activities you can do with your dog, including games, outdoor adventures, and dog-friendly parks. Create lasting memories with Buddy!</p>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#FFB74D' }}>Community and Support</h2>
          <p className="text-lg text-gray-700 leading-relaxed">Connect with other dog owners through local community groups and online forums. Share experiences, ask questions, and find support for all your dog-related needs.</p>
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
