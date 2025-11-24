import React from 'react';
import Card from '../components/common/card';

const HomePage: React.FC = () => {
	const cards = [
		{ title: 'Getting Started', content: 'Learn the basics of this Next.js + Tailwind app.' },
		{ title: 'Components', content: 'Reusable UI components live under `components/`.' },
		{ title: 'Styling', content: 'Global styles and Tailwind are configured in `styles/`.' },
	];

	return (
		<main className="min-h-screen flex flex-col items-center gap-6 p-8 bg-gray-50">
			<h1 className="text-2xl font-bold">Home</h1>
			<section className="flex flex-wrap justify-center gap-6">
				{cards.map((c) => (
					<Card key={c.title} title={c.title} content={c.content} />
				))}
			</section>
		</main>
		);
	};

export default HomePage;
