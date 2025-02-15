import ResourceImg from "./ResourceImg"

const ResourceItem = ({ data }) => {
    const { date, title, description, resourceUrl, imgUrl } = data
    return (
        <article
            className='bg-[#F4F4F4] p-[19px] mb-7 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex flex-col items-center lg:flex-row lg:items-start lg:justify-start xl:gap-4'
            role="listitem"
        >
            <ResourceImg title={title} imgUrl={imgUrl} />
            <div className='lg:pl-[20px] w-full lg:w-auto'>
                <span className='font-normal text-4'>{date}</span>
                <h2 className='text-lg font-extrabold uppercase mb-[10px]'>{title}</h2>
                <p className='font-normal text-4 mb-[10px]'>{description}</p>
                <a href={resourceUrl} target="_blank" rel="noopener noreferrer" className='underline font-bold text-sm text-btn-purple hover:text-btn-pink'>Recurso</a>
            </div>
        </article>
    )
}

export default ResourceItem
