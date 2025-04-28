import Link from "next/link"

function page() {
    return (
        <main className='px-mobile md:px-tablet w-full xl:max-w-top min-[1500px]:px-0 lg:mx-auto *:mb-[45px] lg:*:mb-[70px]'>
            <section className="w-full flex flex-col md:flex-row md:items-center">
                <div className="flex-1">
                    <h1 className="title mb-4">Asistencia socioeconómica</h1>
                    <p className="mb-6 font-light leading-8 text-base md:text-lg lg:text-xl">Son proyectos enfocados alrededor del acceso a recursos de diversas índoles; a través de estos se brindan recursos materiales y financieros a personas en situación de emergencia o vulnerabilidad económica.</p>
                </div>

                <img
                    className="flex-1 w-full max-h-[300px] aspect-video object-contain md:pl-8"
                    src="/proyectos/closet.webp"
                    alt="closet comunitario"
                />
            </section>
            <section>
                <div className="flex flex-row items-center justify-between mb-9">
                    <h2 className="title">Clóset comunitario:</h2>
                    <div className="bg-tertiary h-1 w-full min-w-[20%] max-w-[55%] ml-4"></div>
                </div>
                <p className="mb-6 font-light leading-8 text-sm md:text-base lg:text-xl">Es un programa comunitario enfocado en la donación de prendas de vestir a personas trans, intercambio de prendas a personas de la comunidad y venta a bajo costo para el público general.</p>

                <h3>Misión</h3>
                <p className="mb-6 font-light leading-8 text-sm md:text-base lg:text-xl">Es un proyecto que reúne prendas de vestir en diferentes lugares del Venezuela y realiza donaciones a individuos Trans, intercambia prendas con personas LGBTIQ + y vende a bajo costo para la sostenibilidad a largo plazo del mismo.</p>

                <h3>Visión</h3>
                <p className="mb-6 font-light leading-8 text-sm md:text-base lg:text-xl">Ser un proyecto con alcance nacional e internacional, que posea un clóset comunitario físico en cada estado de Venezuela, que asista a la mayor cantidad de personas posibles. </p>
            </section>

            <section>
                <div className="flex flex-row items-center justify-between mb-9">
                    <h2 className="title">Principios del proyecto</h2>
                    <div className="bg-tertiary h-1 w-full min-w-[20%] max-w-[55%] ml-4"></div>
                </div>
                <ul className="text-primary text-base md:text-lg font-normal italic pl-4 border-l-8 border-l-primary border-l-solid leading-7 mb-4 md:mb-7">
                    <li className="mb-5"><strong className="not-italic text-black text-lg lg:text-xl">1. </strong> Promovemos el uso responsable y la sostenibilidad, al fomentar la reutilización y el intercambio de prendas de vestir.</li>
                    <li className="mb-5"><strong className="not-italic text-black text-lg lg:text-xl">2. </strong> Combatimos la exclusión social, al brindar ropas y accesorios que permiten el acceso a la vestimenta de género afirmativo.</li>
                    <li className="mb-5"><strong className="not-italic text-black text-lg lg:text-xl">3. </strong> Fortalecemos lazos en la comunidad LGBTIQ+, al funcionar como un punto de encuentro para los miembros de la comunidad en cada localidad.</li>
                    <li className="mb-5"><strong className="not-italic text-black text-lg lg:text-xl">4. </strong> Promovemos el bienestar, la diversidad y la inclusión social de las personas LGBTIQ+.</li>
                </ul>
            </section>

            <section>
                <div className="flex flex-row items-center justify-between mb-9">
                    <h2 className="title">¡INVOLÚCRATE!</h2>
                    <div className="bg-tertiary h-1 w-full min-w-[20%] max-w-[55%] ml-4"></div>
                </div>
                <p className="mb-6 font-light leading-8 text-sm md:text-base lg:text-xl">El Clóset Comunitario LGBTIQ+ funciona gracias al apoyo de personas como tú. Ya sea que necesites ropa o quieras apoyar a la comunidad, aquí te explicamos cómo participar:</p>

                <h3>¿NECESITAS ROPA?</h3>
                <p className="mb-6 font-light leading-8 text-sm md:text-base lg:text-xl">Sabemos lo importante que es vestir conforme a tu identidad. Por eso, ponemos a tu disposición prendas de vestir y accesorios de segunda mano.</p>

                <ul className="text-primary text-base md:text-lg font-normal italic pl-4 border-l-8 border-l-primary border-l-solid leading-7 mb-4 md:mb-7">
                    <li className="mb-5"><strong className="not-italic text-black text-lg lg:text-xl">¿Eres una persona trans? </strong> Solo pagas el costo del envío.</li>
                    <li className="mb-5"><strong className="not-italic text-black text-lg lg:text-xl">¿Otro integrante de la comunidad LGBTIQ+? </strong> Puedes acceder a prendas a muy bajo costo.</li>
                </ul>
                <p className="mb-6 font-light leading-8 text-sm md:text-base lg:text-xl">Explora nuestro catálogo y elige tu prenda favorita <a>aquí</a></p>

                <h3>¿QUIERES DONAR ROPA?</h3>
                <p className="mb-6 font-light leading-8 text-sm md:text-base lg:text-xl">Tu apoyo puede marcar una gran diferencia. Si tienes ropa o accesorios en buen estado que quieras donar:</p>
                <ul className="text-primary text-base md:text-lg font-normal italic pl-4 border-l-8 border-l-primary border-l-solid leading-7 mb-4 md:mb-7">
                    <li className="mb-5"><strong className="not-italic text-black text-lg lg:text-xl">-</strong> Te ayudamos a encontrar el centro de recolección más cercano.</li>
                    <li className="mb-5"><strong className="not-italic text-black text-lg lg:text-xl">-</strong> Aceptamos ropa de todo tipo, especialmente prendas que afirmen la identidad de género de personas trans.</li>
                </ul>
                <p className="mb-6 font-light leading-8 text-sm md:text-base lg:text-xl">Conviértete en donante hoy y contáctanos <a>aquí</a></p>

                <h3>¿DÓNDE ESTAMOS?</h3>
                <p className="mb-6 font-light leading-8 text-sm md:text-base lg:text-xl">Actualmente no contamos con una sede física permanente, pero puedes encontrarnos en eventos de moda sostenible en varias ciudades de Venezuela. Las ciudades donde participamos son Caracas, Valencia, Maracay y Coro.</p>

            </section>

            <section>
                <Link
                    className="no-underline"
                    href={"/recursos"}
                    alt={"Conoce más de nosotros"}
                >
                    <div className="w-full bg-transparent aspect-square min-[412px]:aspect-auto min-[412px]:h-[140px] min-[660px]:h-[200px] lg:h-[307px] bg-nosotrosMobile bg-center bg-contain bg-no-repeat min-[412px]:bg-nosotrosWeb min-[412px]:bg-contain  min-[1500px]:bg-cover">
                    </div>
                </Link>
            </section>

        </main>
    )
}

export default page
