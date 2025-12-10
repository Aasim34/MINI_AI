import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Scene3D from './Scene3D';

const AnimatedHeader = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <motion.div 
            className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 flex items-center justify-center shadow-lg"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Scene3D className="w-12 h-12" />
          </motion.div>
          
          <motion.h1 
            className="ml-4 text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            AI Full-Stack Generator
          </motion.h1>
          
          <div className="ml-auto flex items-center space-x-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/projects" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                My Projects
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/examples" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                Examples
              </Link>
            </motion.div>
            
            <motion.div 
              className="text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              v3.0
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AnimatedHeader;