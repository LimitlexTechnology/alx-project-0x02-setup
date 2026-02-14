import React from 'react';
import { UserProps } from '../../interfaces';

const UserCard = ({ name, email, address }: UserProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition duration-300">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>
      <p className="text-blue-600 mb-2">{email}</p>
      <div className="text-gray-600">
        <p className="font-semibold">Address:</p>
        <p>{address.street}, {address.city}</p>
      </div>
    </div>
  );
};

export default UserCard;
