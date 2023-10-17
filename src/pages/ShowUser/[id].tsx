import React from 'react';
import { useGetUserQuery } from '@/generated/graphql';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Test = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useGetUserQuery({
    variables: {
      user_id: Number(id),
    },
  });

  console.log(data?.getUser);
  return (
    <div className='container mx-auto mt-8 mb-24'>
      <div className='flex items-center mb-4 ml-4'>
        {/* Back button */}
        <Link
          href='/Showbook'
          className='flex items-center text-blue-500 hover:text-blue-700'
        >
          <FontAwesomeIcon icon={faArrowLeft} className='mr-2' />
          Back
        </Link>
      </div>

      <h2 className='text-2xl font-bold mb-4 ml-4'>User Details</h2>

      <div className='bg-blue-100 p-6 shadow-md rounded-md border border-gray-300 mx-4'>
        <h3 className='text-xl font-semibold mb-2'>
          Name: {`${data?.getUser.fname} ${data?.getUser.lname}`}
        </h3>
        <p className='text-gray-600 mb-2'>Author: {data?.getUser.username}</p>
        <p className='text-gray-600 mb-2'>Genre: {data?.getUser.username}</p>
        {/* <p className='text-gray-600 mb-2'>
          Publication Year:{' '}
          {data?.getUser.username
            ? new Date(data?.getUser.username).toLocaleDateString()
            : 'N/A'}
        </p> */}
        <p className='text-gray-600 mb-2'>Language: {data?.getUser.username}</p>
      </div>
    </div>
  );
};

export default Test;
