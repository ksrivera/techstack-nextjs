'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const NotFound = () => {
  const router = useRouter();

  return (
    <div className='relative'>
       <Image
        className='mt-20'
        src="/assets/images/404.png"
        width={6912}
        height={3456}
        alt="404 Error"
      />
      <a href="/" className='absolute text-xl bg-cyan-500 rounded-full p-4 text-white bottom-10 left-1/2 -translate-x-1/2'>Go Back to Home</a>
    </div>
  );
}

export default NotFound;