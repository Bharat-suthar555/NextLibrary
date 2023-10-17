import React from 'react';
import { useCreateBookMutation } from '@/generated/graphql';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  title: Yup.string()
  .trim()
  .required('Title is required')
  .matches(/^[A-Za-z\s]+$/, 'title must contain only letters and spaces'),
  author: Yup.string()
  .trim()
  .matches(/^[A-Za-z\s]+$/, 'Author must contain only letters and spaces')
  .required('Author is required'),
  genre: Yup.string()
  .trim()
  .matches(/^[A-Za-z\s]+$/, 'Genre must contain only letters and spaces')
  .required('Genre is required'),
  image: Yup.string()
  .trim()
  .url('Invalid URL format'),
  publication_year: Yup.date()
  .max(new Date(),'Publication year cannot be in the future'),
  language: Yup.string()
  .trim()
  .matches(/^[A-Za-z\s]+$/, 'Language must contain only letters and spaces')
  .required('Language is required'),
});

const BookCreation = () => {
  const router = useRouter();

  const [createBook, { loading: createBookLoading }] = useCreateBookMutation({
    fetchPolicy: 'network-only',
  });

  return (
    <div className='mt-8 mb-16'>
      <div className='max-w-md mx-auto p-4 bg-white rounded shadow'>
        <h2 className='text-2xl font-semibold mb-4'>Create Book</h2>
        <Formik
          initialValues={{
            title: '',
            author: '',
            genre: '',
            publication_year: '',
            language: '',
            image: '',
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm }) => {
            try {
              const { data } = await createBook({
                variables: {
                  data: {
                    title: values.title,
                    author: values.author,
                    genre: values.genre,
                    publication_year: values.publication_year,
                    language: values.language,
                    image: values.image,
                  },
                },
              });

              router.push('/Showbook');

              console.log('Book created:', data?.createBook);
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

            <div className='mb-4'>
              <label
                htmlFor='author'
                className='block text-sm font-medium text-gray-700'
              >
                Author:
              </label>
              <Field
                type='text'
                id='author'
                name='author'
                placeholder='Author'
                className='mt-1 p-2 w-full border rounded focus:ring focus:ring-blue-300'
              />
              <ErrorMessage
                name='author'
                component='div'
                className='text-red-500 text-sm'
              />
            </div>

            <div className='mb-4'>
              <label
                htmlFor='genre'
                className='block text-sm font-medium text-gray-700'
              >
                Genre:
              </label>
              <div className='mb-4'>
                <Field
                  type='text'
                  id='genre'
                  name='genre'
                  placeholder='Genre'
                  className='mt-1 p-2 w-full border rounded focus:ring focus:ring-blue-300'
                />
                <ErrorMessage
                  name='genre'
                  component='div'
                  className='text-red-500 text-sm'
                />
              </div>
            </div>

            <div className='mb-4'>
              <label
                htmlFor='image'
                className='block text-sm font-medium text-gray-700'
              >
                Image:
              </label>
              <div className='mb-4'>
                <Field
                  type='text'
                  id='image'
                  name='image'
                  placeholder='Image_Url'
                  className='mt-1 p-2 w-full border rounded focus:ring focus:ring-blue-300'
                />
                <ErrorMessage
                  name='image'
                  component='div'
                  className='text-red-500 text-sm'
                />
              </div>
            </div>

            <div className='mb-4'>
              <label
                htmlFor='publication_year'
                className='block text-sm font-medium text-gray-700'
              >
                Publication Year:
              </label>
              <Field
                type='date'
                id='publication_year'
                name='publication_year'
                placeholder='Publication Year'
                className='mt-1 p-2 w-full border rounded focus:ring focus:ring-blue-300'
              />
              <ErrorMessage
                name='publication_year'
                component='div'
                className='text-red-500 text-sm'
              />
            </div>

            <div className='mb-4'>
              <label
                htmlFor='language'
                className='block text-sm font-medium text-gray-700'
              >
                Language:
              </label>
              <Field
                type='text'
                id='language'
                name='language'
                placeholder='Language'
                className='mt-1 p-2 w-full border rounded focus:ring focus:ring-blue-300'
              />
              <ErrorMessage
                name='language'
                component='div'
                className='text-red-500 text-sm'
              />
            </div>

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

// import React from 'react';
// import { useCreateBookMutation } from '@/generated/graphql';
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import { useRouter } from 'next/router';

// const BookCreation = () => {
//   const router = useRouter();

//   const [createBook, { loading: createBookLoading }] = useCreateBookMutation({
//     fetchPolicy: 'network-only',
//   });

//   return (
//     <div className='mt-8'>
//       <div className='max-w-md mx-auto p-4 bg-white rounded shadow'>
//         <h2 className='text-2xl font-semibold mb-4'>Create Book</h2>
//         <Formik
//           initialValues={{
//             title: '',
//             author: '',
//             genre: '',
//             publication_year: '',
//             language: '',
//           }}
//           validate={(values) => {
//             type FormErrors = {
//               title?: string;
//               author?: string;
//               genre?: string;
//               publication_year?: string;
//               language?: string;
//             };
//             let errors: FormErrors = {};
//             if (!values.publication_year) {
//               errors.publication_year = 'Publication Year is required';
//             } else {
//               const currentYear = new Date().getFullYear();
//               if (
//                 new Date(values.publication_year).getFullYear() > currentYear
//               ) {
//                 errors.publication_year =
//                   'Publication Year cannot be in the future';
//               }
//             }
//             return errors;
//           }}
//           onSubmit={async (values, { resetForm }) => {
//             try {
//               const { data } = await createBook({
//                 variables: {
//                   data: {
//                     title: values.title,
//                     author: values.author,
//                     genre: values.genre,
//                     publication_year: values.publication_year,
//                     language: values.language,
//                   },
//                 },
//               });

//               router.push('/Showbook');

//               console.log('Book created:', data?.createBook);
//               resetForm();
//             } catch (error) {
//               console.error('Error creating book:', error);
//             }
//           }}
//         >
//           <Form>
//             <div className='mb-4'>
//               <label
//                 htmlFor='title'
//                 className='block text-sm font-medium text-gray-700'
//               >
//                 Title:
//               </label>
//               <Field
//                 type='text'
//                 id='title'
//                 name='title'
//                 placeholder='Title'
//                 className='mt-1 p-2 w-full border rounded focus:ring focus:ring-blue-300'
//               />
//               <ErrorMessage
//                 name='title'
//                 component='div'
//                 className='text-red-500 text-sm'
//               />
//             </div>

//             <div className='mb-4'>
//               <label
//                 htmlFor='author'
//                 className='block text-sm font-medium text-gray-700'
//               >
//                 Author:
//               </label>
//               <Field
//                 type='text'
//                 id='author'
//                 name='author'
//                 placeholder='Author'
//                 className='mt-1 p-2 w-full border rounded focus:ring focus:ring-blue-300'
//               />
//               <ErrorMessage
//                 name='author'
//                 component='div'
//                 className='text-red-500 text-sm'
//               />
//             </div>

//             <div className='mb-4'>
//               <label
//                 htmlFor='genre'
//                 className='block text-sm font-medium text-gray-700'
//               >
//                 Genre:
//               </label>
//               <Field
//                 type='text'
//                 id='genre'
//                 name='genre'
//                 placeholder='Genre'
//                 className='mt-1 p-2 w-full border rounded focus:ring focus:ring-blue-300'
//               />
//               <ErrorMessage
//                 name='genre'
//                 component='div'
//                 className='text-red-500 text-sm'
//               />
//             </div>

//             <div className='mb-4'>
//               <label
//                 htmlFor='publication_year'
//                 className='block text-sm font-medium text-gray-700'
//               >
//                 Publication Year:
//               </label>
//               <Field
//                 type='date'
//                 id='publication_year'
//                 name='publication_year'
//                 placeholder='Publication Year'
//                 className='mt-1 p-2 w-full border rounded focus:ring focus:ring-blue-300'
//               />
//               <ErrorMessage
//                 name='publication_year'
//                 component='div'
//                 className='text-red-500 text-sm'
//               />
//             </div>

//             <div className='mb-4'>
//               <label
//                 htmlFor='language'
//                 className='block text-sm font-medium text-gray-700'
//               >
//                 Language:
//               </label>
//               <Field
//                 type='text'
//                 id='language'
//                 name='language'
//                 placeholder='Language'
//                 className='mt-1 p-2 w-full border rounded focus:ring focus:ring-blue-300'
//               />
//               <ErrorMessage
//                 name='language'
//                 component='div'
//                 className='text-red-500 text-sm'
//               />
//             </div>

//             <button
//               type='submit'
//               disabled={createBookLoading}
//               className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
//             >
//               {createBookLoading ? 'Creating Book...' : 'Create Book'}
//             </button>
//           </Form>
//         </Formik>
//       </div>
//     </div>
//   );
// };

// export default BookCreation;

// import React from 'react';
// import {
//   useCreateBookMutation,
//   useGetAllBooksQuery,
// } from '@/generated/graphql';
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// // import { useNavigate } from 'react-router-dom';
// import { useRouter } from 'next/router';

// const BookCreation = () => {
//   // const navigate = useNavigate();
//   const router = useRouter();

//   const [createBook, { loading: createBookLoading }] = useCreateBookMutation({
//     fetchPolicy: 'network-only',
//   });

//   return (
//     <div className='mt-8'>
//       <div className='max-w-md mx-auto p-4 bg-white rounded shadow'>
//         <h2 className='text-2xl font-semibold mb-4'>Create Book</h2>
//         <Formik
//           initialValues={{
//             title: '',
//             author: '',
//             genre: '',
//             publication_year: '',
//             language: '',
//           }}
//           onSubmit={async (values, { resetForm }) => {
//             try {
//               const { data } = await createBook({
//                 variables: {
//                   data: {
//                     title: values.title,
//                     author: values.author,
//                     genre: values.genre,
//                     publication_year: values.publication_year,
//                     language: values.language,
//                   },
//                 },
//               });

//               router.push('/Showbook');

//               console.log('Book created:', data?.createBook);
//               // location.reload();
//               resetForm();
//             } catch (error) {
//               console.error('Error creating book:', error);
//             }
//           }}
//         >
//           <Form>
//             <div className='mb-4'>
//               <label
//                 htmlFor='title'
//                 className='block text-sm font-medium text-gray-700'
//               >
//                 Title:
//               </label>
//               <Field
//                 type='text'
//                 id='title'
//                 name='title'
//                 placeholder='Title'
//                 className='mt-1 p-2 w-full border rounded focus:ring focus:ring-blue-300'
//               />
//               <ErrorMessage
//                 name='title'
//                 component='div'
//                 className='text-red-500 text-sm'
//               />
//             </div>

//             <div className='mb-4'>
//               <label
//                 htmlFor='author'
//                 className='block text-sm font-medium text-gray-700'
//               >
//                 Author:
//               </label>
//               <Field
//                 type='text'
//                 id='author'
//                 name='author'
//                 placeholder='Author'
//                 className='mt-1 p-2 w-full border rounded focus:ring focus:ring-blue-300'
//               />
//               <ErrorMessage
//                 name='author'
//                 component='div'
//                 className='text-red-500 text-sm'
//               />
//             </div>

//             <div className='mb-4'>
//               <label
//                 htmlFor='genre'
//                 className='block text-sm font-medium text-gray-700'
//               >
//                 Genre:
//               </label>
//               <Field
//                 type='text'
//                 id='genre'
//                 name='genre'
//                 placeholder='Genre'
//                 className='mt-1 p-2 w-full border rounded focus:ring focus:ring-blue-300'
//               />
//               <ErrorMessage
//                 name='genre'
//                 component='div'
//                 className='text-red-500 text-sm'
//               />
//             </div>

//             <div className='mb-4'>
//               <label
//                 htmlFor='publication_year'
//                 className='block text-sm font-medium text-gray-700'
//               >
//                 Publication Year:
//               </label>
//               <Field
//                 type='date'
//                 id='publication_year'
//                 name='publication_year'
//                 placeholder='Publication Year'
//                 className='mt-1 p-2 w-full border rounded focus:ring focus:ring-blue-300'
//               />
//               <ErrorMessage
//                 name='publication_year'
//                 component='div'
//                 className='text-red-500 text-sm'
//               />
//             </div>

//             <div className='mb-4'>
//               <label
//                 htmlFor='language'
//                 className='block text-sm font-medium text-gray-700'
//               >
//                 Language:
//               </label>
//               <Field
//                 type='text'
//                 id='language'
//                 name='language'
//                 placeholder='Language'
//                 className='mt-1 p-2 w-full border rounded focus:ring focus:ring-blue-300'
//               />
//               <ErrorMessage
//                 name='language'
//                 component='div'
//                 className='text-red-500 text-sm'
//               />
//             </div>

//             <button
//               type='submit'
//               disabled={createBookLoading}
//               className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
//             >
//               {createBookLoading ? 'Creating Book...' : 'Create Book'}
//             </button>
//           </Form>
//         </Formik>
//       </div>
//     </div>
//   );
// };

// export default BookCreation;
