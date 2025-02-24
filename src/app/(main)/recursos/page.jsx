import ResourcesList from "./components/ResourcesList"
import Pagination from "../components/Pagination/Pagination"
import { getUrlBase } from "@/utils/urlRoute"

const getData = async (page) => {
    const urlBase = getUrlBase()
    const URL = (`${urlBase}/api/resources${page ? (`?page=${page}`) : ("")}`)
    const response = await fetch(URL,
        {
            next: {
                revalidate: 3600
            }
        });
    const result = await response.json();
    return result.data
}

async function Recursos({ searchParams }) {
    const { page } = searchParams
    const data = await getData(page)

    return (
        <main className='px-mobile md:px-tablet w-full xl:max-w-top min-[1500px]:px-0 lg:mx-auto'>
            <h1 className='title mb-4'>RECURSOS DE LA COMUNIDAD</h1>
            <p className="mb-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut numquam excepturi dolorum sequi placeat. Sequi minima officia nam? Voluptas optio consequuntur quasi et, est aut beatae adipisci temporibus eligendi velit.</p>
            
            <ResourcesList data={data.list} />

            <Pagination data={data}/>
        </main>
    )
}

export default Recursos
