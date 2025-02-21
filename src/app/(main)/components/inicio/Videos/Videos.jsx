import SeeBtn from "./components/SeeBtn"
import SeeLink from "./components/SeeLink"

const Videos = () => {

    return (
        <section className="">
            <div className=" flex flex-row items-center justify-between mb-9">
                <h2 className="title">ÚLTIMOS VIDEOS</h2>
                <div className="bg-tertiary h-1 w-full min-w-[20%] max-w-[55%] ml-4"></div>
            </div>

            <div className="flex flex-row gap-4 lg:gap-14 md:px-4 overflow-x-scroll cursor-grab active:cursor-grabbing select-none scroll-container"
                id="videosScroll"
                role="list"
            >

                <div className="w-full min-w-[288px] max-w-[364px]" role="listitem">
                    <div className="w-full aspect-video grid place-items-center bg-center bg-no-repeat bg-cover"
                        style={{ backgroundImage: "url('/defaultVideo.webp')" }}
                    >
                        <SeeBtn />
                    </div>

                    <span className="text-right block text-xs mt-4">Septiembre 12, 2025.</span>
                    <h3 className="uppercase text-lg mt-1">Ser trans y la academia</h3>
                    <p className="text-xs leading-5">Si eres una persona Trans y necesitas apoyo o quieres más información sobre lo que hacemos en Trans AFAB Venezuela...</p>
                </div>

                <div className="w-full min-w-[288px] max-w-[364px]" role="listitem">
                    <div className="w-full aspect-video grid place-items-center bg-center bg-no-repeat bg-cover"
                        style={{ backgroundImage: "url('/defaultVideo.webp')" }}
                    >
                        <SeeLink />
                    </div>

                    <span className="text-right block text-xs mt-4">Septiembre 12, 2025.</span>
                    <h3 className="uppercase text-lg mt-1">Ser trans y la academia</h3>
                    <p className="text-xs leading-5">Si eres una persona Trans y necesitas apoyo o quieres más información sobre lo que hacemos en Trans AFAB Venezuela...</p>
                </div>

                <div className="w-full min-w-[288px] max-w-[364px]" role="listitem">
                    <div className="w-full aspect-video grid place-items-center bg-center bg-no-repeat bg-cover"
                        style={{ backgroundImage: "url('/defaultVideo.webp')" }}
                    >
                        <button className="bg-btn-pink lg:opacity-50 hover:opacity-100 transition-opacity hover:bg-bth-blue text-text-dark py-2 px-6 uppercase underline font-bold">ver</button>
                    </div>

                    <span className="text-right block text-xs mt-4">Septiembre 12, 2025.</span>
                    <h3 className="uppercase text-lg mt-1">Ser trans y la academia</h3>
                    <p className="text-xs leading-5">Si eres una persona Trans y necesitas apoyo o quieres más información sobre lo que hacemos en Trans AFAB Venezuela...</p>
                </div>

                <div className="w-full min-w-[288px] max-w-[364px]" role="listitem">
                    <div className="w-full aspect-video grid place-items-center bg-center bg-no-repeat bg-cover"
                        style={{ backgroundImage: "url('/defaultVideo.webp')" }}
                    >
                        <button className="bg-btn-pink lg:opacity-50 hover:opacity-100 transition-opacity hover:bg-bth-blue hover:cur text-text-dark py-2 px-6 uppercase underline font-bold">ver</button>
                    </div>

                    <span className="text-right block text-xs mt-4">Septiembre 12, 2025.</span>
                    <h3 className="uppercase text-lg mt-1">Ser trans y la academia</h3>
                    <p className="text-xs leading-5">Si eres una persona Trans y necesitas apoyo o quieres más información sobre lo que hacemos en Trans AFAB Venezuela...</p>
                </div>


            </div>{
            
            /* Carga el script en el cliente para el scroll del contenido*/}
            <script defer src="/js/videosScroll.js"></script>

        </section>
    )
}

export default Videos
