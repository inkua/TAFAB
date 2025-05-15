import { getUrlBase } from "@/utils/urlRoute"

import Slider from "../../Slider/Slider"

const getData = async () => {
    const urlBase = getUrlBase()
    const url = `${urlBase}/api/events`

    const response = await fetch(url, {
        next: {
            revalidate: 3600
        }
    });
    const result = await response.json();
    return result.data
}

const Eventos = async () => {
    const data = await getData()

    return (
        <section className="">
            <h2 className="title mb-4">EVENTOS</h2>
            <Slider data={data} type="events"/>
        </section>
    )
}

export default Eventos
