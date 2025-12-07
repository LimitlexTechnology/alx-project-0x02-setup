import React from 'react';
import { PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <article className="border rounded-lg p-4 shadow-md bg-white hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">User {userId}</span>
      </div>
      <p className="text-sm text-gray-600 line-clamp-3">{content}</p>
    </article>
  );
};

export default PostCard;
