// pages/ContactUs.js

import React from 'react';

const ContactUs = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      {/* Your NavBar Component Goes Here */}
      {/* <NavBar /> */}

      <div className='container mx-auto py-16'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-gray-800 mb-4'>Contact Us</h1>
          <p className='text-lg text-gray-600 mb-8'>
            Have questions or suggestions? We'd love to hear from you!
          </p>
        </div>

        <div className='max-w-lg mx-auto bg-white p-8 rounded shadow-md'>
          <form>
            <div className='mb-4'>
              <label
                htmlFor='name'
                className='block text-gray-700 text-sm font-bold mb-2'
              >
                Your Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                className='w-full border rounded p-2 focus:outline-none focus:border-blue-500'
                placeholder='Enter your name'
              />
            </div>

            <div className='mb-4'>
              <label
                htmlFor='email'
                className='block text-gray-700 text-sm font-bold mb-2'
              >
                Your Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='w-full border rounded p-2 focus:outline-none focus:border-blue-500'
                placeholder='Enter your email'
              />
            </div>

            <div className='mb-4'>
              <label
                htmlFor='message'
                className='block text-gray-700 text-sm font-bold mb-2'
              >
                Your Message
              </label>
              <textarea
                id='message'
                name='message'
                // rows='4'
                className='w-full border rounded p-2 focus:outline-none focus:border-blue-500'
                placeholder='Type your message here'
              ></textarea>
            </div>

            <button
              type='submit'
              className='w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue'
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

// import React from 'react';

// const ContactUs = () => {
//   return (
//     <div className='bg-gray-100 min-h-screen'>

//       <div className='container mx-auto py-16'>
//         <div className='text-center'>
//           <h1 className='text-4xl font-bold text-gray-800 mb-4'>Contact Us</h1>
//           <p className='text-lg text-gray-600 mb-8'>
//             Have questions or suggestions? We'd love to hear from you!
//           </p>
//         </div>

//         <div className='max-w-lg mx-auto bg-white p-8 rounded shadow-md'>
//           <form>
//             <div className='mb-4'>
//               <label
//                 htmlFor='name'
//                 className='block text-gray-700 text-sm font-bold mb-2'
//               >
//                 Your Name
//               </label>
//               <input
//                 type='text'
//                 id='name'
//                 name='name'
//                 className='w-full border rounded p-2 focus:outline-none focus:border-blue-500'
//                 placeholder='Enter your name'
//               />
//             </div>

//             <div className='mb-4'>
//               <label
//                 htmlFor='email'
//                 className='block text-gray-700 text-sm font-bold mb-2'
//               >
//                 Your Email
//               </label>
//               <input
//                 type='email'
//                 id='email'
//                 name='email'
//                 className='w-full border rounded p-2 focus:outline-none focus:border-blue-500'
//                 placeholder='Enter your email'
//               />
//             </div>

//             <div className='mb-4'>
//               <label
//                 htmlFor='message'
//                 className='block text-gray-700 text-sm font-bold mb-2'
//               >
//                 Your Message
//               </label>
//               <textarea
//                 id='message'
//                 name='message'
//                 // rows='4'
//                 className='w-full border rounded p-2 focus:outline-none focus:border-blue-500'
//                 placeholder='Type your message here'
//               ></textarea>
//             </div>

//             <button
//               type='submit'
//               className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue'
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;
