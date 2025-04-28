import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react"
import Image from "next/image"

function LeaderCard() {
    return (
        <section className="hidden md:flex md:flex-col"><div className='w-full'>
            <h3 className='mt-5 font-normal text-2xl md:text-4xl text-text-dark mb-2'>Samara Sereno</h3>

            <article className=' flex flex-col'>

                <div className='w-full flex flex-col lg:flex-row justify-between items-center mt-3 md:mt-6 mb-5 md:mb-7'>
                    <div className='w-full flex flex-col md:flex-row justify-center items-center gap-4 lg:w-[66%]'>
                        <Image
                            className='w-full max-w-[492px] md:w-[150%] md:flex-1 lg:aspect-[329/153] object-cover'
                            src="/nosotros/miembro/samara.webp"
                            loading="lazy"
                            width={600}
                            height={400}
                            alt="Imagen de Samara"
                        />
                        <p className='leading-6 font-semibold text-sm md:flex-1 xl:text-base'>
                            Mujer Transgénero. Artista, artesana y activista por los derechos humanos de las personas LGBTIQ+. Actualmente es vocal de la junta directiva y coordinadora regional para los estados Aragua y Carabobo
                        </p>
                    </div>
                    <p className='hidden text-start leading-6 font-light italic text-sm xl:text-base border md:block border-tertiary h-fit lg:w-[33%] m-0 p-3'>
                        “Hoy soy libre y sigo descubriendo quien soy realmente después de tantos años, el activismo me da fuerzas para continuar en esta 'guerra' diaria de ser yo”. <strong className='not-italic'>S. Sereno</strong>
                    </p>
                </div>

                <div className='md:hidden'>
                    <Disclosure>
                        <DisclosureButton className="py-2 px-2 my-4 bg-tertiary text-slate-600">Hoy soy libre...  ver más</DisclosureButton>
                        <DisclosurePanel className="font-light italic text-sm">
                            “Hoy soy libre y sigo descubriendo quien soy realmente después de tantos años, el activismo me da fuerzas para continuar en esta 'guerra' diaria de ser yo”. <strong className='not-italic'>S. Sereno</strong>
                        </DisclosurePanel>
                    </Disclosure>
                </div>
            </article>
        </div>

            <div className='w-full'>
                <h3 className='mt-5 font-normal text-2xl md:text-4xl text-text-dark mb-2'>Dani Brito</h3>

                <article className=' flex flex-col'>

                    <div className='w-full flex flex-col lg:flex-row justify-between items-center mt-3 md:mt-6 mb-5 md:mb-7'>
                        <div className='w-full flex flex-col md:flex-row justify-center items-center gap-4 lg:w-[66%]'>
                            <Image
                                className='w-full max-w-[492px] md:w-[150%] md:flex-1 lg:aspect-[329/153] object-cover'
                                src="/nosotros/miembro/dani.webp"
                                loading="lazy"
                                width={600}
                                height={400}
                                alt="Imagen de Dani"
                            />
                            <p className='leading-6 font-semibold text-sm md:flex-1 xl:text-base'>
                                Persona No Binarie. Artista, Drag Queen venezolana y activista por los derechos humanos de la comunidad LGBTIQ+. Actualmente es vocal de la junta directiva y coordinadora regional para el estado Carabobo.
                            </p>
                        </div>
                        <p className='hidden text-start leading-6 font-light italic text-sm xl:text-base border md:block border-tertiary h-fit lg:w-[33%] m-0 p-3'>
                            “Necesitaba este fuego, este deseo de luchar, de impulsar y trabajar por el progreso. Tengo un gran viaje delante de mí y solo puedo sentir ansias”. <strong className='not-italic'>Dani Brito</strong>
                        </p>
                    </div>

                    <div className='md:hidden'>
                        <Disclosure>
                            <DisclosureButton className="py-2 px-2 my-4 bg-tertiary text-slate-600">Necesitaba este fuego...  ver más</DisclosureButton>
                            <DisclosurePanel className="font-light italic text-sm">
                                “Necesitaba este fuego, este deseo de luchar, de impulsar y trabajar por el progreso. Tengo un gran viaje delante de mí y solo puedo sentir ansias”. <strong className='not-italic'>Dani Brito</strong>
                            </DisclosurePanel>
                        </Disclosure>
                    </div>
                </article>
            </div>

            <div className='w-full'>
                <h3 className='mt-5 font-normal text-2xl md:text-4xl text-text-dark mb-2'>D. F.</h3>

                <article className=' flex flex-col'>

                    <div className='w-full flex flex-col lg:flex-row justify-between items-center mt-3 md:mt-6 mb-5 md:mb-7'>
                        <div className='w-full flex flex-col md:flex-row justify-center items-center gap-4 lg:w-[66%]'>
                            <Image
                                className='w-full max-w-[492px] md:w-[150%] md:flex-1 lg:aspect-[329/153] object-cover'
                                src="/nosotros/miembro/df.webp"
                                loading="lazy"
                                width={600}
                                height={400}
                                alt="Imagen de D. F."
                            />
                            <p className='leading-6 font-semibold text-sm md:flex-1 xl:text-base'>
                                Hombre Trans. Estudiante universitario, músico e ilustrador. Actualmente es secretario de la junta directiva y diseñador gráfico de la imagen institucional de TAFAB.
                            </p>
                        </div>
                        <p className='hidden text-start leading-6 font-light italic text-sm xl:text-base border md:block border-tertiary h-fit lg:w-[33%] m-0 p-3'>
                            "Pasé gran parte de mi vida con miedo de mí mismo y del rechazo. Ser yo requiere valentía pero también trajo alegría, y hoy soy amado por quién soy”.<strong className='not-italic'> D. F.</strong>
                        </p>
                    </div>

                    <div className='md:hidden'>
                        <Disclosure>
                            <DisclosureButton className="py-2 px-2 my-4 bg-tertiary text-slate-600">Pasé con miedo...  ver más</DisclosureButton>
                            <DisclosurePanel className="font-light italic text-sm">
                                "Pasé gran parte de mi vida con miedo de mí mismo y del rechazo. Ser yo requiere valentía pero también trajo alegría, y hoy soy amado por quién soy”.<strong className='not-italic'> D. F.</strong>
                            </DisclosurePanel>
                        </Disclosure>
                    </div>
                </article>
            </div>
        </section>
    )

}

export default LeaderCard