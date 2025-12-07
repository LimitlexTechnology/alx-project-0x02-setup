import React from 'react';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';

const Home: React.FC = () => {
  const [posts, setPosts] = React.useState([
    { title: 'Getting Started', content: 'Explore the basics of this project.' },
    { title: 'Features', content: 'Discover the features we’ve built so far.' },
    { title: 'Next Steps', content: 'Check out what’s coming up next.' },
  ]);
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (data: { title: string; content: string }) => {
    setPosts((prev) => [{ title: data.title, content: data.content }, ...prev]);
  };

  return (
    <main className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
        <button
          className="rounded bg-blue-600 px-4 py-2 text-white"
          onClick={() => setOpen(true)}
        >
          Add Post
        </button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p, i) => (
          <Card key={i} title={p.title} content={p.content} />
        ))}
      </div>
      <PostModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onSubmit={handleSubmit}
      />
    </main>
  );
};

export default Home;

