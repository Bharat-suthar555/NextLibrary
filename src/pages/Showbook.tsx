// pages/AllBooks.js

// pages/AllBooks.js
// pages/AllBooks.js
import React from 'react';
import {
  useGetAllBooksQuery,
  useDeleteBookMutation,
} from '@/generated/graphql';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEye } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

const AllBooks = () => {
  const { loading, error, data, refetch } = useGetAllBooksQuery();
  const [deleteBook] = useDeleteBookMutation();
  const router = useRouter();

  const handleDelete = async (id: string) => {
    try {
      if (!id) {
        console.error('Invalid book ID');
        return;
      }

      console.log('Deleting book with id:', id);

      const response = await deleteBook({
        variables: { id: Number(id) },
      });

      console.log('Delete response:', response);

      // Check if there are errors in the GraphQL response
      if (response.errors) {
        console.error('GraphQL errors:', response.errors);
        // You can handle errors here, e.g., show a user-friendly message
        return;
      }

      // Assuming the server returns a success message
      if (response.data?.deleteBook) {
        // Refetch the data after deletion
        refetch();
      }
    } catch (error: any) {
      console.error('Error deleting book:', error.message);
    }
  };

  if (loading) {
    // Render a loading spinner
    return (
      <div className='container mx-auto mt-8 text-center mb-4'>
        <h2 className='text-3xl font-bold mb-4'>All Books</h2>
        <div className='animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500 border-solid mx-auto my-8'></div>
      </div>
    );
  }

  if (error) {
    // Render an error message
    return (
      <div className='container mx-auto mt-8 text-center'>
        <h2 className='text-3xl font-bold mb-4'>Error Loading Books</h2>
        <p className='text-red-500'>{error.message}</p>
      </div>
    );
  }

  const books = data?.getAllBooks || [];

  return (
    <div className='container mx-auto mt-8 mb-24'>
      <h2 className='text-3xl font-bold mb-4 ml-4'>Library Catalog</h2>
      <button className='bg-green-500 text-white py-2 px-4 rounded-md mb-4 ml-4'>
        <Link href='/BookCreation'>Add New Book</Link>
      </button>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {books.map((book) => (
          <div
            key={book.id}
            className='bg-white p-6 mx-2 sm:mx-4 shadow-md rounded-md transition-transform transform hover:scale-105 hover:shadow-lg border border-gray-300 mb-4 sm:mb-8 flex flex-col items-center'
          >
            {/* Image tag */}
            {book.image && (
              <img
                src={book.image}
                alt={`Cover for ${book.title}`}
                className='mb-2 w-64 h-90 object-cover rounded-md self-center'
              />
            )}

            <h3 className='text-lg font-semibold mb-2'>Title: {book.title}</h3>

            <div className='flex justify-between mt-4'>
              {/* View button */}
              <Link
                href={`/Showbook/${book.id}`}
                className='bg-blue-500 text-white py-1 px-4 rounded-md mr-2 inline-block'
              >
                <FontAwesomeIcon icon={faEye} /> View
              </Link>

              {/* Delete button */}
              <button
                onClick={() => handleDelete(book.id)}
                className='bg-red-500 text-white py-1 px-4 rounded-md inline-block'
              >
                <FontAwesomeIcon icon={faTrash} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
// import React from 'react';
// import {
//   useGetAllBooksQuery,
//   useDeleteBookMutation,
// } from '@/generated/graphql';
// import Link from 'next/link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash, faEye } from '@fortawesome/free-solid-svg-icons';
// import { useRouter } from 'next/router';

// const AllBooks = () => {
//   const { loading, error, data, refetch } = useGetAllBooksQuery();
//   const [deleteBook] = useDeleteBookMutation();
//   const router = useRouter();

//   const handleDelete = async (id: string) => {
//     try {
//       if (!id) {
//         console.error('Invalid book ID');
//         return;
//       }

//       console.log('Deleting book with id:', id);

//       const response = await deleteBook({
//         variables: { id: Number(id) },
//       });

//       console.log('Delete response:', response);

//       // Check if there are errors in the GraphQL response
//       if (response.errors) {
//         console.error('GraphQL errors:', response.errors);
//         // You can handle errors here, e.g., show a user-friendly message
//         return;
//       }

//       // Assuming the server returns a success message
//       if (response.data?.deleteBook) {
//         // Refetch the data after deletion
//         refetch();
//       }
//     } catch (error: any) {
//       console.error('Error deleting book:', error.message);
//     }
//   };

//   if (loading) {
//     // Render a loading spinner
//     return (
//       <div className='container mx-auto mt-8 text-center mb-4'>
//         <h2 className='text-2xl font-bold mb-4'>All Books</h2>
//         <div className='animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500 border-solid mx-auto my-8'></div>
//       </div>
//     );
//   }

//   if (error) {
//     // Render an error message
//     return (
//       <div className='container mx-auto mt-8 text-center'>
//         <h2 className='text-2xl font-bold mb-4'>Error Loading Books</h2>
//         <p className='text-red-500'>{error.message}</p>
//       </div>
//     );
//   }

//   const books = data?.getAllBooks || [];

//   console.log(data?.getAllBooks);

//   return (
//     <div className='container mx-auto mt-8 mb-24'>
//       <h2 className='text-2xl font-bold mb-4 ml-4'>Books</h2>
//       <button className='bg-green-500 text-white py-2 px-4 rounded-md mb-4 ml-4'>
//         <Link href='/BookCreation'>Add New Book</Link>
//       </button>

//       <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
//         {books.map((book) => (
//           <li
//             key={book.id}
//             className='bg-blue-50 p-4 shadow-md rounded-md transition-transform transform hover:scale-105 hover:shadow-lg border border-gray-300 m-4'
//           >
//             <h3 className='text-lg font-semibold mb-2'>Title: {book.title}</h3>
//             {/* Image tag */}
//             {book.image && (
//               <img
//                 src={book.image}
//                 alt={`Cover for ${book.title}`}
//                 className='mb-2 max-w-full max-h-40 object-cover rounded-md'
//               />
//             )}

//             {/* View button */}
//             <button className='bg-blue-500 text-white py-1 px-2 rounded-md mr-2'>
//               <Link href={`/Showbook/${book.id}`}>
//                 <FontAwesomeIcon icon={faEye} /> View
//               </Link>
//             </button>

//             {/* Delete button */}
//             <button
//               className='bg-red-500 text-white py-1 px-2 rounded-md'
//               onClick={() => handleDelete(book.id)}
//             >
//               <Link href={`/Showbook`}>
//                 <FontAwesomeIcon icon={faTrash} /> Delete
//               </Link>
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AllBooks;

// // pages/AllBooks.js
// import React from 'react';
// import {
//   useGetAllBooksQuery,
//   useDeleteBookMutation,
// } from '@/generated/graphql';
// import Link from 'next/link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash, faEye } from '@fortawesome/free-solid-svg-icons';
// import { useRouter } from 'next/router';

// const AllBooks = () => {
//   const { loading, error, data, refetch } = useGetAllBooksQuery();
//   const [deleteBook] = useDeleteBookMutation();
//   const router = useRouter();

//   const handleDelete = async (id: string) => {
//     try {
//       if (!id) {
//         console.error('Invalid book ID');
//         return;
//       }

//       console.log('Deleting book with id:', id);

//       const response = await deleteBook({
//         variables: { id: Number(id) },
//       });

//       console.log('Delete response:', response);

//       // Check if there are errors in the GraphQL response
//       if (response.errors) {
//         console.error('GraphQL errors:', response.errors);
//         // You can handle errors here, e.g., show a user-friendly message
//         return;
//       }

//       // Assuming the server returns a success message
//       if (response.data?.deleteBook) {
//         // Refetch the data after deletion
//         refetch();
//       }
//     } catch (error: any) {
//       console.error('Error deleting book:', error.message);
//     }
//   };

//   if (loading) {
//     // Render a loading spinner
//     return (
//       <div className='container mx-auto mt-8 text-center mb-4'>
//         <h2 className='text-2xl font-bold mb-4'>All Books</h2>
//         <div className='animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500 border-solid mx-auto my-8'></div>
//       </div>
//     );
//   }

//   if (error) {
//     // Render an error message
//     return (
//       <div className='container mx-auto mt-8 text-center'>
//         <h2 className='text-2xl font-bold mb-4'>Error Loading Books</h2>
//         <p className='text-red-500'>{error.message}</p>
//       </div>
//     );
//   }

//   const books = data?.getAllBooks || [];

//   console.log(data?.getAllBooks);

//   return (
//     <div className='container mx-auto mt-8 mb-24'>
//       <h2 className='text-2xl font-bold mb-4 ml-4'>Books</h2>
//       <button className='bg-green-500 text-white py-2 px-4 rounded-md mb-4 ml-4'>
//         <Link href='/BookCreation'>Add New Book</Link>
//       </button>

//       <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
//         {books.map((book) => (
//           <li
//             key={book.id}
//             className='bg-blue-50 p-4 shadow-md rounded-md transition-transform transform hover:scale-105 hover:shadow-lg border border-gray-300 m-4'
//           >
//             <h3 className='text-lg font-semibold mb-2'>Title: {book.title}</h3>
//             <p className='text-slate-500 hover:text-green-500 mb-2'>
//               Author: {book.author || 'N/A'}
//             </p>
//             <p className='text-slate-500 hover:text-green-500 mb-2'>
//               Genre: {book.genre || 'N/A'}
//             </p>
//             <p className='text-slate-500 hover:text-green-500 mb-2'>
//               Publication Year:
//               {book?.publication_year
//                 ? new Date(book.publication_year).toLocaleDateString()
//                 : 'N/A'}
//             </p>
//             <p className='text-slate-500 hover:text-green-500 mb-2'>
//               Language: {book.language || 'N/A'}
//             </p>

//             {/* View button */}
//             <button className='bg-blue-500 text-white py-1 px-2 rounded-md mr-2'>
//               <Link href={`/Showbook/${book.id}`}>
//                 <FontAwesomeIcon icon={faEye} /> View
//               </Link>
//             </button>

//             {/* Delete button */}
//             <button
//               className='bg-red-500 text-white py-1 px-2 rounded-md'
//               onClick={() => handleDelete(book.id)}
//             >
//               <Link href={`/Showbook`}>
//                 <FontAwesomeIcon icon={faTrash} /> Delete
//               </Link>
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AllBooks;
