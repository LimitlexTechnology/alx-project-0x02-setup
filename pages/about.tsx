import React from 'react';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">About Page</h1>
        <div className="flex flex-col items-center space-y-4">
          <Button size="small" shape="rounded-sm" label="Small Rounded-SM" />
          <Button size="medium" shape="rounded-md" label="Medium Rounded-MD" />
          <Button size="large" shape="rounded-full" label="Large Rounded-Full" />
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
