import React from 'react'
import { FaInstagram, FaTwitter } from 'react-icons/fa'
import { FaFacebook, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='pt-[rem] pb-[3rem] bg-[#111111]'>
       <div className='w-[80%]  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2rem] items-start pb-[2rem] border-b-2 border-white border-opacity-10 '>
        <div>
          <h1 className='text-[24px] text-white mb-[1rem] font-bold uppercase'>Jobify</h1>
          <p  className='text-[14px] text-white text-opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit ,nikhil conquer vlndititis incident impedit quqm molesriae</p>
          <div className='mt-[1.5rem] flex items-center  space-x-3 '>
            <div className='w-[2.4rem] h-[2.4rem] bg-blue-600 rounded-full flex items-center justify-center flex-col'>
              <FaFacebook className='text-white'/>
            </div>
            <div className='w-[2.4rem] h-[2.4rem] bg-red-600 rounded-full flex items-center justify-center flex-col'>
              <FaYoutube className='text-white'/>
            </div>
            <div className='w-[2.4rem] h-[2.4rem] bg-sky-400 rounded-full flex items-center justify-center flex-col'>
              <FaTwitter className='text-white'/>
            </div>
            <div className='w-[2.4rem] h-[2.4rem] bg-red-400 rounded-full flex items-center justify-center flex-col'>
              <FaInstagram className='text-white'/>
            </div>
          </div>
        </div>
        <div>
            <h1 className='text-[22px] w-fit text-white font-semibold mb-[1.5rem] '>About us </h1>
            <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]'>Privacy </p>
            <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]'>Policy</p>
            <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]'>Application  </p>
            <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]'>Candidates </p>
        </div>
        <div>
            <h1 className='text-[22px] w-fit text-white font-semibold mb-[1.5rem] '>Quick Links   </h1>
            <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]'>All Jobs  </p>
            <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]'>Job  Details</p>
            <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]'>How to Apply   </p>
            <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]'>Resume </p>
        </div>
        <div>
            <h1 className='text-[22px] w-fit text-white font-semibold mb-[1.5rem] '>Get IN Touch   </h1>
            <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.2rem]'>+9815712249 </p>
            <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.2rem]'>adityakumar9815712240@gmai.com</p>
            <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.2rem]'>Aditya kumar   </p>
            <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.2rem]'>Pune ,Maharashtra</p>
        </div>
        </div> 
    </div>
  )
}

export default Footer
