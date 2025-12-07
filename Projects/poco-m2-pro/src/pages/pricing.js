import React, { useState } from 'react';
import Link from 'next/link';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const primaryColor = "#4A90E2";
  const secondaryColor = "#50E3C2";
  const accentColor = "#F5A623";

  const plans = [
    {
      name: "Starter",
      monthlyPrice: 29,
      yearlyPrice: 290,
      description: "Perfect for individuals and small projects",
      features: [
        "Up to 5 projects",
        "Basic analytics",
        "Email support",
        "1 GB storage",
        "Community access"
      ]
    },
    {
      name: "Professional",
      monthlyPrice: 99,
      yearlyPrice: 990,
      description: "Ideal for growing businesses",
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "Priority support",
        "50 GB storage",
        "API access",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      monthlyPrice: 299,
      yearlyPrice: 2990,
      description: "For large teams and organizations",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom SLA",
        "Unlimited storage",
        "Advanced security",
        "On-premise deployment"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="py-20 px-4" style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl md:text-2xl mb-8">Choose the plan that's right for you</p>
          
          {/* Billing Toggle */}
          <div className="inline-flex bg-white rounded-lg p-1">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md font-semibold transition ${billingCycle === 'monthly' ? '' : 'text-gray-600'}`}
              style={{ backgroundColor: billingCycle === 'monthly' ? primaryColor : 'transparent', color: billingCycle === 'monthly' ? 'white' : '#6B7280' }}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-md font-semibold transition ${billingCycle === 'yearly' ? '' : 'text-gray-600'}`}
              style={{ backgroundColor: billingCycle === 'yearly' ? primaryColor : 'transparent', color: billingCycle === 'yearly' ? 'white' : '#6B7280' }}
            >
              Yearly <span className="text-sm">(Save 20%)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg p-8 relative ${plan.popular ? 'ring-4' : ''}`}
              style={{ ringColor: plan.popular ? primaryColor : 'transparent' }}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="px-4 py-1 rounded-full text-sm font-bold text-white" style={{ backgroundColor: accentColor }}>
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2" style={{ color: primaryColor }}>{plan.name}</h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              
              <div className="mb-6">
                <span className="text-5xl font-bold" style={{ color: primaryColor }}>
                  ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                </span>
                <span className="text-gray-600">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="currentColor" style={{ color: primaryColor }} viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className="w-full py-4 rounded-xl font-bold transition-all transform hover:scale-105"
                style={{ backgroundColor: plan.popular ? primaryColor : 'white', color: plan.popular ? 'white' : primaryColor, border: `2px solid ${primaryColor}` }}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: primaryColor }}>Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold text-lg mb-2" style={{ color: primaryColor }}>Can I change plans later?</h3>
              <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold text-lg mb-2" style={{ color: primaryColor }}>Do you offer refunds?</h3>
              <p className="text-gray-600">We offer a 30-day money-back guarantee for all plans.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold text-lg mb-2" style={{ color: primaryColor }}>Is there a free trial?</h3>
              <p className="text-gray-600">Yes, all plans come with a 14-day free trial. No credit card required.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
