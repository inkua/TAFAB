export const metadata = {
    title: "Donar | TAFAB Venezuela",
    description: "Apoya el trabajo de TAFAB y haz posible que más personas trans en Venezuela reciban acompañamiento, recursos y visibilidad.",
}

const Donar = () => {
    return (
        <main className='px-mobile md:px-tablet w-full xl:max-w-top min-[1500px]:px-0 lg:mx-auto *:mb-[45px] lg:*:mb-[70px]'>
            <div
                className='w-full aspect-video md:aspect-auto md:h-[180px] lg:h-[251px] xl:h-[322px] min-[1500px]:h-[396px] bg-bannerDonar bg-cover bg-no-repeat bg-center'
                role='banner'
            >
            </div>

            <aricle>
                <h1 className='title mb-4' >¿CÓMO CONTRIBUIR?</h1>

                <p className='leading-8 text-sm md:text-base lg:text-xl font-light' >
                    Recibimos donaciones para apoyar a nuestros valiosos voluntarios y continuar asistiendo a personas LGBTIQ+ a través de nuestros proyectos e iniciativas en situaciones de emergencia.
                </p>
                <p className='leading-8 text-sm md:text-base lg:text-xl font-light' >
                    Aceptamos aportaciones desde $1, sin límites. Sólo debes colocar cómo quieres que invitamos tu donativo. Ej: Insumos alimenticios.
                </p>

                <div className="my-4">
                    <ul className="border-l-8 border-solid border-bth-blue p-4 lg:p-8 ml-4">
                        <li className="mb-4">
                            <h2 className="text-lg capitalize md:text-xl lg:text-2xl" >PayPal:</h2>
                            <p className="leading-8 text-sm md:text-base lg:text-xl font-light">kdssolortegui@gmail.com</p>
                        </li>
                        <li className="mb-4">
                            <h2 className="text-lg capitalize md:text-xl lg:text-2xl" >Binance:</h2>
                            <p className="leading-8 text-sm md:text-base lg:text-xl font-light">USDT - mulberrythirst@protonmail.com</p>
                        </li>
                        <li className="mb-4">
                            <h2 className="text-lg capitalize md:text-xl lg:text-2xl" >Zinli:</h2>
                            <p className="leading-8 text-sm md:text-base lg:text-xl font-light">kdssolortegui@gmail.com</p>
                        </li>
                        <li className="mb-4">
                            <h2 className="text-lg capitalize md:text-xl lg:text-2xl" >AirTM:</h2>
                            <p className="leading-8 text-sm md:text-base lg:text-xl font-light">kdssolortegui@gmail.com </p>
                        </li>
                        <li className="mb-4">
                            <h2 className="text-lg capitalize md:text-xl lg:text-2xl" >Pago móvil en BsD:</h2>
                            <p className="leading-8 text-sm md:text-base lg:text-xl font-light">0102 (Banco de Venezuela) V-27568293 04260364005</p>
                        </li>
                    </ul>
                </div>


            </aricle>

            <section className="bg-white">
                <div className="py-16 mx-auto md:flex md:items-center">

                    <h2 className="text-2xl font-semibold tracking-tight xl:text-3xl text-btn-purple">
                        Para mayor información escríbenos.
                    </h2>

                    <div className="mt-8 md:mt-0 md:ml-24">
                        <a 
                            className="flex xl:text-lg px-12 py-4 gap-3 items-center justify-center bg-btn-purple text-white cursor-pointer hover:bg-btn-pink"
                            href="https://api.whatsapp.com/send?phone=584260364005&text=Hola"
                            target="_blank"
                            rel="noopener noreferrer"
                            alt="Whatsapp"
                        >

                            <span>
                                +58-4260364005
                            </span>
                            <img src="/whatsapp_logo.svg" alt="Whatsapp" />
                        </a>

                    </div>

                </div>
            </section>



        </main>
    )
}

export default Donar
