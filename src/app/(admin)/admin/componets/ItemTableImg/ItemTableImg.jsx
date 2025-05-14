import Image from 'next/image'

const ItemTableImg = ({ data }) => {
    const imageUrl = data || "https://res.cloudinary.com/daeszwu7k/image/upload/v1746840192/general-1736874938068_tsyw3k.webp"
    return (
        <Image
            src={imageUrl}
            alt="imagen de ítem"
            width={100}
            height={100}
            className="w-auto h-full"
        />
    )
}

export default ItemTableImg
