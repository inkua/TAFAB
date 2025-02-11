import Link from "next/link";

import Carrusel from "./components/inicio/Denuncias/Carrusel";
import Eventos from "./components/inicio/Eventos/Eventos";
import Noticias from "./components/inicio/Noticias/Noticias";
import Proyectos from "./components/inicio/Proyectos/Proyectos";
import Videos from "./components/inicio/Videos/Videos";

export default function Home() {
    return (
        <main className="px-mobile md:px-tablet w-full xl:max-w-top min-[1500px]:px-0 lg:mx-auto *:mb-[45px] lg:*:mb-[70px]">
            <h1 className="sr-only">Trans AFAB Venezuela</h1>
            <Carrusel />
            
            <Eventos />

            <section>
                <Link 
                className="no-underline"
                href={"/"}
                alt={"Contactanos en Whatsapp"}
                >
                    <div className="w-full bg-transparent aspect-square min-[412px]:aspect-auto min-[412px]:h-[140px] min-[660px]:h-[200px] lg:h-[307px] bg-contactoMobile bg-center bg-contain bg-no-repeat min-[412px]:bg-contactoWeb min-[412px]:bg-contain xl:bg-cover">
                    </div>
                </Link>
            </section>

            <Proyectos />

            <section>
                <Link 
                className="no-underline"
                href={"/"}
                alt={"Conoce más de nosotros"}
                >
                    <div className="w-full bg-transparent aspect-square min-[412px]:aspect-auto min-[412px]:h-[140px] min-[660px]:h-[200px]  lg:h-[307px] bg-nosotrosMobile bg-center bg-contain bg-no-repeat min-[412px]:bg-nosotrosWeb min-[412px]:bg-contain  min-[1500px]:bg-cover">
                    </div>
                </Link>
            </section>

            <Noticias />

            <Videos />
        </main>
    );
}
