import React, { useState, useEffect } from 'react';

export default function OrderSummary() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setItems([
        { id: 1, title: 'Example Item 1', description: 'This is a sample card with content' },
        { id: 2, title: 'Example Item 2', description: 'Fully functional and styled' },
        { id: 3, title: 'Example Item 3', description: 'Ready to customize' },
      ]);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <div className="text-center">Loading cards...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
        >
          <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
          <p className="text-gray-600 mb-4">{item.description}</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition">
            Learn More
          </button>
        </div>
      ))}
    </div>
  );
}
