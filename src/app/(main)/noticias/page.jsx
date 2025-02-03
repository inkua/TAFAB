import React from 'react'
import CardNoticia from './components/CardNoticia'
const Noticias = () => {
  return (
    <div className='px-[65px] py-[73px]'>
      <h1 className='font-[900] text-[32px] mb-[20px]'>NOTICIAS</h1>
      <div className='flex flex-col w-full h-max gap-[32px] lg:grid lg:grid-cols-3'>
        <CardNoticia href="/infoNoticia" fecha="Julio 14, 2025." />
        <CardNoticia href="/infoNoticia" fecha="Julio 14, 2025." />
        <CardNoticia href="/infoNoticia" fecha="Julio 14, 2025." />
        <CardNoticia href="/infoNoticia" fecha="Julio 14, 2025." />
        <CardNoticia href="/infoNoticia" fecha="Julio 14, 2025." />
        <CardNoticia href="/infoNoticia" fecha="Julio 14, 2025." />
        <CardNoticia href="/infoNoticia" fecha="Julio 14, 2025." />
        <CardNoticia href="/infoNoticia" fecha="Julio 14, 2025." />
        <CardNoticia href="/infoNoticia" fecha="Julio 14, 2025." />
      </div>
    </div>
  )
}

export default Noticias



