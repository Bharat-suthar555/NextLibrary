import { useGetBookByIdQuery, useLoginMutation } from '@/generated/graphql';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import * as Yup from 'yup';

type LoginProps = {
  onClose: () => void;
  onLoginSuccess: () => void;
};

const Login: React.FC<LoginProps> = ({ onClose, onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const [] = useGetBookByIdQuery({
  //   variables: {
  //     email : ''
  //     password : ''
  //   }
  // })

  const loginSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().trim().required('Password is required'),
  });
  const [loginDataSchema, { data: loginData }] = useLoginMutation();

  // const handleLogin = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   try {
  //     await loginSchema.validate({ username, password }, { abortEarly: false });

  //     onClose();
  //     onLoginSuccess();
  //   } catch (error) {
  //     if (error instanceof Yup.ValidationError) {
  //       // Handle validation errors
  //       console.error('Validation error:', error.errors);
  //     }
  //   }
  // };

  const userrouter = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = await loginDataSchema({
      variables: {
        email: username,
        password: password,
      },
    });
    if (!data) {
      console.log('error');
    } else {
      const roleString: string = data?.data?.login?.Role.toString();
      localStorage.setItem('Role', roleString);

      sessionStorage.setItem('Role', roleString);

      // Store other user data in sessionStorage if needed
      // sessionStorage.setItem('UserId', data?.data?.login.user_id.toString());
      // sessionStorage.setItem('Username', data?.data?.login?.fname);

      sessionStorage.setItem('Role', roleString);
      userrouter.push('/Showbook');
      console.log('login', data?.data?.login);
    }
    // onClose();
    // onLoginSuccess();
  };

  return (
    <div className='fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-gray-800 bg-opacity-75'>
      <div
        className='bg-white p-8 rounded shadow-md w-96'
        onClick={(e) => e.stopPropagation()} // Prevent click inside the popup from closing it
      >
        <h2 className='text-3xl font-bold mb-4 text-center text-blue-500'>
          Login Here
        </h2>
        <form onSubmit={handleLogin}>
          <div className='mb-4'>
            <label
              htmlFor='username'
              className='block text-gray-700 text-sm font-bold mb-2'
            >
              Username
            </label>
            <input
              type='text'
              id='username'
              name='username'
              className='w-full border rounded p-2 focus:outline-none focus:border-blue-500'
              placeholder='Enter your username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='password'
              className='block text-gray-700 text-sm font-bold mb-2'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              className='w-full border rounded p-2 focus:outline-none focus:border-blue-500'
              placeholder='Enter your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type='submit'
            className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
