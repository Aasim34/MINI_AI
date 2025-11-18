import React, { useState, useEffect } from 'react';

const GenerationResults = ({ results, onReset }) => {
  if (!results) return null;
  
  const [projectUrl, setProjectUrl] = useState(null);
  const [isServerRunning, setIsServerRunning] = useState(false);

  // Function to start the development server for the generated project
  const startProjectServer = async () => {
    try {
      const response = await fetch('/api/start-project', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          projectPath: results.projectPath,
          projectSlug: results.projectSlug
        }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setProjectUrl(data.url);
        setIsServerRunning(true);
      } else {
        console.error('Failed to start project server:', data.error);
      }
    } catch (error) {
      console.error('Error starting project server:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Generation Complete!</h2>
        <button
          onClick={onReset}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-medium transition-colors"
        >
          Generate Another
        </button>
      </div>

      <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
        <div className="flex items-center">
          <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="font-medium text-green-800">Your application has been generated successfully!</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-bold text-lg text-gray-800 mb-3">Project Details</h3>
          <div className="space-y-2">
            <div>
              <span className="font-medium text-gray-700">Name:</span>
              <span className="ml-2 text-gray-600">{results.projectName}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Description:</span>
              <span className="ml-2 text-gray-600">{results.description}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Location:</span>
              <span className="ml-2 text-gray-600">Projects/{results.projectSlug}</span>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-bold text-lg text-gray-800 mb-3">Features</h3>
          <ul className="space-y-1">
            {results.features.slice(0, 5).map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
            {results.features.length > 5 && (
              <li className="text-gray-500 text-sm">+ {results.features.length - 5} more features</li>
            )}
          </ul>
        </div>
      </div>

      {/* Project Preview Section */}
      <div className="border border-gray-200 rounded-lg p-4 mb-6">
        <h3 className="font-bold text-lg text-gray-800 mb-3">Project Preview</h3>
        {!isServerRunning ? (
          <div className="space-y-4">
            <p className="text-gray-600">
              Click the button below to start the development server for your generated project and preview it in the browser.
            </p>
            <button
              onClick={startProjectServer}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              Start Project Server
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-gray-600">
              Your project server is running! Click the link below to preview your generated website.
            </p>
            <a 
              href={projectUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
            >
              Open Project Preview
            </a>
            <p className="text-sm text-gray-500">
              Note: The server will continue running in the background. To stop it, close the terminal window that opens.
            </p>
          </div>
        )}
      </div>

      <div className="border border-gray-200 rounded-lg p-4 mb-6">
        <h3 className="font-bold text-lg text-gray-800 mb-3">Next Steps</h3>
        <ol className="space-y-3">
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-3">1</span>
            <div>
              <span className="font-medium">Navigate to your project:</span>
              <code className="block mt-1 p-2 bg-gray-100 rounded text-sm">cd Projects/{results.projectSlug}</code>
            </div>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-3">2</span>
            <div>
              <span className="font-medium">Install dependencies:</span>
              <code className="block mt-1 p-2 bg-gray-100 rounded text-sm">npm install</code>
            </div>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-3">3</span>
            <div>
              <span className="font-medium">Start the development server:</span>
              <code className="block mt-1 p-2 bg-gray-100 rounded text-sm">npm run dev</code>
            </div>
          </li>
        </ol>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-bold text-gray-800 mb-2">Project Structure</h3>
        <pre className="text-sm text-gray-600 overflow-x-auto">
{`Projects/${results.projectSlug}/
├── src/
│   ├── pages/          # Next.js pages (routes)
│   ├── components/      # React components
│   ├── styles/          # CSS/Tailwind styling
│   └── api/            # Backend API routes
├── package.json
├── next.config.js
├── tailwind.config.js
└── README.md`}
        </pre>
      </div>
    </div>
  );
};

export default GenerationResults;