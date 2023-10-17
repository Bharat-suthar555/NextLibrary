// pages/AllUsers.js
import React from 'react';
import Link from 'next/link';
import { useGetAllUsersQuery } from '@/generated/graphql';

const AllUsers = () => {
  const { loading, error, data } = useGetAllUsersQuery();

  if (loading) {
    // Render a loading spinner
    return (
      <div className='container mx-auto mt-8 text-center mb-4'>
        <h2 className='text-2xl font-bold mb-4'>All Users</h2>
        <div className='animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500 border-solid mx-auto my-8'></div>
      </div>
    );
  }

  if (error) {
    // Render an error message
    return (
      <div className='container mx-auto mt-8 text-center'>
        <h2 className='text-2xl font-bold mb-4'>Error Loading Users</h2>
        <p className='text-red-500'>{error.message}</p>
      </div>
    );
  }

  const users = data?.getAllUsers || [];

  console.log(data?.getAllUsers);
  return (
    <div className='container mx-auto mt-8 mb-24'>
      <h2 className='text-2xl font-bold mb-4 ml-4'>Users</h2>
      <button className='bg-green-500 text-white py-2 px-4 rounded-md mb-4 ml-4'>
        <Link href='/UserCreation'>Add New User</Link>
      </button>

      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {users.map((user) => (
          <li
            key={user.user_id}
            className='bg-blue-50 p-4 shadow-md rounded-md transition-transform transform hover:scale-105 hover:shadow-lg border border-gray-300 m-4'
          >
            <h3 className='text-lg font-semibold mb-2'>
              Name: {`${user.fname} ${user.lname}`}
            </h3>
            <p className='text-slate-500 hover:text-green-500 mb-2'>
              Email: {user.email || 'N/A'}
            </p>
            <p className='text-slate-500 hover:text-green-500 mb-2'>
              Gender: {user.gender || 'N/A'}
            </p>
            <p className='text-slate-500 hover:text-green-500 mb-2'>
              Age: {user.age || 'N/A'}
            </p>

            {/* View button */}
            <Link
              href={`/ShowUser/${user.user_id}`}
              className='bg-blue-500 text-white py-1 px-2 rounded-md mr-2'
            >
              View
            </Link>

            {/* Delete button (you can add a delete functionality here) */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllUsers;
