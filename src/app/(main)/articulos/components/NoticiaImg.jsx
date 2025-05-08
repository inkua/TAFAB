import Image from "next/image"

const NoticiaImg = ({ imgUrl, title }) => {
    const imgSrc = imgUrl || "/defaultVideo.webp"
    return (
        <Image
            className='w-full h-auto mb-[30px] aspect-video object-cover object-center'
            src={imgSrc}
            width={500}
            height={400}
            loading="lazy"
            alt={title + " image"} />
    )
}

export default NoticiaImg
