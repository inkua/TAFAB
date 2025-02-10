import Image from "next/image"
import Link from "next/link"

const Noticias = () => {
    return (
        <section className="">
            <h2 className="title">ÚLTIMAS NOTICIAS</h2>
            <div 
            className="overflow-x-scroll px-6 mt-10 flex flex-row gap-4 md:gap-6 cursor-grab active:cursor-grabbing select-none scroll-container" 
            role="list"
            id="newsScroll"
            >

                <div className="w-full min-w-[255px] max-w-[293px] md:w-1/2 mb-2 flex flex-col lg:flex-row lg:items-center lg:min-w-[637px]" role="listitem">
                    <Image
                        className="aspect-square w-full lg:w-[220px]"
                        src={"/home/eventos/marchamos.webp"}
                        alt="Imagen del evento"
                        width={300}
                        height={300} />

                    <div className="w-full mt-3 lg:p-10 lg:mt-0">
                        <span className="font-light text-xs">Septiembre 12, 2025.</span>
                        <h3 className="font-bold text-xl uppercase leading-7 mt-1">Marchamos Por derechos</h3>
                        <p className="mt-1 h-auto text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <Link
                            className="font-bold underline mt-4 text-sm hover:text-btn-purple"
                            href={"www.instagram.com"}
                            target="_blank"
                            rel="noopener noreferrer">
                            Leer más
                        </Link>
                    </div>
                </div>

                <div className="w-full min-w-[255px] max-w-[293px] md:w-1/2 mb-2 flex flex-col lg:flex-row lg:items-center lg:min-w-[637px]" role="listitem">
                    <Image
                        className="aspect-square w-full lg:w-[220px]"
                        src={"/home/eventos/marchamos.webp"}
                        alt="Imagen del evento"
                        width={300}
                        height={300} />

                    <div className="w-full mt-3 lg:p-10 lg:mt-0">
                        <span className="font-light text-xs">Septiembre 12, 2025.</span>
                        <h3 className="font-bold text-xl uppercase leading-7 mt-1">Marchamos Por derechos</h3>
                        <p className="mt-1 h-auto text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <Link
                            className="font-bold underline mt-4 text-sm hover:text-btn-purple"
                            href={"www.instagram.com"}
                            target="_blank"
                            rel="noopener noreferrer">
                            Leer más
                        </Link>
                    </div>
                </div>

                <div className="w-full min-w-[255px] max-w-[293px] md:w-1/2 mb-2 flex flex-col lg:flex-row lg:items-center lg:min-w-[637px]" role="listitem">
                    <Image
                        className="aspect-square w-full lg:w-[220px]"
                        src={"/home/eventos/marchamos.webp"}
                        alt="Imagen del evento"
                        width={300}
                        height={300} />

                    <div className="w-full mt-3 lg:p-10 lg:mt-0">
                        <span className="font-light text-xs">Septiembre 12, 2025.</span>
                        <h3 className="font-bold text-xl uppercase leading-7 mt-1">Marchamos Por derechos</h3>
                        <p className="mt-1 h-auto text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <Link
                            className="font-bold underline mt-4 text-sm"
                            href={"www.instagram.com"}
                            target="_blank"
                            rel="noopener noreferrer">
                            Leer más
                        </Link>
                    </div>
                </div>

            </div>

            {/* Carga el script en el cliente para el scroll del contenido*/}
            <script defer src="/js/newsScroll.js"></script>

        </section>
    )
}

export default Noticias
