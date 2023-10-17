// // components/NavBar.js
// import React from 'react';
// import Link from 'next/link';

// const NavBar = () => {
//   return (
//     <nav className='bg-gray-800 p-4 text-white'>
//       <div className='container mx-auto flex justify-between items-center'>
//         <div className='text-xl font-bold'>
//           <Link href='/'>Library System</Link>
//         </div>
//         <div className='flex items-center space-x-8'>
//           <div className='text-white hover:text-gray-300 cursor-pointer transition duration-300'>
//             <Link href='/showBorrowing'>Show Borrowing</Link>
//           </div>
//           <div className='text-white hover:text-gray-300 cursor-pointer transition duration-300'>
//             <Link href='/Showbook'>Show Books</Link>
//           </div>
//           <div className='text-white hover:text-gray-300 cursor-pointer transition duration-300'>
//             Borrowing
//           </div>
//           <div className='bg-blue-500 text-white hover:bg-blue-700 cursor-pointer transition duration-300 px-4 py-2 rounded-full'>
//             <Link href=''>Login</Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

// components/NavBar.js

import React, { useState } from 'react';
import Link from 'next/link';
import LoginPage from './login';

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleLoginButtonClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };        

  return (
    <>
      <nav className='bg-gray-800 p-4 text-white'>
        <div className='container mx-auto flex justify-between items-center'>
          <div className='text-xl font-bold'>
            <Link href='/'>Library Management System</Link>
          </div>
          <div className='flex items-center space-x-8'>
            <div className='text-white hover:text-gray-300 cursor-pointer transition duration-300'>
              <Link href='/'>Home</Link>
            </div>
            <div className='text-white hover:text-gray-300 cursor-pointer transition duration-300'>
              <Link href='/Showbook'>Show Books</Link>
            </div>
            <div className='text-white hover:text-gray-300 cursor-pointer transition duration-300'>
              <Link href='/ShowUser'>User's</Link>
            </div>
            <div className='text-white hover:text-gray-300 cursor-pointer transition duration-300'>
              <Link href='/showBorrowing'>Show Borrowing</Link>
            </div>
            <div className='text-white hover:text-gray-300 cursor-pointer transition duration-300'>
              <Link href='/ContactUs'>Contact Us</Link>
            </div>
            <div className='bg-blue-500 text-white hover:bg-blue-700 cursor-pointer transition duration-300 px-4 py-2 rounded-full'>
              <Link href='/Login'>Login</Link>
            </div>
            {/* {isLoggedIn ? (
              <div
                className='text-white hover:text-gray-300 cursor-pointer transition duration-300'
                onClick={handleLogout}
              >
                Logout
              </div>
            ) : (
              <button
                className='bg-blue-500 text-white hover:bg-blue-700 cursor-pointer transition duration-300 px-4 py-2 rounded-full'
                onClick={() => {
                  console.log('clicked');
                  handleLoginButtonClick();
                }}
              >
                Login
              </button>
            )} */}
          </div>
        </div>
      </nav>
      {/* <button onClick={handleLoginButtonClick}>Open Login</button> */}

      {isLoginModalOpen && (
        <LoginPage
          onClose={handleCloseLoginModal}
          onLoginSuccess={handleCloseLoginModal}
        />
      )}
    </>
  );
};

export default NavBar;
