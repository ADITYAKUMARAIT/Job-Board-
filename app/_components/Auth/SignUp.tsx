'use client'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

const SignUp = () => {
  return (
    <div className='overflow-hidden h-[84vh] flex flex-col  items-center justify-center'>
        <Image src='/chair.jpg' alt='image' width={400} height={200}></Image>
        <button onClick={()=>{signIn('google',{callbackUrl:process.env.NEXT_PUBLIC_URL})}} className='px-12 py-3 mt-[2rem] bg-purple-700 hover:bg-purple-900 transition-all duration-300 rounded-lg text-white '>SignUp Now</button>
    </div>

  )
}

export default SignUp;
