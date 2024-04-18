import React from 'react'

interface props{
    mainheading:String,
    subheading:string
}

const Heading = ({mainheading,subheading}:props) => {
  return (
    <div className='text-center'>
        <h1 className='text-black text-[27px] text-opacity-90 font-bold'>{mainheading}</h1>
        <p className='mt-[1rem] text-[15px] text-gray-800 text-opacity-80 font-medium'>{subheading}</p>

    </div>
  )
}

export default Heading
