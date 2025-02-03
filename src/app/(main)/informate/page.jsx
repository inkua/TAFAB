import React from 'react'
import News_card from './components/news_card'

function Informate() {
    return (
        <main className='flex flex-col px-[24px] pt-[64px] pb-[70px] gap-[30px] lg:px-[150px]'>
            <h1 className='font-[900] text-[25px]'>INFORMACIÓN DEL MOVIMIENTO TRANS</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut numquam excepturi dolorum sequi placeat. Sequi minima officia nam? Voluptas optio consequuntur quasi et, est aut beatae adipisci temporibus eligendi velit.</p>
            <News_card href="/infoNoticia" img="/second_news.svg" date="Julio 11, 2025"/>
            <News_card href="/infoNoticia" img="/first_news.svg" date="Julio 11, 2025"/>
            <News_card href="/infoNoticia" img="/third_news.svg" date="Julio 11, 2025"/>
            <News_card href="/infoNoticia" img="/fourth_news.svg" date="Julio 11, 2025"/>
        </main>
    )
}

export default Informate
