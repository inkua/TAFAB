import Link from "next/link"

export const metadata = {
    title: "Educación y Sensibilización | TAFAB",
    description: "Esta área de acción incluye proyectos y actividades enfocadas en educar y visibilizar sobre la historia de vida y experiencias de las personas trans en Venezuela",
}

function page() {
    return (
        <main className='px-mobile md:px-tablet w-full xl:max-w-top min-[1500px]:px-0 lg:mx-auto *:mb-[45px] lg:*:mb-[70px]'>
            <section className="w-full flex flex-col md:flex-row md:items-center">
                <div className="flex-1">
                    <h1 className="title mb-4">Educación y sensibilización</h1>
                    <p className="mb-6 font-light leading-8 text-base md:text-lg lg:text-xl">Esta área de acción incluye proyectos y actividades enfocadas en educar y visibilizar sobre la historia de vida y experiencias de las personas trans en Venezuela</p>
                </div>

                <img
                    className="flex-1 w-full max-h-[300px] aspect-video object-contain md:pl-8"
                    src="/proyectos/incidencia.webp"
                    alt="asistencia sanitaria" 
                />
            </section>
            <section>
                <div className="flex flex-row items-center justify-between mb-9">
                    <h2 className="title">Metodologías de Educación y Sensibilización</h2>
                    <div className="bg-tertiary h-1 w-full min-w-[20%] max-w-[55%] ml-4"></div>
                </div>
                <ul className="text-primary text-base md:text-lg font-normal italic pl-4 border-l-8 border-l-primary border-l-solid leading-7 mb-4 md:mb-7">
                    <li className="mb-5"> <strong className="not-italic text-black text-lg lg:text-xl">Talleres, diálogos y conversatorios:</strong> En esta área se realizan actividades de sensibilización sobre identidad trans y temas de interés para la población que atiende la colectiva.</li>
                    <li className="mb-5"> <strong className="not-italic text-black text-lg lg:text-xl">Ferias de sensibilización:</strong> Son actividades enfocadas en brindar formación inicial en activismo, acompañamiento y multiplicación, educación Sexual Integral (Uso correcto del condón, prevención de Enfermedades de Transmisión Sexual, PrEp y PEP), seguridad básica en vía pública, entre otros temas de interés por la comunidad trans.</li>
                    <li className="mb-5"> <strong className="not-italic text-black text-lg lg:text-xl">Podcast Voces Trans:</strong> Es un proyecto dirigido por Jonah Sira, producido por TAFAB en colaboración la organización Humano Derecho; es un programa conversacional e informativo en donde, a través de entrevistas, historias personales y discusiones sobre temas relevantes para la comunidad transgénero, brinda un espacio para el empoderamiento social y la defensa de los derechos humanos.
                    </li>
                </ul>
                <p className="mb-6 font-bold leading-8 text-sm md:text-base lg:text-xl">Para visualizar el podcast Voces Trans, consulta el instagram del programa como @vocestrans.podcast</p>
                <p className="mb-6 font-bold leading-8 text-sm md:text-base lg:text-xl">Si quieres conocer cuándo será la próxima feria o actividad educativa consulta nuestro instagram como @transafabvzla</p>
            </section>
            
            <section>
                <Link
                    className="no-underline"
                    href={"/https://www.whatsapp.com/channel/0029VayoFLsLCoWtBT43Ae0Q"}
                    target="_blank"
                    rel="noopener noreferrer"
                    alt={"Comuidad de Whatsapp"}
                >
                    <div className="w-full bg-transparent aspect-square min-[412px]:aspect-auto min-[412px]:h-[140px] min-[660px]:h-[200px] lg:h-[307px] bg-contactoMobile bg-center bg-contain bg-no-repeat min-[412px]:bg-contactoWeb min-[412px]:bg-contain xl:bg-cover">
                    </div>
                </Link>
            </section>

        </main>
    )
}

export default page
