import React from 'react';
import Link from 'next/link';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and small projects',
      features: ['5 Projects', 'Community Support', 'Basic Analytics', '1GB Storage'],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Best for growing teams and businesses',
      features: ['Unlimited Projects', 'Priority Support', 'Advanced Analytics', '100GB Storage', 'API Access'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For large-scale operations',
      features: ['Everything in Pro', 'Dedicated Support', 'Custom Integration', 'Unlimited Storage', 'SLA Guarantee'],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-indigo-600 font-semibold text-lg">← Back</Link>
          <h1 className="text-2xl font-bold text-gray-900">Pricing</h1>
          <div></div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Always flexible to scale up or down.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl transition-all transform hover:-translate-y-2 ${
                plan.popular
                  ? 'ring-2 ring-indigo-600 shadow-2xl scale-105'
                  : 'border border-gray-200 shadow-lg'
              } bg-white p-8`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
              
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-600 ml-2">{plan.period}</span>
              </div>

              <button
                className={`w-full py-3 px-4 rounded-lg font-bold transition mb-8 ${
                  plan.popular
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                Get Started
              </button>

              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white rounded-2xl p-12 border border-gray-200 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Questions about pricing?</h3>
          <p className="text-gray-600 mb-8">Contact our sales team for custom solutions and volume discounts.</p>
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-indigo-700 transition">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
}
