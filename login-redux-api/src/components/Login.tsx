import React, { useState } from 'react';
import { loginUser } from '../features/userSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, error } = useAppSelector((state: any) => state.user);

  const dispatch = useAppDispatch();

  const inputClass = 'border border-gray-300 rounded w-64 h-10 p-4 m-1';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let userCredentials = {
      username,
      password
    };

    dispatch(loginUser(userCredentials)).then((result: any) => {
      if (result.payload) {
        setUsername('');
        setPassword('');
      }
    });
  };

  return (
    <div>
      <form className='flex flex-col justify-center items-center min-h-screen' onSubmit={handleSubmit}>
        <h1 className='text-xl font-semibold mb-4'>Login Here </h1>
        <input
          className={inputClass}
          type="text"
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className={inputClass}
          type="password"
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='btn bg-black text-white hover:text-gray-300 w-64 m-2' type='submit'>
          {loading ? 'Loading' : 'Login'}
        </button>
        {error && (
          <div className='bg-red-100 text-red-700 p-2 rounded'>{error}</div>
        )}
      </form>
    </div>
  );
};

export default Login;
