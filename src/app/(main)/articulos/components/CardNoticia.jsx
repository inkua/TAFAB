import Link from "next/link"
import NoticiaImg from "./NoticiaImg"

const CardNoticia = ({ data }) => {
    const { imgUrl, date, title, copy, id } = data

    return (
        <div className='bg-[#F4F4F4] px-[19px] py-[30px]'>
            <NoticiaImg imgUrl={imgUrl} title={title} />

            <p className='font-normal text-4 '>{date}</p>
            <h2 className='text-lg font-extrabold uppercase mb-[10px]'>{title}</h2>
            <p className='font-normal text-4 mb-[10px]'>{copy}</p>

            <Link
                href={`/articulos/${id}`}
                className='underline font-bold text-sm'
            >Leer más</Link>
        </div>
    )
}

export default CardNoticia
