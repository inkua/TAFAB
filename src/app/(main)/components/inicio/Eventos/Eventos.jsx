
import ItemEvent from "./components/ItemEvent"
import { getUrlBase } from "@/utils/urlRoute"

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
            <h2 className="title">PRÓXIMOS EVENTOS</h2>
            <div 
            className="overflow-x-scroll px-6 mt-10 flex flex-row gap-4 md:gap-6 cursor-grab active:cursor-grabbing select-none scroll-container" 
            role="list"
            id="eventsScroll"
            >
                {data?.map(item => <ItemEvent key={item.id} data={item} />)}

            </div>
            {/* Carga el script en el cliente para el scroll del contenido*/}
            <script defer src="/js/eventsScroll.js"></script>
        </section>
    )
}

export default Eventos
