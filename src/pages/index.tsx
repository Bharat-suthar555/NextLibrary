// pages/index.js

import React from 'react';

const Home = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      {/* Your NavBar Component Goes Here */}
      {/* <NavBar /> */}

      <div className='container mx-auto py-16'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-gray-800 mb-4'>
            Welcome to Your Library Management System
          </h1>
          <p className='text-lg text-gray-600 mb-8'>
            Explore our collection and manage your library with ease.
          </p>
        </div>

        {/* Explore More Section */}
        <section>
          <div className='flex items-center justify-center space-x-4'>
            <button className='bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue'>
              View All Books
            </button>
            <button className='bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray'>
              My Borrowings
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;

// pages/index.js

// import React from 'react';

// const Home = () => {
//   return (
//     <div className='bg-gray-100 min-h-screen'>
//       <div className='container mx-auto py-16'>
//         <div className='text-center'>
//           <h1 className='text-4xl font-bold text-gray-800 mb-4'>
//             Welcome to Your Library Management System
//           </h1>
//           <p className='text-lg text-gray-600'>
//             Explore our collection and manage your library with ease.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// ------------------------------------------------------------------

// export default function Home() {
//   return (
//     <>
//       {/* <NavBar /> */}
//       {/* <BookShow /> */}
//       {/* <BookCreation/> */}
//       <h1>Hello This Is My Library Home Page</h1>
//     </>
//   );
// }

// import React, { useState } from 'react';
// import Login from './Login';

// const Home: React.FC = () => {
//   const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

//   const handleLoginButtonClick = () => {
//     setIsLoginModalOpen(true);
//     console.log("first")
//   };

//   const handleCloseLoginModal = () => {
//     setIsLoginModalOpen(false);
//   };

//   return (
//     <div>
//       <h1>Welcome to the Home Page!</h1>
//       <button onClick={handleLoginButtonClick}>Open Login</button>

//       {isLoginModalOpen && <Login onClose={handleCloseLoginModal} />}
//     </div>
//   );
// };

// export default Home;
