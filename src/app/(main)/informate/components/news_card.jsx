import React from 'react'

const news_card = ({img, date, href}) => {
  return (
    <div className='bg-[#F4F4F4] w-full h-max pl-[24px] pr-[19px] py-[31px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] lg:flex lg:flex-row lg:items-start'>
    <img srcSet={img} alt="" className='w-full mb-[30px] lg:w-[40%] lg:mb-0'/>
    <div className='lg:pl-[20px]'>
      <p className='font-[500] text-[16px] leading-[25px]'>{date}</p>
      <p className='text-[17px] font-[800] leading-[40px]'>LOREM IPSUM DOLOR SIT AMET</p>
      <p className='leading-[25px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      <a href={href} className='text-[15px] font-[700] underline leading-[25px]'>Leer más</a>
    </div>
  </div>
  
  )
}

export default news_card
