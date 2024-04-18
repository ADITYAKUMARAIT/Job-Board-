"use client"
import { job } from '@/public/data'
import Image from 'next/image'
import React from 'react'
import { BiMoney } from 'react-icons/bi'
import { FaMapLocation } from 'react-icons/fa6'
interface props {
    job: job
}
const JobCard = ({ job }: props) => {
    return (
        <div className='p-4 mb-6 relative border-2 cursor-pointer hover:scale-110 hover:shadow-sm  transition-all duration-300 border-gray-500 rounded-lg border-opacity-10 '>
            <div className='flex items-center space-x-6'>
                <div >
                    <div className='flex space-x-4'>
                        <Image src={job?.image} alt={job.title} height={30} width={60} className='py-[1.5rem]'></Image>
                        <div>
                            <h1 className=' text-[17px] font-semibold mb-[0.4rem] mx-4 '>{job.title}</h1>
                            <div className='flex item-centre md:spcae-x-10 space-x-4 '>
                                <div className='flex item-centre space-x-2'>
                                    <FaMapLocation className='w-[1.2rem] h-[1.4rem] text-pink-700' />
                                    <p className='text-[14px] text-black font-semibold '> {job?.location}</p>
                                </div>
                                <div className='flex item-centre space-x-2 pl-[2rem] '>
                                    <BiMoney className='w-[1.2rem] h-[1.4rem] text-pink-700 ' />
                                    <p className='text-[14px] text-black font-semibold'> {job?.salary}</p>
                                </div>
                            </div>
                            <div className='flex item-center space-x-2  sm:space-x-4 mt-[1rem]'>
                                <div className='text-[10x] sm:text-[14px] text-black text-opacity-80 px-3 sm:px-6 py-1 rounded-full bg-opacity-30 font-semibold capitalize bg-green-400 hover:bg-green-500 transition-all duration-300'>
                                    {job?.jobtype}
                                </div>
                                <div className='text-[10x] sm:text-[14px] text-black text-opacity-80 px-3 sm:px-6 py-1 rounded-full bg-opacity-30 font-semibold capitalize bg-red-400 hover:bg-red-500 transition-all duration-300'>
                                    Private
                                </div>
                                <div className='text-[10x] sm:text-[14px] text-black text-opacity-80 px-3 sm:px-6 py-1 rounded-full bg-opacity-30 font-semibold capitalize bg-blue-400 hover:bg-blue-500 transition-all duration-300'>
                                    Urgent
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default JobCard
