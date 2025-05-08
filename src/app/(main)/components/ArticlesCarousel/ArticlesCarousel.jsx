import { getUrlBase } from "@/utils/urlRoute";

import Slider from "../Slider/Slider";

const getData = async () => {
    const urlBase = getUrlBase()
    const url = `${urlBase}/api/news`

    const response = await fetch(url, {
        next: {
            revalidate: 0
        }
    });
    const result = await response.json();
    return result.data.list
}

const ArticlesCarousel = async () => {
    const data = await getData()

    return (
        <section className="my-10 md:my-20">
            <div className="flex flex-row items-center justify-between mb-9">
                <h2 className="title">ÚLTIMOS ARTÍCULOS</h2>
                <div className="bg-tertiary h-1 w-full min-w-[20%] max-w-[55%] ml-4"></div>
            </div>

            <Slider data={data} type="articles" />
        </section>
    )
}

export default ArticlesCarousel
