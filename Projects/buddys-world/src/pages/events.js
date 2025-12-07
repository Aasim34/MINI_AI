import React from 'react';
import Link from 'next/link';

export default function Events() {
  const primaryColor = "#FFB74D";
  const secondaryColor = "#FF9800";
  const accentColor = "#F57C20";

  return (
    <div className="min-h-screen bg-white">
      <div className="py-20 px-4" style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Buddy's Upcoming Events</h1>
          <p className="text-xl md:text-2xl">Join Buddy for Fun-Filled Adventures!</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#FFB74D' }}>Paw-sitive Play Date</h2>
          <p className="text-lg text-gray-700 leading-relaxed">Join Buddy and his furry friends for a fun-filled play date at the local dog park! Bring your favorite toys and enjoy a day of socializing and play. Snacks and refreshments will be provided for both humans and pups.</p>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#FFB74D' }}>Buddy's Birthday Bash</h2>
          <p className="text-lg text-gray-700 leading-relaxed">Celebrate Buddy's birthday with a special party! There will be cake, games, and plenty of treats for all the pups. Don’t forget to bring your dog’s favorite party hat!</p>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#FFB74D' }}>Dog Training Workshop</h2>
          <p className="text-lg text-gray-700 leading-relaxed">Join us for a hands-on dog training workshop led by a professional trainer. Learn new tricks and commands to help strengthen the bond between you and your furry companion. All skill levels are welcome!</p>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#FFB74D' }}>Annual Dog Parade</h2>
          <p className="text-lg text-gray-700 leading-relaxed">Don’t miss Buddy's favorite event of the year—the Annual Dog Parade! Dress up your pup and join the parade through the neighborhood. Prizes will be awarded for the best costumes!</p>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#FFB74D' }}>Charity Dog Walk</h2>
          <p className="text-lg text-gray-700 leading-relaxed">Help Buddy support local animal shelters by participating in our Charity Dog Walk. Every step taken raises money for those in need. Bring your leashes and lots of love!</p>
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
