import React, { useState } from 'react';
import Link from 'next/link';
import GeneratorForm from '../components/GeneratorForm';
import GenerationResults from '../components/GenerationResults';
import FeatureShowcase from '../components/FeatureShowcase';

export default function Home() {
  const [results, setResults] = useState(null);

  const handleGenerate = async (idea, apiKey, onProgress) => {
    try {
      // Add a timeout to the fetch request
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 300000); // 5 minute timeout
      
      // Create EventSource for real-time progress updates
      const eventSource = new EventSource(`/api/generate-progress?idea=${encodeURIComponent(idea)}&apiKey=${encodeURIComponent(apiKey)}`);
      
      eventSource.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.progress) {
          onProgress(data.progress);
        }
        if (data.success) {
          setResults(data.data);
          eventSource.close();
        }
        if (data.error) {
          eventSource.close();
          throw new Error(data.error);
        }
      };
      
      eventSource.onerror = (error) => {
        eventSource.close();
        throw new Error('Connection to progress stream failed');
      };
      
      // Also make the regular fetch request for backward compatibility
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idea, apiKey }),
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      const result = await response.json();
      
      if (result.success) {
        setResults(result.data);
      } else {
        throw new Error(result.error || 'Generation failed');
      }
    } catch (error) {
      console.error('Generation failed:', error);
      if (error.name === 'AbortError') {
        throw new Error('Generation timed out after 5 minutes. Please try again with a simpler idea or check your OpenAI API key.');
      } else if (error.message) {
        throw new Error(error.message);
      } else {
        throw new Error('Generation failed. Please check your OpenAI API key and try again.');
      }
    }
  };

  const handleReset = () => {
    setResults(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <h1 className="ml-3 text-2xl font-bold text-gray-900">AI Full-Stack Generator</h1>
            <div className="ml-auto flex items-center space-x-4">
              <Link href="/examples" className="text-sm text-gray-600 hover:text-gray-900">
                Examples
              </Link>
              <div className="text-sm text-gray-500">
                v3.0
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!results ? (
            <GeneratorForm onGenerate={handleGenerate} />
          ) : (
            <GenerationResults results={results} onReset={handleReset} />
          )}
        </div>
      </main>

      {/* Features Section */}
      {!results && <FeatureShowcase />}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">AI Full-Stack Generator v3.0</p>
            <p className="mt-2 text-gray-500 text-sm">Create production-ready applications with AI</p>
          </div>
        </div>
      </footer>
    </div>
  );
}