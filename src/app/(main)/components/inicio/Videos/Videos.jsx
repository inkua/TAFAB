
import { getUrlBase } from "@/utils/urlRoute"
import ItemVideo from "./components/ItemVideo";

const getData = async () => {
    const urlBase = getUrlBase()
    const url = `${urlBase}/api/videos`

    const response = await fetch(url, {
        next: {
            revalidate: 3600
        }
    });
    const result = await response.json();
    return result.data.list
}

const Videos = async () => {
    const data = await getData()

    return (
        <section className="">
            <div className=" flex flex-row items-center justify-between mb-9">
                <h2 className="title">ÚLTIMOS VIDEOS</h2>
                <div className="bg-tertiary h-1 w-full min-w-[20%] max-w-[55%] ml-4"></div>
            </div>

            <div className="flex flex-row gap-4 lg:gap-14 md:px-4 overflow-x-scroll cursor-grab active:cursor-grabbing select-none scroll-container"
                id="videosScroll"
                role="list"
            >

                {data?.map(item => <ItemVideo key={item.id} data={item} />)}

            </div>

            {/* Carga el script en el cliente para el scroll del contenido*/}
            <script defer src="/js/videosScroll.js"></script>

        </section>
    )
}

export default Videos
