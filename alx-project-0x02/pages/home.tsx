import React from 'react';
import Card from '../components/common/Card';

const Home: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Home Page</h1>
      <p>Welcome to the Home page of our Next.js app!</p>

      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '30px' }}>
        <Card title="Card 1" content="This is the content for card 1." />
        <Card title="Card 2" content="This is the content for card 2." />
        <Card title="Card 3" content="This is the content for card 3." />
      </div>
    </div>
  );
};

export default Home;
