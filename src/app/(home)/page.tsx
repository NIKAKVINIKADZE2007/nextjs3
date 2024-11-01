'use client';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <Link
          href='/login'
          className='px-4 py-2 bg-blue-500 text-white rounded'
        >
          Login page
        </Link>
        <Link
          href='/register'
          className='px-4 py-2 bg-blue-500 text-white rounded'
        >
          Register
        </Link>
        <Link
          href='/forget-password'
          className='px-4 py-2 bg-blue-500 text-white rounded'
        >
          forget-password
        </Link>
      </div>
    </div>
  );
};

export default Home;
