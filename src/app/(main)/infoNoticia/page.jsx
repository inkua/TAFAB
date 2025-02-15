import CardNoticia from '../articulos/components/CardNoticia'

const infoNoticia = () => {
    return (
        <div className='px-[78px] pt-[47px] pb-[80px]'>
            <h1 className='font-[900] text-[25px] text-start text-[#4A3D5B] mb-[45px]'>NOTICIAS</h1>
            <div className='w-10/12 mx-auto'>
                <img srcSet="/main_noticias.svg" alt="" className='w-full h-auto' />
                <p className='font-[500] text-[13px] text-end mt-[19px] mb-[30px]'>Escrito por Alguien de TRANSAFAB _ 25/12/2024</p>
                <h2 className='text-[33px] font-[600] mb-[20px]'>TITULO DE LA NOTICIA</h2>
                <p className='font-[500] text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod .</p>
                <blockquote class="border-l-4 border-[#AD7DB6] pl-4 italic mt-[24px] mb-[96px] text-[#AD7DB6] font-[700] text-[18px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                    <span class="font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</span>
                </blockquote>
                <h2 className='font-[900] text-[25px] mb-[41px] text-[#4A3D5B]'>VER OTRAS NOTICIAS</h2>
                <div className='flex flex-col lg:flex-row gap-[37px]'>
                    <CardNoticia className="flex-1" img="/first_news.svg" href="/infoNoticia" fecha="Julio 14, 2025." />
                    <CardNoticia className="flex-1 hidden lg:block" img="/second_news.svg" href="/infoNoticia" fecha="Julio 14, 2025." />
                    <CardNoticia className="flex-1 hidden lg:block" img="/third_news.svg" href="/infoNoticia" fecha="Julio 14, 2025." />
                </div>
            </div>
        </div>
    )
}

export default infoNoticia
