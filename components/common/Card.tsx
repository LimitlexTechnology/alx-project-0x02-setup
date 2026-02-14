import React from 'react';
import { CardProps } from '@/interfaces';

const Card = ({ title, content }: CardProps) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
            <p className="text-gray-600">{content}</p>
        </div>
    );
};

export default Card;
