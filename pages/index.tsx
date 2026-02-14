import React from 'react';
import Header from '@/components/layout/Header';

const IndexPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto mt-10 p-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to My Next.js App!
        </h1>
        <p className="text-xl text-gray-600">
          This is a scaffolded project demonstrating basic routing and component structure in Next.js.
        </p>
      </main>
    </div>
  );
};

export default IndexPage;
