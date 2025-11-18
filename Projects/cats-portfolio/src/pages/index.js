import React from 'react';

export default function Home() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to Cats Portfolio</h1>
      <p>Generated from idea: Cats Portfolio</p>
      <div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '5px' }}>
        <h2>Featured Cats</h2>
        <ul style={{ textAlign: 'left' }}>
          <li>Fluffy - The majestic Persian cat</li>
          <li>Whiskers - The playful Siamese</li>
          <li>Shadow - The mysterious black cat</li>
        </ul>
      </div>
    </div>
  );
}