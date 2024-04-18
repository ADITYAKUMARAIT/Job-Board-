import Image from 'next/image'
import React from 'react'

interface props{
  image:string,
  category:string,
  openPosition:string
}
const JobCategoryCard = ({image,category,openPosition}:props) => {
  return (
    <div className='pt-4 border-2 cursor-pointer hover:scale-110 hover:shadow-sm transition-all duration-300 border-gray-500 rounded-lg border-opacity-10 flex gap-6'>
      <div className='flex items-center'>
        <Image className='p-1  mx-2 mb-2' src={`${image}`} alt={category} height={60} width={60}></Image>
      </div>
      <div>
        <h1 className='text-[17px] font-semibold mb-[0.4rem]'>{category}</h1>
        <p className='text-[14px] text-black font-semibold text-opacity-50'>{openPosition} Open Position </p>
      </div>
    </div>
  )
}

export default JobCategoryCard
