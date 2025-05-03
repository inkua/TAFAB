import { getUrlBase } from "@/utils/urlRoute"

import Slider from "../../Slider/Slider";

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

            <Slider data={data} type="videos" />
        </section>
    )
}

export default Videos
