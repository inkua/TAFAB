import Link from "next/link"

const ItemArticle = ({ data }) => {
    let imageSrc = '/defaultVideo.webp'
    if (data.imgUrl) {
        imageSrc = data.imgUrl
    }
    return (
        <div className="w-[288px] md:w-[364px]" role="listitem">
            <div className="w-full aspect-video grid place-items-center bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${imageSrc})` }}
            >
            </div>
            <span className="text-right block text-xs mt-4">{data.date}.</span>
            <h3 className="uppercase text-lg mt-1">{data.title}</h3>
            <p className="text-xs leading-5 h-auto max-h-[80px] overflow-y-scroll">{data.copy}</p>

            <Link
                className="font-bold underline mt-4 text-sm hover:text-btn-purple"
                href={`/articulos/${data.id}` || ""}
                target="_blank"
                rel="noopener noreferrer">
                Leer artículo
            </Link>
        </div>
    )
}

export default ItemArticle
