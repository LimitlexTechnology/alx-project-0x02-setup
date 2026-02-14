import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold text-blue-600">
          <Link href="/">ALX Project 0x02</Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link href="/home" className="text-gray-700 hover:text-blue-600 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/posts" className="text-gray-700 hover:text-blue-600 transition duration-300">
              Posts
            </Link>
          </li>
          <li>
            <Link href="/users" className="text-gray-700 hover:text-blue-600 transition duration-300">
              Users
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
