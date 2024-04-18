import React from 'react'
import Heading from '../Helper/Heading'
import JobData from '@/public/data'
import Link from 'next/link'
import JobCard from '../Helper/JobCard'

const FeaturedJobs = () => {
  return (
    <div className='pt-20 pb-12'>
        <Heading mainheading='Featured Jobs' subheading='Know your worth and find the job that qualify your life '/>
        <div className='mt-12 w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {JobData.map((job)=>{
                 return (<Link href={`/job/details/${job.title}`} key={job.id}>
                    <JobCard job={job}/>
                 </Link>
            );
            })}
        </div>

        <Link href='/jobs/alljobs'>
            <div className='text-center my-[3rem]'>
                <button className='px-8 py-3 font-semibold text-white bg-blue-600 transition-all duration-300 hover:bg-blue-900 rounded-lg '>View All Jobs</button>
            </div>
        </Link>
    </div>
  )
}

export default FeaturedJobs
