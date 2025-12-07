import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address, phone, website }) => {
  return (
    <article className="border rounded-lg p-5 shadow-md bg-white hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">{name}</h3>
      <div className="space-y-2 text-sm text-gray-600">
        <p>
          <span className="font-medium text-gray-700">Email:</span> <a href={`mailto:${email}`} className="text-blue-500 hover:underline">{email}</a>
        </p>
        {phone && (
          <p>
            <span className="font-medium text-gray-700">Phone:</span> {phone}
          </p>
        )}
        {website && (
          <p>
            <span className="font-medium text-gray-700">Website:</span> <a href={`https://${website}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{website}</a>
          </p>
        )}
        <div className="pt-2 border-t">
          <p className="font-medium text-gray-700">Address:</p>
          <p>{address.street}</p>
          <p>{address.city}, {address.zipcode}</p>
        </div>
      </div>
    </article>
  );
};

export default UserCard;
