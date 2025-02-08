import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row md:items-center justify-center gap-[40px] w-full h-auto pt-[41px] pb-[67px] px-[27px] bg-footer-primary'>
      <h3 className='font-bold text-white text-[24px]'>CONÉCTATE CON NOSOTROS <br /> EN LAS REDES SOCIALES</h3>
      <div className='flex w-[198px] my-[64px] mx-auto gap-[24px] h-[50px]'>
      <button href="/" className='flex justify-center w-[50px] h-[50px] rounded-full items-center px-auto border-white border-[3px]'><img src="./whatsapp_logo.svg" alt="" srcSet="" /></button>
      <button href="/" className='flex justify-center w-[50px] h-[50px] rounded-full items-center px-auto border-white border-[3px]'><img src="./x_logo.svg" alt="" srcSet="" /></button>
      <button href="/" className='flex justify-center w-[50px] h-[50px] rounded-full items-center px-auto border-white border-[3px]'><img src="./instagram_logo.svg" alt="" srcSet="" /></button>
      </div>
      <div>
        <p className='text-white text-[20px] font-[600]'>¿Te sentiste en peligro? ¿Necesitas ayuda?</p>
        <p className='text-white text-[20px] font-[600]'>Contactate con nosotros por aquí XXXX-XXXX</p>
      </div>
    </div>
  )
}

export default Footer
