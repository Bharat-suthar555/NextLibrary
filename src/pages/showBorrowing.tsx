import React from 'react';
import { useBorrowingsQuery, useDeleteBookMutation } from '@/generated/graphql';
import Link from 'next/link';

const BorrowingShow = () => {
  const { data, loading, refetch } = useBorrowingsQuery();
  const [deleteBook] = useDeleteBookMutation();

  const handleDeleteBook = async (bookId: string) => {
    try {
      const response = await deleteBook({
        variables: { id: parseInt(bookId) },
      });
      console.log('clicked', bookId);
      // Check for errors in the GraphQL response
      if (response.errors) {
        console.error('GraphQL errors:', response.errors);
        // Handle errors here, e.g., show a user-friendly message
        return;
      }

      // Assuming the server returns a success message 
      if (response.data?.deleteBook) {
        // Refetch the data after deletion
        // You can also use refetchQueries if using Apollo Client
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
        <h2 className='text-2xl font-bold mb-4'>Books</h2>
        <div className='animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500 border-solid mx-auto my-8'></div>
      </div>
    );
  }

  return (
    <div className='container mx-auto mt-8'>
      <h2 className='text-2xl font-bold mb-4 ml-4'>Books</h2>
      <button className='bg-green-500 text-white py-2 px-4 rounded-md mb-4 ml-4'>
        <Link href='/BookCreation'>Add New Book</Link>
      </button>

      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {data?.borrowings?.map((borrowing) => (
          <li
            key={borrowing?.date_borrowed}
            className='bg-blue-50 p-4 shadow-md rounded-md transition-transform transform hover:scale-105 hover:shadow-lg border border-gray-300 m-4'
          >
            {/* username */}
            <h3 className='text-lg font-semibold mb-2'>
              User Name :
              <span className=' text-slate-500 hover:text-green-500 mb-2'>
                {borrowing?.user?.username}
              </span>
            </h3>

            {/* fullname */}
            <h3 className='text-lg font-semibold mb-2'>
              Full Name :
              <span className=' text-slate-500 hover:text-green-500 mb-2'>
                {borrowing?.user?.fname + ' ' + borrowing?.user?.lname}
              </span>
            </h3>

            {/* e-mail address */}
            <h3 className='text-lg font-semibold mb-2'>
              E-mail :
              <span className=' text-slate-500 hover:text-green-500 mb-2'>
                {borrowing?.user?.email}
              </span>
            </h3>

            {/* book_title */}
            <h3 className='text-lg font-semibold mb-2'>
              Book Title :
              <span className=' text-slate-500 hover:text-green-500 mb-2'>
                {borrowing?.book?.title}
              </span>
            </h3>

            {/* borrowed_date */}
            <h3 className='text-lg font-semibold mb-2'>
              Borrowed Date:{' '}
              <span className='text-slate-500 hover:text-green-500 mb-2'>
                {borrowing?.date_borrowed
                  ? new Date(borrowing.date_borrowed).toLocaleDateString()
                  : 'N/A'}
              </span>
            </h3>

            {/* Delete button */}
            <button
              className='bg-red-500 text-white py-2 px-4 rounded-md mb-2'
              onClick={() => handleDeleteBook(borrowing?.book?.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BorrowingShow;
