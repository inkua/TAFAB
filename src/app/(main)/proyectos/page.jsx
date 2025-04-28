import Image from 'next/image';
import Link from 'next/link';

import NoticiaImg from '../articulos/components/NoticiaImg';

const list = [
    {
        titulo: "Programa de asistencia socioeconómica",
        descripcion: "Dividido en Círculos comunitarios LGBTQ y asistencia directa a personas en situación de emergencia.",
        imagen: "/proyectos/closet.webp",
    },
    {
        titulo: "Programa de atención psicosocial",
        descripcion: "Dividido en grupos de apoyo psicológico, grupos terapéuticos, terapia grupal focalizada y atención psicológica individual.",
        imagen: "/proyectos/atencion.webp",
        seccionId: 'acompañamientopisicosocial'
    },
    {
        titulo: "Programa de educación y visibilización",
        descripcion: "Cubre todos los eventos relacionados a talleres, diálogos, conversatorios y el podcast Voces Trans.",
        imagen: "/proyectos/educacion.webp",
    },
    {
        titulo: "Programa de incidencia pública y activismo de calle",
        descripcion: "Abarca todo lo relacionado a ferias de sensibilización, actividades artísticas, diseño y redacción de propuestas de leyes y derechos.",
        imagen: "/proyectos/incidencia.webp",
    },
    {
        titulo: "Investigación y documentación sobre violaciones de DDHH y condiciones de vida de la población Trans",
        descripcion: "Este proyecto se enfoca en la realización de investigaciones sobre temas clave que permitan avanzar en el reconocimiento y garantía de DDHH.",
        imagen: "/proyectos/documentacion.webp",
    },
    {
        titulo: "Programa de atención en salud Trans",
        descripcion: "Dividido en desarrollo de guías de normatización y atención en general y prestaciones de servicios de salud general para personas Trans.",
        imagen: "/proyectos/salud.webp",
    },
];
const Proyectos = () => {

    return (
        <main className='px-mobile md:px-tablet w-full xl:max-w-top min-[1500px]:px-0 lg:mx-auto *:mb-[45px] lg:*:mb-[70px]'>

            <section className="font-sans w-full">
                <h1 className="title mb-4">NUESTROS PROYECTOS</h1>
                <p className="mb-6 font-light leading-8 text-sm md:text-base lg:text-xl">
                    Durante el 2024 Trans AFAB Venezuela (TAFAB) logró ampliar su impacto en la población LGBTIQ+ venezolana. Además, dicho año fue clave para demostrar el compromiso por parte del equipo de trabajo y sus capacidades operativas para afrontar cada desafío. Durante el transcurso de los meses, la organización impactó directamente, entre 250 a 300 personas de forma directa, a través de cada uno de los proyectos ejecutados; y, de forma indirecta, a más de 350 personas alrededor del país.
                </p>

                <div className='flex flex-col w-full h-max gap-[32px] lg:grid lg:grid-cols-3'>
                    <div className='bg-[#F4F4F4] px-[19px] py-[30px]'>
                        <NoticiaImg imgUrl="/proyectos/atencion.webp" title="asistencia sanitaria" />

                        <h2 className='text-lg font-extrabold uppercase mb-[10px]'>Asistencia Sanitaria</h2>
                        <p className='font-normal text-4 mb-[10px]'>El proyecto de asistencia sanitaria de la Fundación Trans AFAB brinda atención médica y psicológica a personas LGBTIQ+, especialmente a la población trans, desde un enfoque libre de estigmas y con perspectiva de género.</p>

                        <Link
                            href={`/proyectos/asistencia-sanitaria`}
                            className='bg-[#FABF74] w-full block text-center text-base lg:text-lg py-2 lg:py-4 px-12 hover:bg-btn-pink mt-4'
                        >Ver más</Link>
                    </div>

                    <div className='bg-[#F4F4F4] px-[19px] py-[30px]'>
                        <NoticiaImg imgUrl="/proyectos/closet.webp" title="closet comunitario" />

                        <h2 className='text-lg font-extrabold uppercase mb-[10px]'>Asistencia socioeconómica</h2>
                        <p className='font-normal text-4 mb-[10px]'>Son proyectos enfocados alrededor del acceso a recursos de diversas índoles; a través de estos se brindan recursos materiales y financieros a personas en situación de emergencia o vulnerabilidad económica.</p>

                        <Link
                            href={`/proyectos/asistencia-socioeconomica`}
                            className='bg-[#FABF74] w-full block text-center text-base lg:text-lg py-2 lg:py-4 px-12 hover:bg-btn-pink mt-4'
                        >Ver más</Link>
                    </div>

                    <div className='bg-[#F4F4F4] px-[19px] py-[30px] flex flex-col'>
                        <NoticiaImg imgUrl="/proyectos/incidencia.webp" title="educación" />

                        <h2 className='text-lg font-extrabold uppercase mb-[10px]'>Educación y sensibilización</h2>
                        <p className='font-normal text-4 mb-[10px]'>Esta área de acción incluye proyectos y actividades enfocadas en educar y visibilizar sobre la historia de vida y experiencias de las personas trans en Venezuela</p>

                        <Link
                            href={`/proyectos/educacion-sensibilizacion`}
                            className='bg-[#FABF74] w-full block text-center text-base lg:text-lg py-2 lg:py-4 px-12 hover:bg-btn-pink mt-auto'
                        >Ver más</Link>
                    </div>
                    
                </div>
            </section>
        </main>
    );
};

export default Proyectos;
