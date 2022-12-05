import React from 'react';
import { signIn } from 'next-auth/react';

const Login = () => {
  return (
    <div>
      <div className='justify-center flex flex-col items-center min-h-screen '>
        <div>
          {/* eslint-disable-next-line */}
          <img
            src='https://logos-world.net/wp-content/uploads/2022/05/Google-Docs-Symbol.png'
            className=' w-[400px] h-[400px] object-contain'
          />
        </div>

        <button
          onClick={signIn}
          className='bg-blue-500 px-10 py-2 rounded-lg text-white'
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
