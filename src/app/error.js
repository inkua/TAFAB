
'use client' // Error boundaries must be Client Components
import Image from 'next/image'
import Link from 'next/link'

export default function GlobalError({ error, reset }) {
    return (
        <html>
            <body>
                <main className="bg-white dark:bg-gray-900 ">
                    <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
                        <div className="wf-ull lg:w-1/2">
                            <p className="text-sm font-medium text-red-500 dark:text-red-400">500 error interno</p>
                            <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">¡Ups! Algo salió mal</h1>
                            <p className="mt-4 text-gray-500 dark:text-gray-400">Parece que hubo un problema inesperado. Nuestro equipo ya está al tanto y trabajando en ello.  
                            Intenta refrescar la página o vuelve más tarde.</p>

                            <div className="flex items-center mt-6 gap-x-3">

                                <Link className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
                                    href={"/"}
                                    >
                                    Ir a Inicio
                                </Link>
                            </div>
                        </div>

                        <div className="relative w-full mt-8 lg:w-1/2 lg:mt-0">
                            <Image className=" w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover " src={"/auth/login.jpg"} alt="error image" width={600} height={600} />
                        </div>
                    </div>
                </main>
            </body>
        </html>
    )
}