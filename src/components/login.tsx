import { useLoginMutation } from '@/generated/graphql';
import React, { useState } from 'react';

type LoginProps = {
  onClose: () => void;
  onLoginSuccess: () => void; // Add a callback for successful login
};

const LoginPage: React.FC<LoginProps> = ({ onClose, onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loginSchema, { data: loginData }] = useLoginMutation();
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = await loginSchema({
      variables: {
        email: username,
        password: password,
      },
    });
    if (!data) {
      console.log('error');
    } else {
      console.log('login', data?.data?.login);
    }
    onClose();
    onLoginSuccess();
  };

  return (
    <div className='fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-gray-800 bg-opacity-75'>
      <div className='bg-white p-8 rounded shadow-md w-96'>
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

export default LoginPage;
