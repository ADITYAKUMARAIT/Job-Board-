import React from 'react'
import Heading from '../Helper/Heading'
import JobCategoryCard from '../Helper/JobCategoryCard'
const JobCategoty = () => {
  return (
    <div className='pt-20 pb-12'>
        <Heading  mainheading=" Popular Job Category" subheading=" 84 jobs live - 12 added today "/>
        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[4rem] gap-[3rem] items-center'>
            <JobCategoryCard image='/icon1.png' category='Finance' openPosition="23"/>
            <JobCategoryCard image='/icon2.png' category='Marketing' openPosition="13"/>
            <JobCategoryCard image='/icon3.png' category='Design' openPosition="34"/>
            <JobCategoryCard image='/icon4.png' category='Developmet' openPosition="3"/>
            <JobCategoryCard image='/icon5.png' category='Human Resourse' openPosition="53"/>
            <JobCategoryCard image='/icon6.png' category='Automotive Jobs' openPosition="27"/>
            <JobCategoryCard image='/icon7.png' category='Customer Services' openPosition="87"/>
            <JobCategoryCard image='/icon8.png' category='Health And Care ' openPosition="38"/>
            <JobCategoryCard image='/icon9.png' category='Project Management ' openPosition="63"/>
        </div>
    </div>
  )
}

export default JobCategoty
