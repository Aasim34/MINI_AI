import React from 'react';

export default function Home() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to Simple Blog</h1>
      <p>A simple blog website</p>
      <div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '5px' }}>
        <h2>Blog Posts</h2>
        <ul style={{ textAlign: 'left' }}>
          <li>How to create a blog</li>
          <li>Getting started with Next.js</li>
          <li>Building full-stack applications</li>
        </ul>
      </div>
    </div>
  );
}