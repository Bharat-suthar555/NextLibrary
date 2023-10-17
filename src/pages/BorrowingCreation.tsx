import React from 'react';
import {
  useCreateBookMutation,
  useCreateBorrowingMutation,
} from '@/generated/graphql';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useRouter } from 'next/router';

const BookCreation = () => {
  const router = useRouter();

  const [createBook, { loading: createBookLoading }] = useCreateBookMutation({
    fetchPolicy: 'network-only',
  });

  const [createBorrowing] = useCreateBorrowingMutation();

  return (
    <div className='mt-8'>
      <div className='max-w-md mx-auto p-4 bg-white rounded shadow'>
        <h2 className='text-2xl font-semibold mb-4'>Create Book</h2>
        <Formik
          initialValues={{
            title: '',
            author: '',
            genre: '',
            publication_year: '',
            language: '',
          }}
          onSubmit={async (values, { resetForm }) => {
            try {
              const { data: bookData } = await createBook({
                variables: {
                  data: {
                    title: values.title,
                    author: values.author,
                    genre: values.genre,
                    publication_year: values.publication_year,
                    language: values.language,
                  },
                },
              });

              // Create borrowing after book is created
              await createBorrowing({
                variables: {
                  date_borrowed: new Date(),
                  date_returned: null, // You can set a default value or handle it accordingly
                  user_id: null /* Provide the user ID */, // Replace with the actual user ID
                  status: true, // Set the initial status as needed
                  id: bookData?.createBook.id, // Use the ID of the newly created book
                },
              });

              router.push('/Book');

              console.log('Book created:', bookData?.createBook);

              resetForm();
            } catch (error) {
              console.error('Error creating book:', error);
            }
          }}
        >
          <Form>
            <div className='mb-4'>
              <label
                htmlFor='title'
                className='block text-sm font-medium text-gray-700'
              >
                Title:
              </label>
              <Field
                type='text'
                id='title'
                name='title'
                placeholder='Title'
                className='mt-1 p-2 w-full border rounded focus:ring focus:ring-blue-300'
              />
              <ErrorMessage
                name='title'
                component='div'
                className='text-red-500 text-sm'
              />
            </div>

            {/* ... (rest of the form fields) */}

            <button
              type='submit'
              disabled={createBookLoading}
              className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
            >
              {createBookLoading ? 'Creating Book...' : 'Create Book'}
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default BookCreation;
