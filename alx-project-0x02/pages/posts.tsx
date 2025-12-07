import React from 'react';
import Header from '@/components/layout/Header';

const Posts: React.FC = () => {
  return (
    <>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6">Posts</h1>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <article className="border rounded-lg p-4 shadow-sm bg-white">
            <h2 className="text-lg font-semibold mb-2">First Post</h2>
            <p className="text-sm text-gray-700">This is the first post on our blog.</p>
          </article>
          <article className="border rounded-lg p-4 shadow-sm bg-white">
            <h2 className="text-lg font-semibold mb-2">Second Post</h2>
            <p className="text-sm text-gray-700">This is the second post on our blog.</p>
          </article>
          <article className="border rounded-lg p-4 shadow-sm bg-white">
            <h2 className="text-lg font-semibold mb-2">Third Post</h2>
            <p className="text-sm text-gray-700">This is the third post on our blog.</p>
          </article>
        </div>
      </main>
    </>
  );
};

export default Posts;
