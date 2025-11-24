import React from 'react';
import Card from '../components/common/card';

const Home: React.FC = () => {
	return (
		<div>
			<h1>Home Page</h1>
			<Card title="Welcome" content="This is the home page card." />
		</div>
	);
};

export default Home;