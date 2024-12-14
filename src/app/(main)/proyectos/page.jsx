import React from 'react';

const Proyectos = () => {
  const proyectos = [
    {
      titulo: "Programa de asistencia socioeconómica",
      descripcion: "Dividido en Círculos comunitarios LGBTQ y asistencia directa a personas en situación de emergencia.",
      imagen: "/Proyecto1.svg",
    },
    {
      titulo: "Programa de atención psicosocial",
      descripcion: "Dividido en grupos de apoyo psicológico, grupos terapéuticos, terapia grupal focalizada y atención psicológica individual.",
      imagen: "/Proyecto2.svg",
    },
    {
      titulo: "Programa de educación y visibilización",
      descripcion: "Cubre todos los eventos relacionados a talleres, diálogos, conversatorios y el podcast Voces Trans.",
      imagen: "/Proyecto3.svg",
    },
    {
      titulo: "Programa de incidencia pública y activismo de calle",
      descripcion: "Abarca todo lo relacionado a ferias de sensibilización, actividades artísticas, diseño y redacción de propuestas de leyes y derechos.",
      imagen: "/proyecto4.svg",
    },
    {
      titulo: "Investigación y documentación sobre violaciones de DDHH y condiciones de vida de la población Trans",
      descripcion: "Este proyecto se enfoca en la realización de investigaciones sobre temas clave que permitan avanzar en el reconocimiento y garantía de DDHH.",
      imagen: "/Proyecto5.svg",
    },
    {
      titulo: "Programa de atención en salud Trans",
      descripcion: "Dividido en desarrollo de guías de normatización y atención en general y prestaciones de servicios de salud general para personas Trans.",
      imagen: "/Proyecto6.svg",
    },
  ];

  return (
    <section className="p-6 font-sans w-full  md:w-[80%] m-auto ">
      <h1 className="md:text-2xl text-xl font-bold mb-4 text-text-dark">NUESTROS PROYECTOS</h1>
      <p className="mb-6 text-gray-700">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.
      </p>
      <div className="flex flex-col gap-8">
        {proyectos.map((proyecto, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row  items-center gap-4 border-b pb-4"
          >
            <img
              src={proyecto.imagen}
              alt={proyecto.titulo}
              className="md:w-[25%]  w-full h-auto rounded-lg"
            />
            <div >
              <h2 className="text-xl font-semibold mb-2">{proyecto.titulo}</h2>
              <p className="text-gray-600">{proyecto.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proyectos;
