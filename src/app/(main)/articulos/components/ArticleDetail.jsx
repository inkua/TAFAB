import Image from "next/image"

const ArticleDetail = ({ data }) => {
    return (
        <section>
            <div className="mx-auto" role="banner">
                <figure className="relative w-full aspect-video max-h-[320px] lg:max-h-[370px]">
                    <Image
                        className="object-cover object-center mb-[11px]"
                        src={data.imgUrl}
                        fill
                        alt="Imagen de historia"
                        sizes="100%"
                    />
                </figure>
                <span className="italic text-[11px] md:text-[20px] block text-right">
                    {data.title + (data.date ? ", " + data.date : "")}
                </span>
            </div>

            <article
                id="blogArticle"
                className='w-full mt-8 mb-10'
                dangerouslySetInnerHTML={{ __html: data.article }}
            >

            </article>
        </section>
    )
}

export default ArticleDetail
