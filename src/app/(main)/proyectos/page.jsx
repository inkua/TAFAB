import Image from 'next/image';
import React from 'react';

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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.
                </p>
                <div className="flex flex-col gap-8" role='list'>
                    {list.map((proyecto, index) => (
                        <div
                            id={proyecto.seccionId}
                            key={index}
                            className="flex flex-col md:flex-row  items-center gap-4 pb-4"
                            role='listitem'
                        >
                            <Image
                                src={proyecto.imagen}
                                alt={proyecto.titulo}
                                width={600}
                                loading='lazy'
                                height={600}
                                className="md:w-[263px] lg:w-[363px] w-full h-auto aspect-video rounded-sm object-cover"
                            />
                            <div>
                                <h2 className="text-base md:text-xlg lg:text-2xl font-bold mb-2 text-text-dark">{proyecto.titulo}</h2>
                                <p className="font-light leading-8 text-sm md:text-base lg:text-xl">{proyecto.descripcion}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Proyectos;
