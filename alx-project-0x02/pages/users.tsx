import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';

const Users: React.FC = () => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Failed to fetch users');
        const data = await response.json();
        
        // Map API response to UserProps interface
        const mappedUsers: UserProps[] = data.map((user: {
          name: string;
          email: string;
          address: { street: string; city: string; zipcode: string };
          phone?: string;
          website?: string;
        }) => ({
          name: user.name,
          email: user.email,
          address: {
            street: user.address.street,
            city: user.address.city,
            zipcode: user.address.zipcode,
          },
          phone: user.phone,
          website: user.website,
        }));
        
        setUsers(mappedUsers);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6">Users</h1>
        
        {loading && <p className="text-center text-gray-500">Loading users...</p>}
        {error && <p className="text-center text-red-500">Error: {error}</p>}
        
        {!loading && !error && users.length > 0 && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {users.map((user, index) => (
              <UserCard
                key={index}
                name={user.name}
                email={user.email}
                address={user.address}
                phone={user.phone}
                website={user.website}
              />
            ))}
          </div>
        )}
        
        {!loading && !error && users.length === 0 && (
          <p className="text-center text-gray-500">No users available.</p>
        )}
      </main>
    </>
  );
};

export default Users;
