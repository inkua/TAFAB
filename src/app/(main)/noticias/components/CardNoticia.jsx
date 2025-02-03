import React from 'react'

const CardNoticia = ({fecha, img, href}) => {
  return (
    <div className='bg-[#F4F4F4] px-[21px] py-[31px]'>
      <img className='w-full h-auto mb-[30px]' srcSet={img} alt="" />
      <p className='font-[500] text-[16px]'>{fecha}</p>
      <h2 className='text-[17px] font-[800] mb-[10px]'>LOREM IPSUM DOLOR SIT AMET.</h2>
      <p className='font-[400] text-[16px] mb-[10px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos provident consectetur laborum nostrum illo officiis assumenda, optio maiores facilis aut accusantium eaque? Consectetur illum odit esse odio? Tempora, rem pariatur?</p>
      <a href={href} className='underline font-[700] text-[15px]'>Leer más</a>
    </div>
  )
}

export default CardNoticia
