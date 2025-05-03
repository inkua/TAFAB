export const metadata = {
    title: "Asistencia Sanitaria | TAFAB",
    description: "El proyecto de asistencia sanitaria de la Fundación Trans AFAB brinda atención médica y psicológica a personas LGBTIQ+, especialmente a la población trans, desde un enfoque libre de estigmas y con perspectiva de género.",
}

function page() {
    return (
        <main className='px-mobile md:px-tablet w-full xl:max-w-top min-[1500px]:px-0 lg:mx-auto *:mb-[45px] lg:*:mb-[70px]'>
            <section className="w-full flex flex-col md:flex-row md:items-center">
                <div className="flex-1">
                    <h1 className="title mb-4">Asistencia Sanitaria</h1>
                    <p className="mb-6 font-light leading-8 text-base md:text-lg lg:text-xl">El proyecto de asistencia sanitaria de la Fundación Trans AFAB brinda atención médica y psicológica a personas LGBTIQ+, especialmente a la población trans, desde un enfoque libre de estigmas y con perspectiva de género.</p>
                </div>

                <img
                    className="flex-1 w-full max-h-[300px] aspect-video object-contain md:pl-8"
                    src="/proyectos/atencion.webp"
                    alt="asistencia sanitaria" 
                />
            </section>

            <section id="atencion-psicologica">
                <div className="flex flex-row items-center justify-between mb-9">
                    <h2 className="title">Programa de atención psicológica</h2>
                    <div className="bg-tertiary h-1 w-full min-w-[20%] max-w-[55%] ml-4"></div>
                </div>
                <p className="mb-6 font-light leading-8 text-sm md:text-base lg:text-xl">Son proyectos, actividades y servicios dedicados a brindar apoyo psicológico a toda la población LGBTIQ+. Actualmente, llevamos a cabo lo siguiente:</p>
                <ul className="text-primary text-base md:text-lg font-normal italic pl-4 border-l-8 border-l-primary border-l-solid leading-7 mb-4 md:mb-7">
                    <li className="mb-5"> <strong className="not-italic text-black text-lg lg:text-xl">Grupos de apoyo psicológico:</strong> Son grupos de apoyo general para la población LGBTIQ+. Se realizan de forma presencial en distintas localidades y de forma digital, a través de distintas plataformas digitales. Cada grupo cuenta con un psicólogo, sensibilizado en diversidad sexual y de género; y, dentro de este espacio, se trabajan temas en común para todos los presentes, ya sea discriminación, aceptación familiar, procesos de reemplazo hormonal, entre otros.</li>
                    <li className="mb-5"> <strong className="not-italic text-black text-lg lg:text-xl">Grupos terapéuticos:</strong> Es una terapia grupal, destinada a personas que no pueden costear terapia individual, con sesiones establecidas y acompañamiento psicológico; en este espacio se busca tocar a profundidad temas que los grupos de apoyo, por su propia naturaleza, no permiten, ya que su finalidad es el autoconocimiento, la exploración del trauma y la obtención de herramientas que le permitan a los asistentes desenvolverse mejor en la sociedad.</li>
                    <li className="mb-5"> <strong className="not-italic text-black text-lg lg:text-xl">Terapia grupal focalizada:</strong> Es una terapia grupal en formato presencial, con una cantidad de sesiones establecida y destinada a abordar temas sensibles, ya sea abuso sexual, violencia de género, etc. A diferencia de los grupos terapéuticos, esta se destina a un tema en específico y en la sanación de los traumas causados por un evento en particular.</li>
                    <li className="mb-5"> <strong className="not-italic text-black text-lg lg:text-xl">Atención psicológica individual:</strong> Mediante una red de psicologues sensibilizades al rededor del país, TAFAB ofrece un número fijo de sesiones sin costo o con un costo muy accesible para personas de la comunidad, de manera individual. </li>
                </ul>

                <p className="mb-6 font-light leading-8 text-sm md:text-base lg:text-xl">Cabe destacar que, cada psicólogue aliade a TAFAB es una persona que pertenece a la comunidad LGBTIQ+, por lo cual, existe mayor probabilidad de comprensión empática y vivencial hacia las experiencias y desafíos que enfrenta la población que atienden, permitiendo una conexión más profunda y una validación intrínseca de las vivencias de cada beneficiario. Por último, TAFAB se asegura que cada profesional esté familiarizado con los modelos teóricos contemporáneos, la terminología específica y las problemáticas particulares que afectan a la población LGBTIQ+ venezolana, como la discriminación internalizada, el estrés de las minorías, los procesos de transición y la homofobia/transfobia.</p>
                <p className="mb-6 font-light leading-8 text-sm md:text-base lg:text-xl">Todo esto se traduce en una intervención más informada y sensible a las necesidades específicas del consultor.</p>

                <p className="mb-6 font-bold leading-8 text-sm md:text-base lg:text-xl">Para conocer cuándo será el próximo grupo consulta nuestro instagram como @transafabvzla</p>
                <p className="mb-6 font-bold leading-8 text-sm md:text-base lg:text-xl">Si quieres recibir atención psicológica individualizada, escríbenos al +58 426-0364005 o al +58 412-7112532</p>
            </section>

            <section id="salud-fisica">
                <div className="flex flex-row items-center justify-between mb-9">
                    <h2 className="title">Programa de salud física</h2>
                    <div className="bg-tertiary h-1 w-full min-w-[20%] max-w-[55%] ml-4"></div>
                </div>
                <p className="mb-6 font-light leading-8 text-sm md:text-base lg:text-xl">Son proyectos, actividades y servicios de salud que permiten a las personas trans tener un espacio no estigmatizante ni patologizante. Actualmente, las áreas que se abarcamos son las siguientes:</p>
                <ul className="text-primary text-base md:text-lg font-normal italic pl-4 border-l-8 border-l-primary border-l-solid leading-7 mb-4 md:mb-7">
                    <li className="mb-5"> <strong className="not-italic text-black text-lg lg:text-xl">Guías de hormonización y salud en general:</strong> De la mano con profesionales médicos, estamos desarrollando guías de atención sanitaria para que las personas tengan acceso a procesos de hormonización a nivel nacional, junto con acompañamiento individualizado. Además, creamos guías de salud general para personas trans en el contexto venezolano y un directorio de dichos profesionales; para que tanto profesionales como personas trans puedan informarse sobre los estándares básicos en materia de terapias de reemplazo hormonal y salud integral.</li>
                    <li className="mb-5"> <strong className="not-italic text-black text-lg lg:text-xl">Servicios de Salud general:</strong> A la fecha, brindamos atención de salud general y especializada con profesionales sensibilizados, de forma gratuita en jornadas sanitarias y a bajo costo, con previa cita.</li>
                </ul>
                <p className="mb-6 font-light leading-8 text-sm md:text-base lg:text-xl">Con el programa de salud física no solo nos enfocamos en acercar terapias de reemplazo hormonal a la población trans, sino en brindar servicios sanitarios no discriminatorios, con la finalidad de evitar complicaciones de salud no relacionadas con la transición médica.</p>
                <p className="mb-6 font-bold leading-8 text-sm md:text-base lg:text-xl">Para conocer cuándo será la próxima jornada médica consulta nuestro instagram como @transafabvzla</p>
                <p className="mb-6 font-bold leading-8 text-sm md:text-base lg:text-xl">Si quieres recibir atención médica a bajo costo escríbenos al +58 426-0364005 o al +58 412-7112532</p>
            </section>

        </main>
    )
}

export default page
