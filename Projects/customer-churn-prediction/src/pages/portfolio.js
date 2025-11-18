import React from 'react';
import Link from 'next/link';

export default function Portfolio() {
  const primaryColor = "#007BFF";
  
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="text-indigo-600 font-semibold">← Back to Home</Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">"Our Work"</h1>
        <p className="text-xl text-gray-600 mb-12">"Explore our projects focused on predicting and reducing customer churn."</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#007BFF" }}></div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"Data Analysis"</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Customer Churn Analysis"</h3>
              <p className="text-gray-600 mb-4">"Analyzed customer data to identify churn patterns and trends."</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"Machine Learning"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"Data Visualization"</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#007BFF" }}></div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"Predictive Modeling"</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Churn Prediction Model"</h3>
              <p className="text-gray-600 mb-4">"Developed a predictive model using logistic regression to forecast churn."</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"Logistic Regression"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"Python"</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#007BFF" }}></div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"Data Visualization"</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Retention Strategies Dashboard"</h3>
              <p className="text-gray-600 mb-4">"Created an interactive dashboard to visualize churn and retention strategies."</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"Tableau"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"Business Intelligence"</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#007BFF" }}></div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"Customer Segmentation"</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Customer Segmentation for Churn"</h3>
              <p className="text-gray-600 mb-4">"Segmented customers based on behavior to target churn prevention efforts."</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"Clustering"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"K-Means"</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#007BFF" }}></div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"Survey Analysis"</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Survey Analysis for Churn Factors"</h3>
              <p className="text-gray-600 mb-4">"Analyzed customer surveys to identify key factors influencing churn."</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"Text Analysis"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"NLP"</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
