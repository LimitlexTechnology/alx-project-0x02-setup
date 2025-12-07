import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-100 p-4">
      <nav className="flex justify-center gap-6">
        <Link href="/home" className="text-blue-500 hover:underline">
          Home
        </Link>
        <Link href="/about" className="text-blue-500 hover:underline">
          About
        </Link>
        <Link href="/posts" className="text-blue-500 hover:underline">
          Posts
        </Link>
      </nav>
    </header>
  );
};

export default Header;

