import Link from "next/link";

import Eventos from "./components/inicio/Eventos/Eventos";
import Proyectos from "./components/inicio/Proyectos/Proyectos";
import Videos from "./components/inicio/Videos/Videos";

export const metadata = {
    title: "Inicio | TAFAB Venezuela",
    description: "Bienvenide a TAFAB, una colectiva trans venezolana que teje redes de apoyo, información y lucha por los derechos humanos de la comunidad trans desde y para Venezuela.",
}

export default function Home() {
    return (
        <main className="px-mobile md:px-tablet w-full xl:max-w-top min-[1500px]:px-0 lg:mx-auto *:mb-[45px] lg:*:mb-[70px]">
            <h1 className="sr-only">Trans AFAB Venezuela</h1>

            <section className="h-[347px] md:!h-[480px] xl:!h-[510px]" role="banner">
                <div className='!h-[306px] md:!h-[420px] xl:!h-[450px] bg-blue-100 bg-denunciaMobile md:bg-denunciaWeb bg-left bg-no-repeat bg-cover'>
                    <div className='w-full h-full flex justify-center items-end md:justify-start' >
                        <Link
                            href="https://nomasdiscriminacion.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='bg-[#FABF74] text-[#484848] md:text-lg xl:text-xl py-3  xl:py-5 px-11 md:px-14 xl:px-20 font-semibold mb-7 md:mb-12 md:ml-44 hover:bg-btn-purple hover:text-white'
                        >
                            Haz clic para denunciar
                        </Link>

                    </div>
                </div>
            </section>

            <Eventos />

            <section>
                <Link
                    className="no-underline"
                    href="https://www.whatsapp.com/channel/0029VayoFLsLCoWtBT43Ae0Q"
                    target="_blank"
                    rel="noopener noreferrer"
                    alt={"Comuidad de Whatsapp"}
                >
                    <div className="w-full bg-transparent aspect-square min-[412px]:aspect-auto min-[412px]:h-[140px] min-[660px]:h-[200px] lg:h-[307px] bg-contactoMobile bg-center bg-contain bg-no-repeat min-[412px]:bg-contactoWeb min-[412px]:bg-contain xl:bg-cover">
                    </div>
                </Link>
            </section>

            <Proyectos />

            <section>
                <Link
                    className="no-underline"
                    href={"/recursos"}
                    alt={"Conoce más de nosotros"}
                >
                    <div className="w-full bg-transparent aspect-square min-[412px]:aspect-auto min-[412px]:h-[140px] min-[660px]:h-[200px]  lg:h-[307px] bg-nosotrosMobile bg-center bg-contain bg-no-repeat min-[412px]:bg-nosotrosWeb min-[412px]:bg-contain  min-[1500px]:bg-cover">
                    </div>
                </Link>
            </section>

            <Videos />
        </main>
    );
}
