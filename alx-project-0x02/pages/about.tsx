import React from 'react';
import Header from '@/components/layout/Header';
import Button from '@/components/common/button';

const About: React.FC = () => {
  return (
    <>
      <Header />
      <div className="mx-auto mt-12 max-w-3xl text-center space-y-6">
      <h1 className="text-3xl font-bold">About Page</h1>
      <p>This is the About page of our Next.js app.</p>
      <div className="flex justify-center gap-4">
        <Button size="small" shape="rounded-sm">Small</Button>
        <Button size="medium" shape="rounded-md">Medium</Button>
        <Button size="large" shape="rounded-full">Large</Button>
      </div>
    </div>
    </>
  );
};

export default About;

