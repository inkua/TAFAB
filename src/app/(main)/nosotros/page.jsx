import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'

import Dirigencia from './components/Dirigencia'

export const metadata = {
    title: "Nosotros | TAFAB Venezuela",
    description: "Descubre cómo trabajamos desde la experiencia trans para ofrecer apoyo, organización y transformación social en Venezuela.",
}

function page() {
    return (
        <main className='px-mobile md:px-tablet w-full xl:max-w-top min-[1500px]:px-0 lg:mx-auto *:mb-[45px] lg:*:mb-[70px]'>
            <div
                className='w-full aspect-video md:aspect-auto md:h-[180px] lg:h-[251px] xl:h-[322px] min-[1500px]:h-[396px] bg-aboutMobile md:bg-aboutWeb bg-cover bg-no-repeat bg-center'
                role='banner'
            >
            </div>

            <section>
                <h1 className='title mb-4' >¿QUIÉNES SOMOS?</h1>

                <p className='leading-8 text-sm md:text-base lg:text-xl font-light' >
                    Somos una colectiva cuyo propósito es crear un espacio seguro y organizado para que la población transgénero (trans) venezolana esté informada, acompañada y asistida, sin importar ubicación o condición socioeconómica de cada individue. Dicha iniciativa surge con la finalidad de evitar que las personas trans de Venezuela estén aisladas entre sí y poder brindarles un lugar a donde recurrir en caso de necesitarlo. Nos caracterizamos por ser una colectiva dirigida por y para personas trans.
                </p>

                <Disclosure>
                    <DisclosureButton className="py-2 px-2 bg-btn-pink my-10 text-text-dark font-bold underline uppercase  md:hidden block">Ver más contenido</DisclosureButton>
                    <DisclosurePanel >
                        <p className="leading-8 text-sm mb-6 font-light">
                            “Si bien con nuestro nombre deseamos visibilizar a la comunidad trans disidente del género femenino asignado al nacer (Trans AFAB); nuestros proyectos también incluyen y están enfocados en la comunidad trans disidente del género masculino asignado al nacer (Trans AMAB)”. Jonah Sira. Codirector de TAFAB.
                        </p>
                        <p className="leading-8 text-sm mb-6 font-light">
                            <strong> Nuestra fuerza de trabajo se enfoca en tres áreas de acción.</strong> Primero, brindamos asistencia sanitaria en materia de salud mental y salud física, a personas trans de todo el país; a través de proyectos, actividades y servicios a bajo costo destinados a brindar apoyo psicológico, medicina general, fisioterapia y algunas especialidades médicas, con el fin de brindar espacios libres de discriminación en ámbitos de salud y bienestar. En segundo lugar, brindamos acompañamiento socioeconómico, proporcionando recursos materiales y financieros a personas trans en situación de emergencia o vulnerabilidad. Y, finalmente, nos esforzamos por desarrollar iniciativas de educación y sensibilización en materia de derechos humanos, mediante investigaciones, proyectos digitales y actividades que promuevan la inclusión de las personas trans en la sociedad venezolana.
                        </p>
                        <p className="leading-8 text-sm mb-8 font-light">
                            Por último, si bien la población objetivo de TAFAB está constituida por personas trans, en algunas regiones de Venezuela no existen organizaciones LGBTIQ+ que incidan localmente, por lo cual, hemos abierto algunos espacios seguros que incluyen a toda la comunidad LGBTIQ+, para que ninguna persona gay, lesbiana, bisexual, trans, intersex o queer esté aislada y excluida.
                        </p>
                    </DisclosurePanel>
                </Disclosure>

                <p className="hidden md:block leading-8 md:text-base lg:text-xl font-light md:mt-5">
                    “Si bien con nuestro nombre deseamos visibilizar a la comunidad trans disidente del género femenino asignado al nacer (Trans AFAB); nuestros proyectos también incluyen y están enfocados en la comunidad trans disidente del género masculino asignado al nacer (Trans AMAB)”. Jonah Sira. Codirector de TAFAB.
                </p>
                <p className="hidden md:block leading-8 md:text-base lg:text-xl font-light md:mt-5">
                    <strong> Nuestra fuerza de trabajo se enfoca en tres áreas de acción.</strong> Primero, brindamos asistencia sanitaria en materia de salud mental y salud física, a personas trans de todo el país; a través de proyectos, actividades y servicios a bajo costo destinados a brindar apoyo psicológico, medicina general, fisioterapia y algunas especialidades médicas, con el fin de brindar espacios libres de discriminación en ámbitos de salud y bienestar. En segundo lugar, brindamos acompañamiento socioeconómico, proporcionando recursos materiales y financieros a personas trans en situación de emergencia o vulnerabilidad. Y, finalmente, nos esforzamos por desarrollar iniciativas de educación y sensibilización en materia de derechos humanos, mediante investigaciones, proyectos digitales y actividades que promuevan la inclusión de las personas trans en la sociedad venezolana.
                </p>
                <p className="hidden md:block leading-8 md:text-base lg:text-xl font-light mb-10 md:mt-5">
                    Por último, si bien la población objetivo de TAFAB está constituida por personas trans, en algunas regiones de Venezuela no existen organizaciones LGBTIQ+ que incidan localmente, por lo cual, hemos abierto algunos espacios seguros que incluyen a toda la comunidad LGBTIQ+, para que ninguna persona gay, lesbiana, bisexual, trans, intersex o queer esté aislada y excluida.
                </p>

                <div className='w-full flex flex-col md:flex-row md:items-start md:gap-7' >

                    <div className='w-full h-full lg:flex-1 flex flex-col lg:flex-row gap-3 justify-center'>
                        <picture className='flex-1'>
                            <source
                                media="(max-width: 1024px)"
                                srcSet="/nosotros/misionMobile.webp"
                            />
                            <source
                                media="(min-width: 1024px)"
                                srcSet="/nosotros/misionWeb.webp"
                            />
                            <Image
                                src="/nosotros/misionMobile.webp"
                                className='w-full aspect-video lg:aspect-square object-cover'
                                alt="imagen de mision"
                                width={600}
                                height={400}
                            />
                        </picture>
                        <div className='flex-1'>
                            <h2 className='title mb-2' id='misionyvision'>MISIÓN </h2>
                            <p className='leading-6 text-sm md:text-base lg:text-xl font-light mb-10'>
                                Construir redes de apoyo, asistir, visibilizar y defender los derechos humanos y el bienestar de las personas trans venezolanas
                            </p>
                        </div>
                    </div>

                    <div className=' w-full h-full lg:flex-1 flex flex-col lg:flex-row gap-3 justify-center'>
                        <picture className='flex-1'>
                            <source
                                media="(max-width: 1024px)"
                                srcSet="/nosotros/visionMobile.webp"
                            />
                            <source
                                media="(min-width: 1024px)"
                                srcSet="/nosotros/visionWeb.webp"
                            />
                            <Image
                                src="/nosotros/misionMobile.webp"
                                className='w-full aspect-video lg:aspect-square object-cover'
                                alt="imagen de mision"
                                width={600}
                                height={400}
                            />
                        </picture>
                        <div className='flex-1'>
                            <h2 className='title mb-2'>VISIÓN </h2>
                            <p className='leading-6 text-sm md:text-base lg:text-xl font-light mb-10'>
                                Ser una colectiva con alcance nacional e internacional, que genere una red de apoyo que  promueva y acompañe el bienestar de las personas transgénero y el alcance de sus derechos humanos, que mejore sus contextos y les permita generar sus propias iniciativas de solidaridad trans.
                            </p>
                        </div>
                    </div>

                </div>

            </section>

            <Dirigencia />

            <section className='m-auto' id='comofuncionamos'>
                <h2 className='title mt-16'
                    id='misionyvision'>¿COMO FUNCIONAMOS?</h2>

                <p className='leading-7 text-sm lg:text-xl font-normal my-2 lg:mt-6 lg:mb-8'>
                    El apoyo mutuo es nuestra principal herramienta de trabajo. Con más de 25 voluntarios alrededor del país, creamos alianzas profesionales con individuos que de manera altruista dedican su tiempo y esfuerzo a nuestra causa. Además, participamos conjuntamente con otras organizaciones de la sociedad civil en proyectos conjuntos, con el objetivo de ampliar nuestro alcance e impacto en la comunidad LGBTIQ venezolana.
                </p>

                <Image
                    className='m-auto w-full max-h-[400px] object-cover object-center'
                    src="/nosotros/picnic.webp"
                    alt="picnic comunity"
                    loading="lazy"
                    width={700}
                    height={400}
                />
            </section>

            <section id='principios'>
                <h2 className='title mt-16 '>¿CUÁLES SON NUESTROS PRINCIPIOS?</h2>

                <ol className='list-decimal flex flex-col gap-2 mt-2 *:list-inside leading-7 text-sm lg:text-xl font-normal my-2 lg:mt-6 lg:mb-8'>
                    <li><strong>Inclusión y respeto:</strong> Creemos que los intereses de las personas trans venezolanas deben de ser escuchados, atendidos, visibilizados y defendidos.</li>
                    <li><strong>Solidaridad:</strong> Fomentamos la unión y el bienestar de la población trans venezolana.</li>
                    <li><strong>Empoderamiento y apoyo mutuo:</strong> El apoyo social es nuestra principal herramienta.</li>
                </ol>
            </section>

            <section>
                <h2 className='title mt-16'
                    id='comonosfinanciamos'>¿CÓMO NOS FINANCIAMOS?</h2>
                <p className='leading-7 text-sm lg:text-xl font-normal my-2 lg:mt-6 lg:mb-8'>
                    Los fondos financieros con lo que funciona TAFAB son obtenidos de forma autogestionada, a través de obsequios privados y colaboraciones con otras organizaciones. Si quieres apoyar nuestra nuestra causa, puedes realizar un obsequio a través del siguiente botón
                </p>
                <div className="my-12">
                    <Link
                        href='/donar'
                        alt="Formulario"
                        className="bg-[#FABF74] text-[#484848] py-5 px-10 hover:bg-bth-blue"
                    >
                        ¡Quiero donar!
                    </Link>
                </div>
            </section>

            <section>
                <h2 className='title mt-16'
                    id='comonosfinanciamos'>¿A QUÉ DESTINAMOS NUESTROS RECURSOS?</h2>
                <p className='leading-7 text-sm lg:text-xl font-normal my-2 lg:mt-6 lg:mb-8'>
                    Aproximadamente, el 70% de los gastos de TAFAB van destinados a la financiación de los proyectos y la realización de actividades; el restante se destina a labores administrativas,  mantenimiento y crecimiento de la organización.
                </p>
            </section>

            <section>
                <h2 className='title mt-16'
                    id='comonosfinanciamos'>NUESTRA BASE COMUNITARIA</h2>
                <p className='leading-7 text-sm lg:text-xl font-normal my-2 lg:mt-6 lg:mb-8'>
                    Contamos con una red de al menos 250 personas trans alrededor de todo el país, quienes han recibido distintos tipos de atención, de forma virtual y presencial. 
                </p>
            </section>
        </main>
    )
}

export default page