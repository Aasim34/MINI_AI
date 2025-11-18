import React, { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="text-indigo-600 font-semibold">← Back to Home</Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="w-12 h-12 bg-indigo-600 rounded-lg mx-auto mb-4"></div>
            <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
            <a href="mailto:hello@example.com" className="text-indigo-600 hover:text-indigo-700">hello@example.com</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="w-12 h-12 bg-indigo-600 rounded-lg mx-auto mb-4"></div>
            <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
            <a href="tel:+1234567890" className="text-indigo-600 hover:text-indigo-700">+1 (234) 567-890</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="w-12 h-12 bg-indigo-600 rounded-lg mx-auto mb-4"></div>
            <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
            <p className="text-gray-600">123 Main St, City, State</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
                required
              ></textarea>
            </div>
            {submitted && <div className="bg-green-100 text-green-700 p-4 rounded-lg">Message sent successfully!</div>}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
