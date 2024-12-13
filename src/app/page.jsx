import React from 'react';
import Carrousel from './components/Carrousel';
import CarrouselCard from './components/CarrouselCard';

function Page() {
  const projects = [
    { img: '/Frame11.svg', title: `Acompañamiento\npsicosocial` },
    { img: '/Frame12.svg', title: `Closet comunitario` },
    { img: '/Frame13.svg', title: `Visualizaciones\nen redes` },
    { img: '/Frame14.svg', title: `Incidencia pública` },
  ];

  const videos = [
    {
      img: '/video1.svg',
      title: `SER TRANS Y LA ACADEMIA...`,
      date: 'Setiembre 12, 2025.',
      text: 'Si eres una persona Trans y necesitas apoyo o quieres más información sobre lo que hacemos en Trans AFAB Venezuela...',
    },
    {
      img: '/Video2.svg',
      title: `SER TRANS Y LA ACADEMIA...`,
      date: 'Setiembre 12, 2025.',
      text: 'Si eres una persona Trans y necesitas apoyo o quieres más información sobre lo que hacemos en Trans AFAB Venezuela...',
    },
    {
      img: '/Video3.svg',
      title: `SER TRANS Y LA ACADEMIA...`,
      date: 'Setiembre 12, 2025.',
      text: 'Si eres una persona Trans y necesitas apoyo o quieres más información sobre lo que hacemos en Trans AFAB Venezuela...',
    },
  ];

  return (
    <section className="w-[95%] px-4 mx-auto">
      {/* Carrousel Section */}
      <Carrousel />

      <h2 className="font-extrabold text-text-dark text-2xl md:text-3xl mt-16 mb-16 text-center">
        NUESTROS PRÓXIMOS EVENTOS
      </h2>

      <CarrouselCard />

      {/* Banner */}
      <div className="w-full md:w-[90%] mx-auto mt-10 md:mt-28">
        <img src="/bannerwhatsapp.svg" alt="banner" className="w-full" />
      </div>

      {/* Projects Section */}
      <div className="mt-16 w-full flex flex-wrap justify-center gap-4 md:gap-8">
        {projects.map((project, index) => (
          <div key={index} className="text-center w-full sm:w-[45%] lg:w-[22%]">
            <img src={project.img} alt={project.title} className="h-auto w-full max-h-[294px] mx-auto object-cover" />
            <div className="w-full bg-btn-pink text-center py-2">
              <h3 className="text-lg font-semibold uppercase text-white">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Second Banner */}
      <div className="w-full md:w-[90%] mx-auto mt-10 md:mt-28">
        <img src="/bannerrecursos.svg" alt="banner" className="w-full" />
      </div>

      {/* News Section */}
      <h2 className="font-extrabold text-text-dark text-2xl md:text-3xl mt-16 mb-16 text-center">
        ÚLTIMAS NOTICIAS
      </h2>

      <CarrouselCard />

      {/* Videos Section */}
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-between items-center w-[90%] mx-auto">
          <h2 className="font-extrabold text-text-dark text-2xl md:text-3xl mt-16 mb-8 md:mb-16">
            ÚLTIMOS VIDEOS SUBIDOS
          </h2>
          <div className="hidden md:block w-[55%] h-1 bg-bth-blue"></div>
        </div>

        <section className="flex flex-wrap justify-center gap-4 md:gap-8 w-full md:w-[90%] mx-auto">
          {videos.map((video, key) => (
            <div key={key} className="w-full sm:w-[45%] lg:w-[30%]">
              <img src={video.img} alt={video.title} className="w-full h-auto" />
              <div className="flex flex-col mt-4 gap-2">
                <div className="flex flex-wrap gap-3 items-center">
                  <h4 className="font-bold text-lg">{video.title}</h4>
                  <span className="text-sm text-slate-500">{video.date}</span>
                </div>
                <p className="text-sm text-justify">{video.text}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
}

export default Page;
