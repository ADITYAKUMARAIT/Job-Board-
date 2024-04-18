'use client'

import { Session } from 'next-auth'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

interface props{
    session:Session
}
const User = ({session}:props  ) => {
  return (
    <div className='cursor-pointer flex flex-row gap-3'>
        <div>
        <img src={`${session.user?.image}`} alt='user' height={40} width={50} className='rounded-full'></img>
        </div>
        <div className='mt-2 text -[14px] sm:text-[16px] sm:px-6 sm:py-2 bg-blue-600 font-semibold text-white rounded-lg hover:bg-blue-800 transition-all duration-300'>
            <button onClick={()=>{signOut({callbackUrl:`${process.env.NEXT_PUBLIC_URL}`})}} >SignOut</button>
        </div>
    </div>
  )
}

export default User
