import { authOption } from '@/auth'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react' 
import User from '../Helper/User'
const Navbar = async() => {
  const session =await getServerSession(authOption);
  return (
    <div className='h-[13vh] overflow-hidden shadow-md bg-purple-200'>
      <div className='w-[90%] md:w-[80%] h-[100%] mx-auto flex items-center justify-between'>
        <div className='flex flex-row'>
        <div>
        <Link href='/'><Image src="/AIT_Pune_logo.gif" width={80} height={250} alt='logo' className='w[100%] h-[100%]'></Image></Link>
        </div>
        <div className='mt-6 mx-4'><h2>Welcome to the Ait Placement</h2></div>
        </div>
        <div className='flex items-center space-x-4'>
          {!session && (<Link href='/signup'>
            <button className='px-4 py-1.5 text-[14px] sm:text-[16px] sm:px-6 sm:py-2 bg-blue-600 font-semibold text-white rounded-lg hover:bg-blue-800 transition-all duration-300'>
              Sign up/Login 
            </button>
          </Link>)}
          {session && <User session={session}/>}
          {session && (<button className=' mt-3 px-4 py-2 text-[14px] sm:text-[16px] sm:px-6 sm:py-2 bg-orange-600 font-semibold text-white rounded-lg hover:bg-blue-800 transition-all duration-300'>
            Post a Job
          </button>) }
        </div>
      </div>
    </div>
  )
}

export default Navbar
