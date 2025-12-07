import React from 'react';
import Card from '@/components/common/Card';

const Home: React.FC = () => {
  return (
    <main className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card title="Getting Started" content="Explore the basics of this project." />
        <Card title="Features" content="Discover the features we’ve built so far." />
        <Card title="Next Steps" content="Check out what’s coming up next." />
      </div>
    </main>
  );
};

export default Home;

