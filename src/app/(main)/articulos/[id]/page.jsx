import { getNewById } from "@/DAO/news.db";
import Noticias from "../../components/inicio/Noticias/Noticias";
import ArticleDetail from "../components/ArticleDetail";


const Article = async ({ params }) => {
    const { id } = params;
    const {data} = await getNewById(id)
    return (
        <main className="px-mobile md:px-tablet w-full xl:max-w-top min-[1500px]:px-0 lg:mx-auto">
            {!data?

            <section className="mb-10">
                <h1 className="title mb-4">Trans AFAB Venezuela</h1>
                <p className="leading-8 text-sm md:text-base lg:text-xl font-light">
                    No se pudo encontar el articulo con el código: <strong>{id}</strong>. Puede ser que ya haya sido eliminado.
                </p>
                <p className="leading-8 text-sm md:text-base lg:text-xl font-light">
                    Te invitamos a contactarte con nuestro equipo en las redes sociales para mayor información
                </p>
            </section>    
            :
            <ArticleDetail data={data}/>
        }

        <Noticias />

        </main>
    )
}

export default Article
