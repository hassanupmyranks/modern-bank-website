import React from 'react'
import { feedback } from '../constants'
import { quotes } from '../assets'

const FeedbackCard = ({content,name,title,img}) => {
  return (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card ' >
      <img src={quotes} alt="quotes" className='w-[42px] h-[27px] object-contain' />
      <p className='text-[18px] font-poppins font-normal leading-[32px] text-white my-10 ' >{content}</p>
      <div className='flex-row flex' >
        <img src={img} alt="img" className='w-[50px] h-[50px] rounded-full' />
        
        <div className='flex flex-col ml-4' >
        <h4 className='text-[20px] font-poppins font-semibold leading-[32px] text-white '>{name}</h4>
        <p className='text-[16px] font-poppins font-normal leading-[18px] text-dimWhite  '>{title}</p>

        </div>
      </div>
  
      

    </div>
  )
}

export default FeedbackCard
