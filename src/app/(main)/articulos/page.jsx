
import CardNoticia from './components/CardNoticia'
import Pagination from '../components/Pagination/Pagination'
import { getUrlBase } from '@/utils/urlRoute'

const getData = async (page) => {
    const urlBase = getUrlBase()
    const URL = (page ? `${urlBase}/api/news?page=${page}` : `${urlBase}/api/news`)
    const response = await fetch(URL,
        {
            next: {
                revalidate: 3600
            }
        });
    const result = await response.json();
    return result.data
}

const Articulos = async ({ searchParams }) => {
    const { page } = searchParams
    const data = await getData(page)
    return (
        <main className='px-mobile md:px-tablet w-full xl:max-w-top min-[1500px]:px-0 lg:mx-auto *:mb-[45px] lg:*:mb-[70px]]'>
            <h1 className='title mb-[20px]'>Artículos</h1>

            <section>
                <div className='flex flex-col w-full h-max gap-[32px] lg:grid lg:grid-cols-3'>
                    {data?.list?.length == 0 ?
                        <h2>Quedate atento a nuestros próximos artículos.</h2>
                        :
                        (
                            data.list.map(item => <CardNoticia key={item.id} data={item} />)
                        )
                    }
                </div>

                <Pagination data={data} />
            </section>
        </main>
    )
}

export default Articulos



