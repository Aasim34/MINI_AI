import React, { useState } from 'react';

const GeneratorForm = ({ onGenerate }) => {
  const [idea, setIdea] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!idea.trim()) return;
    
    setIsLoading(true);
    setProgress('Starting generation process...');
    setError('');
    
    try {
      await onGenerate(idea, apiKey, (message) => {
        setProgress(message);
      });
    } catch (error) {
      console.error('Generation failed:', error);
      // Provide more detailed error messages
      if (error.message) {
        setError(error.message);
      } else if (typeof error === 'string') {
        setError(error);
      } else {
        setError('Generation failed. Please check the console for more details.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">AI Full-Stack Generator</h2>
      
      <div className="mb-6">
        <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700 mb-2">
          OpenAI API Key
        </label>
        <input
          type="password"
          id="apiKey"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="sk-..."
          required
        />
        <p className="mt-1 text-sm text-gray-500">
          Your API key is used only for this request and is not stored.
        </p>
      </div>
      
      <div className="mb-6">
        <label htmlFor="idea" className="block text-sm font-medium text-gray-700 mb-2">
          App Idea
        </label>
        <textarea
          id="idea"
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          rows="4"
          placeholder="Describe your app idea... e.g., A dog walking marketplace with real-time GPS tracking"
          required
        />
      </div>
      
      <button
        type="submit"
        disabled={isLoading || !idea.trim()}
        className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all ${
          isLoading 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 transform hover:scale-105'
        }`}
      >
        {isLoading ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Generating...
          </span>
        ) : (
          'Generate Full-Stack App'
        )}
      </button>
      
      {error && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center text-red-800">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Error:</span>
          </div>
          <p className="mt-1 text-red-700">{error}</p>
        </div>
      )}
      
      {isLoading && (
        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-center text-blue-800">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Generating your app...</span>
          </div>
          <p className="mt-1 text-blue-700">
            {progress}
          </p>
          <p className="mt-2 text-sm text-blue-600">
            This may take 1-3 minutes. Please do not refresh the page.
          </p>
        </div>
      )}
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-medium text-blue-800 mb-2">How it works</h3>
        <ul className="text-sm text-blue-700 list-disc pl-5 space-y-1">
          <li>Enter your app idea and OpenAI API key</li>
          <li>Our AI generates a complete Next.js application</li>
          <li>Includes frontend, backend API routes, and database schema</li>
          <li>Ready to run with npm install && npm run dev</li>
        </ul>
      </div>
    </form>
  );
};

export default GeneratorForm;