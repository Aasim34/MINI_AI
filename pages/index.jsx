import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
// Import our new 3D animated components
import AnimatedGeneratorForm from '../components/3d/AnimatedGeneratorForm';
import AnimatedGenerationResults from '../components/3d/AnimatedGenerationResults';
import AnimatedFeatureShowcase from '../components/3d/AnimatedFeatureShowcase';
import AnimatedHeader from '../components/3d/AnimatedHeader';

export default function Home() {
  const [results, setResults] = useState(null);

  const handleGenerate = async (idea, onProgress) => {
    try {
      // Add a timeout to the fetch request
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 300000); // 5 minute timeout
      
      // Create EventSource for real-time progress updates
      const eventSource = new EventSource(`/api/generate-progress?idea=${encodeURIComponent(idea)}`);
      
      let generationCompleted = false;
      
      eventSource.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.progress) {
          onProgress(data.progress);
        }
        if (data.success && data.data) {
          setResults(data.data);
          generationCompleted = true;
          eventSource.close();
          clearTimeout(timeoutId);
        }
        if (data.error) {
          eventSource.close();
          clearTimeout(timeoutId);
          throw new Error(data.error);
        }
      };
      
      eventSource.onerror = (error) => {
        eventSource.close();
        clearTimeout(timeoutId);
        if (!generationCompleted) {
          throw new Error('Connection to progress stream failed');
        }
      };
      
      // Also make the regular fetch request for backward compatibility
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idea }),
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      const result = await response.json();
      
      if (result.success && !generationCompleted) {
        setResults(result.data);
      } else if (!result.success) {
        throw new Error(result.error || 'Generation failed');
      }
    } catch (error) {
      console.error('Generation failed:', error);
      if (error.name === 'AbortError') {
        throw new Error('Generation timed out after 5 minutes. Please try again with a simpler idea.');
      } else if (error.message) {
        throw new Error(error.message);
      } else {
        throw new Error('Generation failed. Please try again.');
      }
    }
  };

  const handleReset = () => {
    setResults(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Animated Header with 3D elements */}
      <AnimatedHeader />
      
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!results ? (
            <AnimatedGeneratorForm onGenerate={handleGenerate} />
          ) : (
            <AnimatedGenerationResults results={results} onReset={handleReset} />
          )}
        </div>
      </main>

      {/* Animated Features Section */}
      {!results && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <AnimatedFeatureShowcase />
        </motion.div>
      )}

      {/* Footer with 3D animation */}
      <footer className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div 
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-6"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </motion.div>
            <motion.h3 
              className="text-2xl font-bold mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              AI Full-Stack Generator
            </motion.h3>
            <motion.p 
              className="text-indigo-200 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              v3.0 - Create production-ready applications with AI
            </motion.p>
            <div className="flex justify-center space-x-6 text-sm text-indigo-300">
              <a href="#" className="hover:text-white transition-colors">Documentation</a>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
            </div>
            <motion.p 
              className="mt-8 text-xs text-indigo-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              © 2025 AI Full-Stack Generator. All rights reserved.
            </motion.p>
          </div>
        </div>
      </footer>
    </div>
  );
}