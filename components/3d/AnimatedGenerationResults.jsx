import React from 'react';
import { motion } from 'framer-motion';
import Scene3D from './Scene3D';

const AnimatedGenerationResults = ({ results, onReset }) => {
  const handleViewProject = () => {
    window.open(`/view-project?path=${encodeURIComponent(results.projectPath)}`, '_blank');
  };

  const handleDownload = async () => {
    try {
      const response = await fetch('/api/projects/download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ projectPath: results.projectPath }),
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${results.projectName}.zip`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } else {
        throw new Error('Failed to download project');
      }
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. Please try again.');
    }
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-8 text-white relative overflow-hidden">
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </motion.div>
          </div>
          
          <motion.h2 
            className="text-3xl font-bold text-center mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Success! Your App is Ready
          </motion.h2>
          
          <motion.p 
            className="text-green-100 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            We've generated a complete full-stack application based on your idea
          </motion.p>
        </div>
        
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-bold text-blue-900 mb-2 text-lg">Project Details</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-blue-700">Name:</span>
                  <span className="font-medium">{results.projectName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700">Framework:</span>
                  <span className="font-medium">Next.js</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700">Status:</span>
                  <span className="font-medium text-green-600">Generated</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="font-bold text-purple-900 mb-2 text-lg">Next Steps</h3>
              <ul className="space-y-2 text-purple-700">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Download the project files</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Extract and navigate to the folder</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Run <code className="bg-white px-1.5 py-0.5 rounded">npm install</code></span>
                </li>
              </ul>
            </motion.div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={handleViewProject}
              className="flex-1 py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
                View Project Structure
              </div>
            </motion.button>
            
            <motion.button
              onClick={handleDownload}
              className="flex-1 py-4 px-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                Download Project
              </div>
            </motion.button>
            
            <motion.button
              onClick={onReset}
              className="py-4 px-6 bg-gradient-to-r from-gray-500 to-gray-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
                Generate Another
              </div>
            </motion.button>
          </div>
          
          <motion.div 
            className="mt-8 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-bold text-indigo-900 mb-4 text-lg flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Project Structure
            </h3>
            <div className="bg-white/70 rounded-lg p-4 font-mono text-sm">
              <div className="text-gray-700">
                <div className="flex items-center mb-1">
                  <span className="text-blue-500 mr-2">📁</span>
                  <span className="font-bold">{results.projectName}/</span>
                </div>
                <div className="ml-6">
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-2">📄</span>
                    <span>package.json</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-2">📄</span>
                    <span>next.config.js</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">📁</span>
                    <span>src/</span>
                  </div>
                  <div className="ml-6">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">📁</span>
                      <span>pages/</span>
                    </div>
                    <div className="ml-6">
                      <div className="flex items-center">
                        <span className="text-purple-500 mr-2">📄</span>
                        <span>index.js</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-purple-500 mr-2">📄</span>
                        <span>_app.js</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">📁</span>
                      <span>components/</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">📁</span>
                      <span>styles/</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedGenerationResults;