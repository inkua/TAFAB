import SeeBtn from "./SeeBtn"
import SeeLink from "./SeeLink"

const ItemVideo = ({data}) => {
    let imageSrc = '/defaultVideo.webp'
    if(data.imgUrl){
        imageSrc = data.imgUrl
    }

    return (
        <div className="w-full min-w-[288px] max-w-[364px]" role="listitem">
            <div className="w-full aspect-video grid place-items-center bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${imageSrc})` }}
            >
            </div>
            <span className="text-right block text-xs mt-4">{data.date}.</span>
            <h3 className="uppercase text-lg mt-1">{data.title}</h3>
            <p className="text-xs leading-5 h-auto max-h-[70px] overflow-y-scroll">{data.description}</p>

            {data.type=="Privado"? <SeeBtn /> : <SeeLink link={data.videoUrl}/>}
        </div>
    )
}

export default ItemVideo
