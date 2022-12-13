import { signIn as signIntoBrowser } from 'next-auth/react';

export default function SignIn({ providers }) {
  return (
    <>
      <div className='justify-center flex flex-col items-center min-h-screen '>
        <div>
          {/* eslint-disable-next-line */}
          <img
            src='https://logos-world.net/wp-content/uploads/2022/05/Google-Docs-Symbol.png'
            className=' w-[400px] h-[400px] object-contain'
          />
        </div>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              onClick={() => signIntoBrowser(provider.id, { callbackUrl: '/' })}
              className='bg-blue-500 p-3 rounded-lg text-white'
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
