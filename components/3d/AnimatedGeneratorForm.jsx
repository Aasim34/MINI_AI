import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Scene3D from './Scene3D';

const AnimatedGeneratorForm = ({ onGenerate }) => {
  const [idea, setIdea] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!idea.trim()) return;
    
    setIsLoading(true);
    setProgress('Starting generation process...');
    setError('');
    
    try {
      await onGenerate(idea, (message) => {
        setProgress(message);
      });
    } catch (error) {
      console.error('Generation failed:', error);
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
    <motion.form 
      onSubmit={handleSubmit} 
      className="max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-8 text-white relative overflow-hidden">
          {/* 3D Background Element */}
          <div className="absolute right-0 top-0 w-32 h-32 opacity-20">
            <Scene3D className="w-full h-full" />
          </div>
          
          <div className="flex items-center justify-center mb-4">
            <motion.div 
              className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </motion.div>
          </div>
          
          <motion.h2 
            className="text-3xl font-bold text-center mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Generate Your App
          </motion.h2>
          
          <motion.p 
            className="text-blue-100 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Describe your idea and let AI build it for you
          </motion.p>
        </div>
        
        <div className="p-8">
          <div className="mb-6">
            <label htmlFor="idea" className="block text-sm font-semibold text-gray-700 mb-3">
              💡 What would you like to build?
            </label>
            <textarea
              id="idea"
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none text-gray-700 placeholder-gray-400"
              rows="5"
              placeholder="Example: A dog walking marketplace with real-time GPS tracking, user profiles, and booking system..."
              required
            />
          </div>
      
          <motion.button
            type="submit"
            disabled={isLoading || !idea.trim()}
            className={`w-full py-4 px-6 rounded-xl font-bold text-white text-lg transition-all shadow-lg ${
              isLoading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600'
            }`}
            whileHover={!isLoading && !idea.trim() ? {} : { 
              scale: 1.02,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            whileTap={!isLoading && !idea.trim() ? {} : { scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                🚀 Generating Your App...
              </span>
            ) : (
              <span className="flex items-center justify-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                Generate Full-Stack App
              </span>
            )}
          </motion.button>
      
          {error && (
            <motion.div 
              className="mt-6 p-4 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start text-red-800">
                <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <div>
                  <span className="font-bold text-lg">⚠️ Error</span>
                  <p className="mt-1 text-red-700">{error}</p>
                </div>
              </div>
            </motion.div>
          )}
          
          {isLoading && (
            <motion.div 
              className="mt-6 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-start text-blue-800">
                <div className="animate-pulse mr-3 mt-0.5">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <span className="font-bold text-lg">🔄 Generating your app...</span>
                  <div className="mt-2 p-3 bg-white/70 rounded-lg">
                    <p className="text-blue-900 font-medium">{progress}</p>
                  </div>
                  <p className="mt-3 text-sm text-blue-600 font-medium">
                    ⏱️ This may take 1-3 minutes. Please do not refresh the page.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
      
          <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
            <h3 className="font-bold text-blue-900 mb-4 text-lg flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              How it works
            </h3>
            <div className="space-y-3">
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold mr-3 flex-shrink-0">1</div>
                <p className="text-blue-800 pt-1">Enter your app idea in the text area above</p>
              </motion.div>
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold mr-3 flex-shrink-0">2</div>
                <p className="text-blue-800 pt-1">Our AI generates a complete Next.js application</p>
              </motion.div>
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold mr-3 flex-shrink-0">3</div>
                <p className="text-blue-800 pt-1">Includes frontend, backend API routes, and database schema</p>
              </motion.div>
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold mr-3 flex-shrink-0">4</div>
                <p className="text-blue-800 pt-1">Ready to run with <code className="bg-white px-2 py-0.5 rounded text-sm">npm install && npm run dev</code></p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.form>
  );
};

export default AnimatedGeneratorForm;