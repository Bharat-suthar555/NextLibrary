// pages/Test/[id].js
import React from 'react';
import { useGetBookByIdQuery } from '@/generated/graphql';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Test = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useGetBookByIdQuery({
    variables: {
      id: Number(id),
    },
  });

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

      <h2 className='text-2xl font-bold mb-4 ml-4'>Book Details</h2>

      <div className='bg-blue-100 p-6 shadow-md rounded-md border border-gray-300 mx-4'>
        <h3 className='text-xl font-semibold mb-2'>
          Title: {data?.getBookById?.title}
        </h3>
        <p className='text-gray-600 mb-2'>
          Author: {data?.getBookById?.author}
        </p>
        <p className='text-gray-600 mb-2'>Genre: {data?.getBookById?.genre}</p>
        <p className='text-gray-600 mb-2'>
          Publication Year:{' '}
          {data?.getBookById?.publication_year
            ? new Date(data.getBookById.publication_year).toLocaleDateString()
            : 'N/A'}
        </p>
        <p className='text-gray-600 mb-2'>
          Language: {data?.getBookById?.language}
        </p>
      </div>
    </div>
  );
};

export default Test;

// import React from 'react';
// import { useGetBookByIdQuery } from '@/generated/graphql';
// import { useRouter } from 'next/router';

// const Test = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const { data } = useGetBookByIdQuery({
//     variables: {
//       id: Number(id),
//     },
//   });

//   return (
//     <div className='container mx-auto mt-8 mb-24'>
//       <h2 className='text-2xl font-bold mb-4 ml-4'>Book Details</h2>

//       <div className='bg-blue-100 p-6 shadow-md rounded-md border border-gray-300 mx-4'>
//         <h3 className='text-xl font-semibold mb-2'>
//           Title: {data?.getBookById?.title}
//         </h3>
//         <p className='text-gray-600 mb-2'>
//           Author: {data?.getBookById?.author}
//         </p>
//         <p className='text-gray-600 mb-2'>Genre: {data?.getBookById?.genre}</p>
//         <p className='text-gray-600 mb-2'>
//           Publication Year:{' '}
//           {data?.getBookById?.publication_year
//             ? new Date(data.getBookById.publication_year).toLocaleDateString()
//             : 'N/A'}
//         </p>
//         <p className='text-gray-600 mb-2'>
//           Language: {data?.getBookById?.language}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Test;
