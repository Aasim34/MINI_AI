#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
ADVANCED AI-Driven Full-Stack Website Generator v3.0 (No Emojis)
Generates production-ready full-stack applications
"""

import os
import json
import time
import re
import sys
import io
from datetime import datetime
from pathlib import Path
import requests
import subprocess
import platform

# Load environment variables from .env file
env_path = os.path.join(os.path.dirname(__file__), '.env')
if os.path.exists(env_path):
    with open(env_path, 'r') as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith('#') and '=' in line:
                key, value = line.split('=', 1)
                os.environ[key.strip()] = value.strip()

# Fix encoding for Windows
if sys.platform == "win32":
    try:
        # Simple approach to handle encoding
        import locale
        encoding = locale.getpreferredencoding(False)
        if encoding.lower() != 'utf-8':
            sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
    except Exception:
        # Fallback if any issues occur
        pass

def get_api_key():
    """Get API key from environment variable or user input"""
    api_key = os.environ.get("OPENAI_API_KEY")
    if not api_key:
        print("\n[*] OpenAI API key not found in environment.")
        print("[*] Please enter your OpenAI API key (sk-...):")
        api_key = input().strip()
        if not api_key or not api_key.startswith("sk-"):
            raise ValueError("Invalid API key format")
    return api_key

def call_openai_api(prompt: str, max_retries: int = 5) -> str:
    """Call OpenAI API with retry logic for rate limiting"""
    api_key = get_api_key()
    headers = {"Authorization": f"Bearer {api_key}", "Content-Type": "application/json"}
    url = "https://api.openai.com/v1/chat/completions"
    
    for attempt in range(max_retries):
        try:
            payload = {
                "model": "gpt-4o-mini",
                "messages": [{"role": "user", "content": prompt}],
                "temperature": 0.7,
                "max_tokens": 4000
            }
            
            response = requests.post(url, json=payload, headers=headers, timeout=60)
            
            if response.status_code == 200:
                data = response.json()
                return data.get("choices", [{}])[0].get("message", {}).get("content", "")
            
            elif response.status_code == 429:  # Rate limited
                wait_time = (2 ** attempt) * 2  # Longer exponential backoff
                print(f"[RATE_LIMIT] Waiting {wait_time}s before retry (attempt {attempt+1}/{max_retries})...")
                sys.stdout.flush()
                time.sleep(wait_time)
                continue
            
            else:
                print(f"[-] API Error {response.status_code}: {response.text[:200]}")
                sys.stdout.flush()
                if attempt < max_retries - 1:
                    time.sleep(2)
                    continue
                return ""
                
        except requests.exceptions.Timeout:
            print(f"[-] Request timeout (attempt {attempt+1}/{max_retries})")
            sys.stdout.flush()
            if attempt < max_retries - 1:
                time.sleep(2)
        except Exception as e:
            print(f"[-] Error: {str(e)}")
            sys.stdout.flush()
            if attempt < max_retries - 1:
                time.sleep(2)
    
    return ""

def generate_color_scheme(idea: str) -> dict:
    """Generate idea-specific color scheme using AI"""
    prompt = f"""Based on this app idea: "{idea}"

Generate a professional color scheme that matches the theme and purpose. Consider:
- Industry (e.g., healthcare=blue/green, food=warm colors, tech=blue/purple, finance=blue/green)
- Mood (professional, playful, luxury, minimal)
- Accessibility (good contrast)

Return ONLY a JSON object:
{{
  "primary": "#HEX",
  "secondary": "#HEX",
  "accent": "#HEX",
  "reasoning": "Brief explanation"
}}

Examples:
- Coffee shop: {{"primary": "#6F4E37", "secondary": "#D2691E", "accent": "#8B4513"}}
- Tech startup: {{"primary": "#4F46E5", "secondary": "#06B6D4", "accent": "#8B5CF6"}}
- Healthcare: {{"primary": "#0EA5E9", "secondary": "#10B981", "accent": "#6366F1"}}"""

    print("[*] Generating color scheme...")
    sys.stdout.flush()
    response = call_openai_api(prompt)
    
    try:
        json_match = re.search(r'\{[\s\S]*\}', response)
        if json_match:
            colors = json.loads(json_match.group())
            print(f"   Colors: {colors.get('primary', '#4F46E5')}, {colors.get('secondary', '#06B6D4')}, {colors.get('accent', '#8B5CF6')}")
            sys.stdout.flush()
            return colors
    except:
        pass
    
    # Fallback colors
    return {"primary": "#4F46E5", "secondary": "#06B6D4", "accent": "#8B5CF6"}

def generate_app_structure(idea: str) -> dict:
    """Generate comprehensive app structure from idea"""
    prompt = f"""Analyze this app idea and generate a JSON structure:

"{idea}"

Return ONLY this JSON (no other text):
{{
  "projectName": "Project Name",
  "projectSlug": "project-slug",
  "description": "One sentence description",
  "tagline": "Short catchy tagline",
  "features": ["feature1", "feature2", "feature3", "feature4"]
}}

Return ONLY valid JSON."""

    print("[*] Analyzing idea with GPT-4...")
    sys.stdout.flush()
    response = call_openai_api(prompt)
    
    if not response:
        print("[-] Failed to generate app structure")
        sys.stdout.flush()
        return {}
    
    try:
        json_match = re.search(r'\{[\s\S]*\}', response)
        if json_match:
            return json.loads(json_match.group())
    except json.JSONDecodeError:
        print("[-] Invalid JSON response")
        sys.stdout.flush()
    
    return {}
def generate_page_content(page_name: str, idea: str, project_name: str, colors: dict) -> dict:
    """Generate dynamic page content using AI"""
    prompt = f"""Generate content for a {page_name} page for this website: "{idea}"
Project Name: {project_name}

Return a JSON object with:
{{
  "title": "Page title",
  "subtitle": "Subtitle or tagline",
  "sections": [
    {{"heading": "Section heading", "content": "Section content", "type": "text"}}
  ]
}}

For {page_name} page, include 3-5 relevant sections. Return ONLY valid JSON."""
    
    response = call_openai_api(prompt)
    try:
        json_match = re.search(r'\{[\s\S]*\}', response)
        if json_match:
            return json.loads(json_match.group())
    except:
        pass
    
    return {"title": page_name.title(), "subtitle": f"Welcome to {page_name}", "sections": []}

def build_page_component(page_name: str, content: dict, colors: dict, project_name: str) -> str:
    """Build React component from page content"""
    primary = colors.get('primary', '#4F46E5')
    secondary = colors.get('secondary', '#06B6D4')
    accent = colors.get('accent', '#8B5CF6')
    
    component_name = page_name.replace('-', ' ').title().replace(' ', '')
    title = content.get('title', page_name.title())
    subtitle = content.get('subtitle', '')
    sections = content.get('sections', [])
    
    sections_jsx = ""
    for i, section in enumerate(sections[:6]):  # Limit to 6 sections
        heading = section.get('heading', '')
        sect_content = section.get('content', '')
        sections_jsx += f"""
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{{{ color: '{primary}' }}}}>{heading}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{sect_content}</p>
        </div>"""
    
    return f"""import React from 'react';
import Link from 'next/link';

export default function {component_name}() {{
  const primaryColor = "{primary}";
  const secondaryColor = "{secondary}";
  const accentColor = "{accent}";

  return (
    <div className="min-h-screen bg-white">
      <div className="py-20 px-4" style={{{{ background: `linear-gradient(135deg, ${{primaryColor}}, ${{secondaryColor}})` }}}}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{title}</h1>
          <p className="text-xl md:text-2xl">{subtitle}</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {sections_jsx}
        <div className="text-center mt-12">
          <Link href="/" className="text-lg hover:underline" style={{{{ color: primaryColor }}}}>
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}}
"""

def get_advanced_page_template(page_name: str, project_name: str, colors: dict, idea: str) -> str:
    """Return advanced templates for specific page types"""
    primary = colors.get('primary', '#4F46E5')
    secondary = colors.get('secondary', '#06B6D4')
    accent = colors.get('accent', '#8B5CF6')
    
    if page_name == 'services':
        return f"""import React from 'react';
import Link from 'next/link';

export default function Services() {{
  const primaryColor = "{primary}";
  const secondaryColor = "{secondary}";
  const accentColor = "{accent}";

  const services = [
    {{
      title: "Premium Service",
      description: "Get access to our premium features and priority support for your business needs.",
      price: "$99/mo",
      features: ["24/7 Support", "Advanced Analytics", "Custom Integration", "Priority Updates"]
    }},
    {{
      title: "Professional Service",
      description: "Perfect for growing businesses with comprehensive tools and dedicated support.",
      price: "$199/mo",
      features: ["Everything in Premium", "Dedicated Account Manager", "API Access", "White Label Options"]
    }},
    {{
      title: "Enterprise Service",
      description: "Tailored solutions for large organizations with custom requirements.",
      price: "Custom",
      features: ["Everything in Professional", "Custom Development", "SLA Guarantee", "On-premise Deployment"]
    }}
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {{/* Hero Section */}}
      <div className="py-20 px-4" style={{{{ background: `linear-gradient(135deg, ${{primaryColor}}, ${{secondaryColor}})` }}}}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl">Comprehensive solutions tailored to your needs</p>
        </div>
      </div>

      {{/* Services Grid */}}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {{services.map((service, index) => (
            <div key={{index}} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center text-white text-2xl font-bold" style={{{{ backgroundColor: accentColor }}}}>
                {{index + 1}}
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{{{ color: primaryColor }}}}>{{{service.title}}}</h3>
              <p className="text-gray-600 mb-6">{{{service.description}}}</p>
              <div className="text-4xl font-bold mb-6" style={{{{ color: secondaryColor }}}}>{{{service.price}}}</div>
              <ul className="space-y-3 mb-8">
                {{service.features.map((feature, i) => (
                  <li key={{i}} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" style={{{{ color: primaryColor }}}} viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {{feature}}
                  </li>
                ))}}
              </ul>
              <button className="w-full py-3 rounded-lg text-white font-bold hover:opacity-90 transition" style={{{{ backgroundColor: primaryColor }}}}>
                Get Started
              </button>
            </div>
          ))}}
        </div>
      </div>

      {{/* CTA Section */}}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center bg-white rounded-2xl shadow-xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{{{ color: primaryColor }}}}>Need a Custom Solution?</h2>
          <p className="text-lg text-gray-600 mb-8">Contact us to discuss your specific requirements</p>
          <Link href="/contact" className="inline-block px-8 py-4 rounded-xl text-white font-bold hover:opacity-90 transition" style={{{{ backgroundColor: accentColor }}}}>
            Contact Sales
          </Link>
        </div>
      </div>
    </div>
  );
}}
"""
    
    elif page_name == 'about':
        return f"""import React from 'react';
import Link from 'next/link';

export default function About() {{
  const primaryColor = "{primary}";
  const secondaryColor = "{secondary}";
  const accentColor = "{accent}";

  const team = [
    {{ name: "John Smith", role: "CEO & Founder", image: "👤" }},
    {{ name: "Sarah Johnson", role: "CTO", image: "👤" }},
    {{ name: "Mike Chen", role: "Head of Design", image: "👤" }},
    {{ name: "Emily Davis", role: "Lead Developer", image: "👤" }}
  ];

  return (
    <div className="min-h-screen bg-white">
      {{/* Hero */}}
      <div className="py-20 px-4" style={{{{ background: `linear-gradient(135deg, ${{primaryColor}}, ${{secondaryColor}})` }}}}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About {project_name}</h1>
          <p className="text-xl md:text-2xl">Building the future, one innovation at a time</p>
        </div>
      </div>

      {{/* Mission & Vision */}}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-4" style={{{{ color: primaryColor }}}}>Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are committed to delivering innovative solutions that transform businesses and improve lives. 
              Our mission is to leverage cutting-edge technology to solve real-world problems and create lasting value for our customers.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-4" style={{{{ color: primaryColor }}}}>Our Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              To become the global leader in our industry by continuously innovating and exceeding customer expectations. 
              We envision a future where technology seamlessly integrates with everyday life to create better experiences.
            </p>
          </div>
        </div>

        {{/* Stats */}}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          <div className="text-center">
            <div className="text-5xl font-bold mb-2" style={{{{ color: primaryColor }}}}>10K+</div>
            <div className="text-gray-600">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2" style={{{{ color: primaryColor }}}}>50+</div>
            <div className="text-gray-600">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2" style={{{{ color: primaryColor }}}}>99%</div>
            <div className="text-gray-600">Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2" style={{{{ color: primaryColor }}}}>24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>

        {{/* Team */}}
        <h2 className="text-4xl font-bold text-center mb-12" style={{{{ color: primaryColor }}}}>Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {{team.map((member, index) => (
            <div key={{index}} className="text-center">
              <div className="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center text-6xl" style={{{{ backgroundColor: secondaryColor }}}}>
                {{member.image}}
              </div>
              <h3 className="text-xl font-bold mb-1" style={{{{ color: primaryColor }}}}>{{{teamMember.name}}}</h3>
              <p className="text-gray-600">{{{teamMember.role}}}</p>
            </div>
          ))}}
        </div>
      </div>
    </div>
  );
}}
"""
    
    elif page_name == 'pricing':
        # Use string concatenation to avoid f-string complexity
        template = """import React, { useState } from 'react';
import Link from 'next/link';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const primaryColor = "PRIMARY_COLOR";
  const secondaryColor = "SECONDARY_COLOR";
  const accentColor = "ACCENT_COLOR";

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
"""
        return template.replace('PRIMARY_COLOR', primary).replace('SECONDARY_COLOR', secondary).replace('ACCENT_COLOR', accent)
    
    elif page_name == 'login':
        return f"""import React, {{ useState }} from 'react';
import Link from 'next/link';

export default function Login() {{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const primaryColor = "{primary}";
  const secondaryColor = "{secondary}";
  const accentColor = "{accent}";

  const handleSubmit = (e) => {{
    e.preventDefault();
    console.log('Login:', {{ email, password, rememberMe }});
    alert('Login functionality will be implemented with backend API');
  }};

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        {{/* Header */}}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold" style={{{{ backgroundColor: primaryColor }}}}>
            {project_name[0]}
          </div>
          <h2 className="text-4xl font-bold mb-2" style={{{{ color: primaryColor }}}}>Welcome Back</h2>
          <p className="text-gray-600">Sign in to your account to continue</p>
        </div>

        {{/* Login Form */}}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={{handleSubmit}} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={{email}}
                onChange={{(e) => setEmail(e.target.value)}}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none"
                style={{{{ borderColor: '#D1D5DB', focusRing: primaryColor }}}}
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={{password}}
                onChange={{(e) => setPassword(e.target.value)}}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={{rememberMe}}
                  onChange={{(e) => setRememberMe(e.target.checked)}}
                  className="h-4 w-4 rounded"
                  style={{{{ accentColor: primaryColor }}}}
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>

              <Link href="/forgot-password" className="text-sm hover:underline" style={{{{ color: primaryColor }}}}>
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg text-white font-bold hover:opacity-90 transition-all transform hover:scale-105"
              style={{{{ backgroundColor: primaryColor }}}}
            >
              Sign In
            </button>
          </form>

          {{/* Social Login */}}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                <span className="text-xl mr-2">G</span>
                <span className="font-medium">Google</span>
              </button>
              <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                <span className="text-xl mr-2">f</span>
                <span className="font-medium">Facebook</span>
              </button>
            </div>
          </div>

          {{/* Sign Up Link */}}
          <div className="mt-6 text-center">
            <span className="text-gray-600">Don't have an account? </span>
            <Link href="/signup" className="font-medium hover:underline" style={{{{ color: primaryColor }}}}>
              Sign up
            </Link>
          </div>
        </div>

        {{/* Back to Home */}}
        <div className="mt-8 text-center">
          <Link href="/" className="text-gray-600 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}}
"""
    
    elif page_name == 'signup':
        return f"""import React, {{ useState }} from 'react';
import Link from 'next/link';

export default function Signup() {{
  const [formData, setFormData] = useState({{
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  }});
  const primaryColor = "{primary}";
  const secondaryColor = "{secondary}";
  const accentColor = "{accent}";

  const handleSubmit = (e) => {{
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {{
      alert('Passwords do not match!');
      return;
    }}
    console.log('Signup:', formData);
    alert('Signup functionality will be implemented with backend API');
  }};

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        {{/* Header */}}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold" style={{{{ backgroundColor: primaryColor }}}}>
            {project_name[0]}
          </div>
          <h2 className="text-4xl font-bold mb-2" style={{{{ color: primaryColor }}}}>Create Account</h2>
          <p className="text-gray-600">Join us today and get started</p>
        </div>

        {{/* Signup Form */}}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={{handleSubmit}} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={{formData.name}}
                onChange={{(e) => setFormData({{...formData, name: e.target.value}})}}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={{formData.email}}
                onChange={{(e) => setFormData({{...formData, email: e.target.value}})}}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={{formData.password}}
                onChange={{(e) => setFormData({{...formData, password: e.target.value}})}}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none"
                placeholder="••••••••"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                value={{formData.confirmPassword}}
                onChange={{(e) => setFormData({{...formData, confirmPassword: e.target.value}})}}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-start">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 mt-1 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I agree to the <Link href="/terms" className="hover:underline" style={{{{ color: primaryColor }}}}>Terms and Conditions</Link> and <Link href="/privacy" className="hover:underline" style={{{{ color: primaryColor }}}}>Privacy Policy</Link>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg text-white font-bold hover:opacity-90 transition-all transform hover:scale-105"
              style={{{{ backgroundColor: primaryColor }}}}
            >
              Create Account
            </button>
          </form>

          {{/* Sign In Link */}}
          <div className="mt-6 text-center">
            <span className="text-gray-600">Already have an account? </span>
            <Link href="/login" className="font-medium hover:underline" style={{{{ color: primaryColor }}}}>
              Sign in
            </Link>
          </div>
        </div>

        {{/* Back to Home */}}
        <div className="mt-8 text-center">
          <Link href="/" className="text-gray-600 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}}
"""
    
    elif page_name == 'dashboard':
        return f"""import React, {{ useState }} from 'react';
import Link from 'next/link';

export default function Dashboard() {{
  const [user] = useState({{ name: 'John Doe', email: 'john@example.com' }});
  const primaryColor = "{primary}";
  const secondaryColor = "{secondary}";
  const accentColor = "{accent}";

  const stats = [
    {{ label: 'Total Projects', value: '24', change: '+12%' }},
    {{ label: 'Active Users', value: '1.2K', change: '+8%' }},
    {{ label: 'Revenue', value: '$45K', change: '+23%' }},
    {{ label: 'Success Rate', value: '98%', change: '+5%' }}
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {{/* Sidebar */}}
      <div className="fixed left-0 top-0 h-full w-64 text-white p-6" style={{{{ backgroundColor: primaryColor }}}}>
        <div className="mb-10">
          <h1 className="text-2xl font-bold">{project_name}</h1>
        </div>
        
        <nav className="space-y-2">
          <Link href="/dashboard" className="block px-4 py-3 rounded-lg bg-white bg-opacity-20">
            Dashboard
          </Link>
          <Link href="/dashboard/projects" className="block px-4 py-3 rounded-lg hover:bg-white hover:bg-opacity-10">
            Projects
          </Link>
          <Link href="/dashboard/analytics" className="block px-4 py-3 rounded-lg hover:bg-white hover:bg-opacity-10">
            Analytics
          </Link>
          <Link href="/dashboard/settings" className="block px-4 py-3 rounded-lg hover:bg-white hover:bg-opacity-10">
            Settings
          </Link>
          <Link href="/" className="block px-4 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 mt-auto">
            ← Back to Home
          </Link>
        </nav>
      </div>

      {{/* Main Content */}}
      <div className="ml-64 p-8">
        {{/* Header */}}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2" style={{{{ color: primaryColor }}}}>Dashboard</h1>
            <p className="text-gray-600">Welcome back, {{user.name}}!</p>
          </div>
          <button className="px-6 py-3 rounded-lg text-white font-bold" style={{{{ backgroundColor: accentColor }}}}>
            + New Project
          </button>
        </div>

        {{/* Stats Grid */}}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {{stats.map((stat, index) => (
            <div key={{index}} className="bg-white rounded-xl shadow p-6">
              <div className="text-sm text-gray-600 mb-2">{{stat.label}}</div>
              <div className="text-3xl font-bold mb-2" style={{{{ color: primaryColor }}}}>{{stat.value}}</div>
              <div className="text-sm font-medium" style={{{{ color: accentColor }}}}>{{stat.change}} from last month</div>
            </div>
          ))}}
        </div>

        {{/* Recent Activity */}}
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <h2 className="text-xl font-bold mb-6" style={{{{ color: primaryColor }}}}>Recent Activity</h2>
          <div className="space-y-4">
            {{[1, 2, 3, 4].map((item) => (
              <div key={{item}} className="flex items-center justify-between py-4 border-b">
                <div>
                  <div className="font-medium">New project created</div>
                  <div className="text-sm text-gray-600">2 hours ago</div>
                </div>
                <div className="w-3 h-3 rounded-full" style={{{{ backgroundColor: accentColor }}}}></div>
              </div>
            ))}}
          </div>
        </div>

        {{/* Quick Actions */}}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition cursor-pointer">
            <h3 className="font-bold mb-2" style={{{{ color: primaryColor }}}}>Create Project</h3>
            <p className="text-gray-600 text-sm">Start a new project from scratch</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition cursor-pointer">
            <h3 className="font-bold mb-2" style={{{{ color: primaryColor }}}}>View Analytics</h3>
            <p className="text-gray-600 text-sm">Check your performance metrics</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition cursor-pointer">
            <h3 className="font-bold mb-2" style={{{{ color: primaryColor }}}}>Invite Team</h3>
            <p className="text-gray-600 text-sm">Collaborate with team members</p>
          </div>
        </div>
      </div>
    </div>
  );
}}
"""
    
    
    # Return simple template if no specific page type found
    return None

def get_config_files():
    """Returns all configuration file templates"""
    return {
        'postcss.config.js': """module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
""",
        'next.config.js': """/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
""",
        'tailwind.config.js': """/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
""",
        '.gitignore': """node_modules
.next
.env.local
.env
*.log
""",
        '.env.local.example': """# Copy this file to .env.local and fill in your values
# NEXT_PUBLIC_API_URL=http://localhost:3000
# DATABASE_URL=postgresql://user:password@localhost:5432/dbname
""",
        'README.md': """# Project

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

## Deploy

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com).
""",
        'src/styles/globals.css': """@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
}

html, body {
  height: 100%;
  scroll-behavior: smooth;
}

#__next {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
""",
        'src/pages/_app.js': """import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
""",
        'src/pages/_document.js': """import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
""",
        'prisma/schema.prisma': """// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}

model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
"""
    }

def get_navbar_component(pages):
    """Generate Navbar component with navigation links"""
    page_links = '\n          '.join([
        f'<Link href="{page.get("path", "/")}" className="text-gray-700 hover:text-blue-600">{{page.get("name", "Page")}}</Link>'
        for page in pages
    ])
    
    return f"""import Link from 'next/link';

export default function Navbar() {{
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-blue-600">Logo</Link>
          <div className="flex gap-6">
            {page_links}
          </div>
        </div>
      </div>
    </nav>
  );
}}
"""

def get_footer_component():
    """Generate Footer component"""
    return """import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; 2024 All rights reserved.</p>
      </div>
    </footer>
  );
}
"""

def get_layout_component():
    """Generate Layout component"""
    return """import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
"""

def get_page_template(page_name: str, project_name: str) -> str:
    """Generate page content based on page name"""
    if page_name == 'about':
        return f"""import React from 'react';
import Link from 'next/link';

export default function About() {{
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-8">About {project_name}</h1>
        <div className="prose prose-lg mx-auto">
          <p className="text-xl text-gray-600 mb-6">Learn more about our mission and values.</p>
          <p className="text-gray-700">We are dedicated to providing the best service possible.</p>
        </div>
        <div className="text-center mt-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}}
"""
    elif page_name == 'services':
        return f"""import React from 'react';
import Link from 'next/link';

export default function Services() {{
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {{[1, 2, 3].map((i) => (
            <div key={{i}} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Service {{i}}</h3>
              <p className="text-gray-600 mb-4">Description of service {{i}} and its benefits.</p>
              <Link href="/contact" className="text-blue-600 hover:text-blue-800">Learn More →</Link>
            </div>
          ))}}
        </div>
        <div className="text-center mt-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}}
"""
    elif page_name == 'contact':
        return f"""import React, {{ useState }} from 'react';
import Link from 'next/link';

export default function Contact() {{
  const [formData, setFormData] = useState({{ name: '', email: '', message: '' }});

  const handleSubmit = (e) => {{
    e.preventDefault();
    alert('Thank you for your message!');
    setFormData({{ name: '', email: '', message: '' }});
  }};

  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-12">Contact Us</h1>
        <form onSubmit={{handleSubmit}} className="bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              value={{formData.name}}
              onChange={{(e) => setFormData({{...formData, name: e.target.value}})}}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={{formData.email}}
              onChange={{(e) => setFormData({{...formData, email: e.target.value}})}}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              value={{formData.message}}
              onChange={{(e) => setFormData({{...formData, message: e.target.value}})}}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
            Send Message
          </button>
        </form>
        <div className="text-center mt-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}}
"""
    else:
        return f"""import React from 'react';
import Link from 'next/link';

export default function Page() {{
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-8">{page_name.title()}</h1>
        <p className="text-xl text-gray-600 text-center">Welcome to the {page_name} page.</p>
        <div className="text-center mt-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}}
"""

def create_project_structure(app_data: dict, idea: str, base_path: str) -> str:
    """Create the complete project structure"""
    if not app_data:
        print("[-] No app data provided")
        sys.stdout.flush()
        return ""
    
    project_slug = app_data.get('projectSlug', 'new-app').lower().replace(' ', '-')
    projects_dir = os.path.join(base_path, "Projects")
    os.makedirs(projects_dir, exist_ok=True)
    project_dir = os.path.join(projects_dir, project_slug)
    
    print(f"\n[*] Creating project: {app_data.get('projectName', project_slug)}")
    sys.stdout.flush()
    print(f"[*] Location: {project_dir}\n")
    sys.stdout.flush()
    
    # Generate idea-specific color scheme
    colors = generate_color_scheme(idea)
    primary = colors.get('primary', '#4F46E5')
    secondary = colors.get('secondary', '#06B6D4')
    accent = colors.get('accent', '#8B5CF6')
    
    # Create directories
    dirs = [
        "src/pages/api",
        "src/components",
        "src/lib",
        "src/styles",
        "prisma",
        "public"
    ]
    
    for dir_path in dirs:
        os.makedirs(os.path.join(project_dir, dir_path), exist_ok=True)
    
    # Get pages from app_data or use limited defaults for faster generation
    pages = app_data.get('pages', [
        {'name': 'Home', 'path': '/', 'fileName': 'index'},
        {'name': 'About', 'path': '/about', 'fileName': 'about'},
        {'name': 'Contact', 'path': '/contact', 'fileName': 'contact'}
    ])
    
    print(f"[*] Generating {len(pages)} pages...")
    sys.stdout.flush()
    
    # Create index.js (home page)
    project_name = app_data.get('projectName', 'Project')
    description = app_data.get('description', 'A new project')
    tagline = app_data.get('tagline', 'Building the future')
    features = app_data.get('features', ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'])
    
    features_jsx = ""
    for i, feature in enumerate(features[:6]):
        features_jsx += f"""
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 rounded-xl mb-4 flex items-center justify-center text-white text-2xl font-bold" style={{{{ backgroundColor: '{accent}' }}}}>
              {i+1}
            </div>
            <h3 className="text-2xl font-bold mb-3" style={{{{ color: '{primary}' }}}}>{feature}</h3>
            <p className="text-gray-600">Experience the power of {feature.lower()} in your workflow.</p>
          </div>"""
    
    index_content = f"""import React, {{ useState }} from 'react';
import Link from 'next/link';

export default function Home() {{
  const [email, setEmail] = useState('');
  const primaryColor = "{primary}";
  const secondaryColor = "{secondary}";
  const accentColor = "{accent}";

  const handleSubscribe = (e) => {{
    e.preventDefault();
    if (email) {{
      alert('Thanks for subscribing!');
      setEmail('');
    }}
  }};

  return (
    <div className="min-h-screen bg-gray-50">
      {{/* Hero Section */}}
      <div className="py-20 px-4" style={{{{ background: `linear-gradient(135deg, ${{primaryColor}}, ${{secondaryColor}})` }}}}>
        <div className="max-w-6xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">{project_name}</h1>
          <p className="text-xl md:text-2xl mb-4">{tagline}</p>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">{description}</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/about" className="px-8 py-4 bg-white rounded-xl hover:bg-gray-100 text-lg font-bold transition-all transform hover:scale-105" style={{{{ color: primaryColor }}}}>
              Learn More
            </Link>
            <Link href="/contact" className="px-8 py-4 rounded-xl text-white text-lg font-bold transition-all transform hover:scale-105" style={{{{ backgroundColor: accentColor }}}}>
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {{/* Features Section */}}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{{{ color: primaryColor }}}}>Key Features</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">Everything you need to succeed</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features_jsx}
          </div>
        </div>
      </div>

      {{/* Newsletter Section */}}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center bg-white rounded-2xl shadow-xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{{{ color: primaryColor }}}}>Stay Updated</h2>
          <p className="text-lg text-gray-600 mb-8">Subscribe to our newsletter for the latest updates</p>
          <form onSubmit={{handleSubscribe}} className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={{email}}
              onChange={{(e) => setEmail(e.target.value)}}
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:outline-none"
              style={{{{ borderColor: primaryColor }}}}
              required
            />
            <button type="submit" className="px-8 py-3 text-white rounded-xl font-bold hover:opacity-90 transition" style={{{{ backgroundColor: primaryColor }}}}>
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {{/* Footer */}}
      <footer className="py-12 px-4 text-white" style={{{{ backgroundColor: primaryColor }}}}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg">&copy; 2024 {project_name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}}
"""
    
    with open(os.path.join(project_dir, "src/pages/index.js"), "w", encoding="utf-8") as f:
        f.write(index_content)
    print(f"  [+] Created: index.js")
    sys.stdout.flush()
    
    # Create additional pages with AI-generated content or advanced templates
    special_pages = ['services', 'about', 'pricing', 'login', 'signup', 'dashboard']
    
    for page in pages:
        try:
            page_file_name = page.get('fileName', 'page')
            if page_file_name == 'index':
                continue  # Already created
            
            page_name = page.get('name', page_file_name)
            
            # Try to use advanced template first (faster than AI generation)
            advanced_template = get_advanced_page_template(page_file_name, project_name, colors, idea)
            
            if advanced_template:
                page_content = advanced_template
                print(f"  [+] Created: {page_file_name}.js (template)")
            elif page_file_name in ['contact', 'about']:
                # Use basic template for common pages
                page_content = get_page_template(page_file_name, project_name)
                print(f"  [+] Created: {page_file_name}.js (template)")
            else:
                # Skip AI generation for speed - use simple template
                page_content = f"""import React from 'react';
import Link from 'next/link';

export default function {page_name.replace(' ', '')}() {{
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-8">{page_name}</h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">Welcome to the {page_name.lower()} page of {project_name}.</p>
        <div className="text-center mt-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}}
"""
                print(f"  [+] Created: {page_file_name}.js (template)")
            
            page_path = os.path.join(project_dir, f"src/pages/{page_file_name}.js")
            
            with open(page_path, "w", encoding="utf-8") as f:
                f.write(page_content)
            sys.stdout.flush()
        except Exception as e:
            print(f"  [-] Warning: Failed to create {page_file_name}.js: {str(e)}")
            sys.stdout.flush()
            continue  # Continue with other pages
    
    # Create configuration files
    config_files = get_config_files()
    print(f"\n[*] Creating {len(config_files)} configuration files...")
    sys.stdout.flush()
    
    for file_path, content in config_files.items():
        full_path = os.path.join(project_dir, file_path)
        os.makedirs(os.path.dirname(full_path), exist_ok=True)
        with open(full_path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"  [+] {file_path}")
        sys.stdout.flush()
    
    print(f"[+] All configuration files created successfully")
    sys.stdout.flush()
    
    # Create package.json
    package_json = {
        "name": project_slug,
        "version": "0.1.0",
        "private": True,
        "scripts": {
            "dev": "node server.js",
            "build": "next build",
            "start": "next start",
            "lint": "next lint",
            "prisma:generate": "prisma generate",
            "prisma:push": "prisma db push"
        },
        "dependencies": {
            "next": "^14.0.0",
            "react": "^18.2.0",
            "react-dom": "^18.2.0",
            "@prisma/client": "^5.0.0"
        },
        "devDependencies": {
            "tailwindcss": "^3.3.0",
            "postcss": "^8.4.30",
            "autoprefixer": "^10.4.16",
            "eslint": "^8.0.0",
            "eslint-config-next": "^14.0.0",
            "prisma": "^5.0.0"
        }
    }
    
    with open(os.path.join(project_dir, "package.json"), "w", encoding="utf-8") as f:
        json.dump(package_json, f, indent=2)
    
    # Create server.js for auto port detection
    server_js_content = """const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const DEFAULT_PORT = 3000;
const MAX_PORT_ATTEMPTS = 10;

async function findAvailablePort(startPort) {
  const net = require('net');
  
  for (let port = startPort; port < startPort + MAX_PORT_ATTEMPTS; port++) {
    const isAvailable = await new Promise((resolve) => {
      const server = net.createServer();
      
      server.once('error', (err) => {
        if (err.code === 'EADDRINUSE') {
          resolve(false);
        } else {
          resolve(false);
        }
      });
      
      server.once('listening', () => {
        server.close();
        resolve(true);
      });
      
      server.listen(port);
    });
    
    if (isAvailable) {
      return port;
    } else {
      console.log(`Port ${port} is busy, trying next port...`);
    }
  }
  
  throw new Error(`No available ports found between ${startPort} and ${startPort + MAX_PORT_ATTEMPTS - 1}`);
}

app.prepare().then(async () => {
  try {
    const port = await findAvailablePort(DEFAULT_PORT);
    
    createServer((req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    }).listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
      console.log(`> Environment: ${dev ? 'development' : 'production'}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
});
"""
    
    with open(os.path.join(project_dir, "server.js"), "w", encoding="utf-8") as f:
        f.write(server_js_content)
    
    print(f"\n[SUCCESS] Project created!")
    print(f"   Location: {project_dir}")
    sys.stdout.flush()
    
    return project_dir

def main():
    """Main function"""
    print("\n" + "=" * 80)
    print("[*] ADVANCED AI-DRIVEN FULL-STACK GENERATOR v3.0 (AUTO-START)")
    print("=" * 80)
    print("\n[*] Features:")
    print("   [+] Database schema generation (Prisma)")
    print("   [+] Advanced API endpoints")
    print("   [+] React components")
    print("   [+] Next.js project setup")
    print("   [+] Tailwind CSS configuration")
    print("   [+] Auto npm install & dev server")
    print("   [+] Auto browser open\n")
    sys.stdout.flush()
    
    # Try to get idea from stdin first (for piping), then from user input
    idea = ""
    if not sys.stdin.isatty():
        # Running with piped input, get it from sys.stdin
        idea = sys.stdin.read().strip()
    else:
        # Running interactively, get input from user
        try:
            print(">>> Enter your app idea (or pipe it in):")
            sys.stdout.flush()
            idea = input().strip()
        except EOFError:
            # Handle case where input is empty
            pass
        except Exception as e:
            print(f"[-] Error reading input: {e}")
            sys.stdout.flush()
            return
    
    if not idea:
        print("[-] Please provide an app idea!")
        sys.stdout.flush()
        return
    
    print(f"\n[*] Processing: {idea[:60]}...")
    sys.stdout.flush()
    
    try:
        # Generate structure
        app_data = generate_app_structure(idea)
        
        if not app_data:
            print("[-] Failed to generate architecture")
            sys.stdout.flush()
            return
        
        print(f"\n[SUCCESS] Architecture generated!")
        print(f"   Project: {app_data.get('projectName', 'Project')}")
        print(f"   Features: {len(app_data.get('features', []))}")
        print(f"   APIs: {len(app_data.get('apiEndpoints', []))}")
        print(f"   Components: {len(app_data.get('components', []))}")
        sys.stdout.flush()
        
        # Create project - use script directory instead of current working directory
        script_dir = os.path.dirname(os.path.abspath(__file__))
        project_dir = create_project_structure(app_data, idea, script_dir)
        
        if not project_dir:
            print("[-] Failed to create project")
            sys.stdout.flush()
            return
        
        print(f"\n[SUCCESS] Project created!")
        print(f"   Location: {project_dir}")
        sys.stdout.flush()
        
    except Exception as e:
        print(f"\n[-] Error: {str(e)}")
        import traceback
        traceback.print_exc()
        sys.stdout.flush()

if __name__ == "__main__":
    main()