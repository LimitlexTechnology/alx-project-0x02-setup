import React from 'react';
import { PostProps } from '../../interfaces';

const PostCard = ({ title, content, userId }: PostProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition duration-300">
      <h2 className="text-xl font-bold text-gray-800 mb-2 capitalize">{title}</h2>
      <p className="text-gray-600 mb-4">{content}</p>
      <div className="text-sm text-gray-400 font-medium">
        User ID: {userId}
      </div>
    </div>
  );
};

export default PostCard;
