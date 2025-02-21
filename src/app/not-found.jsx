import Image from "next/image"
import Link from "next/link"

function NotFound() {
    return (
        <body>
            <main className="flex flex-col min-h-full justify-center items-center bg-white px-6 py-24 sm:py-32 lg:px-8 h-[100vh] gap-6">
                <div className="flex justify-center">
                    <Image
                        className="w-20 lg:w-28 aspect-square"
                        src="/logoTAFAB.jpg"
                        width={400}
                        height={400}
                        loading="lazy"
                        alt="Trans AFAB Venezuela"
                    />
                </div>

                <h1 className="title mt-4 text-3xl font-bold sm:text-5xl text-center">Opps, página no encontrada</h1>
                <p className="leading-7 text-sm lg:text-xl font-normal my-2 lg:mt-6 lg:mb-8 text-center">Lamentamos el inconveniente, pero la página a la que quieres acceder no está disponible.</p>

                <div className="flex items-center justify-center gap-x-6">
                    <Link
                        href="/"
                        className="bg-[#FABF74] text-base lg:text-lg py-2 lg:py-4 px-12 lg:px-16 hover:bg-btn-pink"
                    >
                        Volver a Inicio
                    </Link>
                </div>
            </main>

        </body>
    )
}

export default NotFound
