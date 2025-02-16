import Image from 'next/image'

const ResourceImg = ({ title, imgUrl = "/defaultRecurso.webp" }) => {
    return (
        <Image
            src={imgUrl}
            alt={title + "image"}
            className='w-full max-w-[340px] h-auto mb-[30px] md:m-0 aspect-video object-cover object-center md:w-[356px]'
            width={600}
            height={400}
            loading='lazy'
        />
    )
}

export default ResourceImg
