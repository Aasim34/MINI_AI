import React from 'react';
import Link from 'next/link';
import PageLayout from '../components/PageLayout';

const DocumentationPage = () => {
  return (
    <PageLayout title="Documentation">
      <p className="text-xl text-gray-600 text-center mb-12">
        Everything you need to know about the AI Full-Stack Generator
      </p>

      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
        <div className="prose max-w-none">
          <p className="text-gray-700 mb-4">
            The AI Full-Stack Generator is a powerful tool that creates complete, production-ready applications from simple ideas. 
            Using advanced AI models, it generates both frontend and backend code, along with database schemas and API endpoints.
          </p>
          
          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">The Process</h3>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700">
            <li><strong>Describe Your Idea</strong> - Enter a natural language description of your application</li>
            <li><strong>AI Analysis</strong> - Our system analyzes your idea and plans the application structure</li>
            <li><strong>Code Generation</strong> - Frontend, backend, and database code are generated simultaneously</li>
            <li><strong>Ready to Use</strong> - The complete application is ready for customization and deployment</li>
          </ol>
          
          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">What You Get</h3>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Complete Next.js frontend with Tailwind CSS styling</li>
            <li>Backend API routes with proper error handling</li>
            <li>Database schema (Prisma) with tables and relationships</li>
            <li>Reusable React components</li>
            <li>Authentication system (in advanced versions)</li>
            <li>Admin dashboard (in advanced versions)</li>
            <li>Environment configuration files</li>
            <li>Deployment-ready structure</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Getting Started</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Prerequisites</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Node.js (v16 or higher)</li>
                <li>npm or yarn</li>
                <li>OpenAI API key</li>
                <li>Python 3.7+ (for advanced generator)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Basic Usage</h3>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                <li>Enter your app idea in the generator form</li>
                <li>Provide your OpenAI API key</li>
                <li>Click "Generate Full-Stack App"</li>
                <li>Wait for generation to complete</li>
                <li>Follow the next steps to run your app</li>
              </ol>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Best Practices</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Writing Good Prompts</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Be specific about features you want</li>
                <li>Mention target audience or use cases</li>
                <li>Include any special requirements</li>
                <li>Keep descriptions concise but detailed</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Customization Tips</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Start with the generated code as a foundation</li>
                <li>Modify styles in Tailwind CSS classes</li>
                <li>Extend API endpoints for additional functionality</li>
                <li>Add new pages and components as needed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">Ready to Generate Your Application?</h2>
        <p className="text-blue-100 mb-6 max-w-2xl">
          Join thousands of developers who have accelerated their development workflow with our AI-powered generator.
        </p>
        <Link href="/" className="inline-block px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors">
          Try the Generator
        </Link>
      </div>
    </PageLayout>
  );
};

export default DocumentationPage;