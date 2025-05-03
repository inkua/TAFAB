import Link from "next/link"
import FormContact from "./components/FormContact"

const FooterContact = () => {
    return (
        <footer className="bg-footer-primary ">
            <div className="px-mobile md:px-tablet w-full xl:max-w-top min-[1500px]:px-0 xl:mx-auto py-4 md:py-8 xl:pt-12">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3 w-full">
                    <div className="sm:col-span-2">
                        <FormContact />
                    </div>


                    <div className="lg:ml-auto lg:mt-4 col-span-2 lg:col-span-1">
                        <p className="font-extrabold text-white lg:text-right">Trans AFAB Venezuela</p>

                        <div className="flex flex-col items-start lg:items-end mt-5 space-y-2 ">
                            <Link href="/" alt="inicio" className="text-white lg:text-lg">Inicio</Link>
                            <Link href="/nosotros" alt="nosotros" className="text-white lg:text-lg">Nosotros</Link>
                            <Link href="/proyectos" alt="proyectos" className="text-white lg:text-lg">Proyectos</Link>
                            <Link href="/articulos" alt="artículos" className="text-white lg:text-lg">Articulos</Link>
                            <Link href="/preguntas" alt="preguntas frecuentes" className="text-white lg:text-lg">Preguntas Frecuentes</Link>
                            <Link href="/recursos" alt="recursos de la comunidad" className="text-white lg:text-lg">Recursos</Link>
                            <Link href="/donar" alt="donar" className="text-white lg:text-lg">Donar</Link>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 md:my-8 " />

                <div className="flex items-center flex-col md:flex-row justify-between gap-6 mb-4">
                    <h3 className="w-auto h-7b font-medium text-white text-xl md:text-2xl">Conéctate a nuestras redes sociales</h3>

                    <div className="flex -mx-2">
                        <a
                            className='flex justify-center w-[30px] h-[30px] rounded-full items-center px-auto mx-2'
                            href="https://api.whatsapp.com/send?phone=584127112532"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="./whatsapp_logo.svg" alt="Whatsapp" />
                        </a>

                        <a
                            className='flex justify-center w-[30px] h-[30px] rounded-full items-center px-auto mx-2'
                            href="https://www.instagram.com/transafabvzla/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="./instagram_logo.svg" alt="Instagram" />
                        </a>

                        <a
                            className='flex justify-center w-[30px] h-[30px] rounded-full items-center px-auto  mx-2'
                            href="https://tiktok.com/@transafabvzla"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="./tiktok.svg" alt="tiktok" />
                        </a>

                        <a
                            className='flex justify-center w-[30px] h-[30px] rounded-full items-center px-auto  mx-2'
                            href="https://www.youtube.com/@TransAFABVzla"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="./youtube.svg" alt="youtube" />
                        </a>

                        <a
                            className='flex justify-center w-[30px] h-[30px] rounded-full items-center px-auto mx-2'
                            href="https://x.com/transafabvzla"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="./x_logo.svg" alt="x" />
                        </a>

                        <a
                            className='flex justify-center w-[30px] h-[30px] rounded-full items-center px-auto mx-2'
                            href="https://www.whatsapp.com/channel/0029VayoFLsLCoWtBT43Ae0Q"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="./whatsChannel.svg" alt="Canal de whatsapp" />
                        </a>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterContact
