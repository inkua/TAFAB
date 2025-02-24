

const FooterContact = () => {
    return (
        <footer className="bg-footer-primary ">
            <div className="px-mobile md:px-tablet w-full xl:max-w-top min-[1500px]:px-0 xl:mx-auto py-4 md:py-8 xl:pt-12">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3 w-full">
                    <div className="sm:col-span-2">
                        <form className="mt-4 lg:max-w-[550px] 2xl:max-w-[660px]">
                            <div className="flex-1">
                                <label className="block mb-2 text-md text-white ">Nombre</label>
                                <input type="text" placeholder="tu nombre" className="block w-full px-5 py-1 lg:py-2 mt-2 text-gray-700 bg-white border border-gray-200  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                            </div>

                            <div className="flex-1 mt-6">
                                <label className="block mb-2 text-md text-white ">Correo</label>
                                <input type="email" placeholder="tu correo" className="block w-full px-5  py-1 lg:py-2 mt-2 text-gray-700 bg-white border border-gray-200 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                            </div>

                            <div className="w-full mt-6">
                                <label className="block mb-2 text-md text-white ">Mensaje</label>
                                <textarea className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 md:h-48  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" placeholder="Texto"></textarea>
                            </div>

                            <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-btn-purple">
                                ENVIAR MENSAJE
                            </button>
                        </form>
                    </div>


                    <div className="lg:ml-auto lg:mt-4 col-span-2 lg:col-span-1">
                        <p className="font-extrabold text-white lg:text-right">Trans AFAB Venezuela</p>

                        <div className="flex flex-col items-start lg:items-end mt-5 space-y-2 ">
                            <a href="#" className="text-white lg:text-lg">Inicio</a>
                            <a href="#" className="text-white lg:text-lg">Nosotros</a>
                            <a href="#" className="text-white lg:text-lg">Proyectos</a>
                            <a href="#" className="text-white lg:text-lg">Blog</a>
                            <a href="#" className="text-white lg:text-lg">Preguntas</a>
                            <a href="#" className="text-white lg:text-lg">Recursos</a>
                            <a href="#" className="text-white lg:text-lg">Donar</a>
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
