import React from 'react';
import Link from 'next/link';
import PageLayout from '../components/PageLayout';

const ExamplesPage = () => {
  const examples = [
    {
      title: "E-Commerce Platform",
      description: "Full-featured online store with product catalog, shopping cart, and payment processing",
      features: ["Product listings", "Shopping cart", "User accounts", "Order management"]
    },
    {
      title: "Project Management Tool",
      description: "Collaborative platform for teams to manage projects, tasks, and deadlines",
      features: ["Task boards", "Team collaboration", "Time tracking", "Reporting"]
    },
    {
      title: "Fitness Tracker",
      description: "Health and fitness application for tracking workouts, nutrition, and progress",
      features: ["Workout logging", "Nutrition tracking", "Progress charts", "Goal setting"]
    },
    {
      title: "Real Estate Portal",
      description: "Property listing platform with search, filtering, and agent communication",
      features: ["Property search", "Advanced filters", "Agent profiles", "Favorites"]
    },
    {
      title: "Learning Management System",
      description: "Educational platform for course creation, content delivery, and student tracking",
      features: ["Course creation", "Content management", "Student progress", "Assessments"]
    },
    {
      title: "Social Media Dashboard",
      description: "Content scheduling and analytics platform for social media management",
      features: ["Content calendar", "Analytics dashboard", "Multi-platform posting", "Engagement tracking"]
    }
  ];

  return (
    <PageLayout title="Example Applications">
      <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
        See what you can create with our AI-powered generator. These are real applications generated from simple ideas.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {examples.map((example, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-r from-blue-400 to-indigo-600 flex items-center justify-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{example.title}</h3>
              <p className="text-gray-600 mb-4">{example.description}</p>
              <ul className="space-y-2 mb-6">
                {example.features.map((feature, featIndex) => (
                  <li key={featIndex} className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg font-medium transition-colors">
                Generate Similar
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Create Your Own Application</h2>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Describe your idea and our AI generator will create a complete, production-ready application in minutes.
        </p>
        <Link href="/" className="inline-block px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors">
          Try the Generator
        </Link>
      </div>
    </PageLayout>
  );
};

export default ExamplesPage;