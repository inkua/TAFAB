import Link from "next/link"
import Preguntas from "./components/Preguntas"

const faqs = [
    {
        question: "No tengo con quien hablar de esto en mi entorno, ¿Qué puedo hacer?",
        answer: (<>
            Desde Trans AFAB Venezuela tenemos diferentes espacios de convivencia, como la comunidad de WhatsApp y nuestras diferentes actividades tanto presenciales dentro de los estados donde contamos con alcance presencial (por los momentos Dist. Capital, Falcón, Carabobo y Maracay) como las virtuales. Puedes saber más de esto{" "}
            <a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
            >
                aquí
            </a>.
        </>)
    },
    {
        question: "Quiero comenzar mi transición hormonal, ¿Me pueden ayudar?",
        answer: (<>
            ¡Sí! Actualmente contamos con acompañamiento y monitoreo alrededor de la terapia de reemplazo hormonal (TRH). Podemos informarte y responder las dudas que tengas como acompañarte a lo largo de este trayecto. Estamos construyendo un equipo médico para brindar atención integral, pero por lo momentos contamos directamente con un médico y referimos a los demás especialistas, varios siendo miembros de la fundación Unitrans. Para más información puedes contactarnos al {" "}
            <a
                href="https://wa.me/584260364005"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
            >
                Whatsapp
            </a>.
        </>)
    },
    {
        question: "Quiero cambiar mi nombre legal y mis documentos de identidad, ¿Me pueden apoyar?",
        answer: "Lastimosamente por los momentos existe una negligencia por parte del Estado en cuanto a la aprobación del cambio de nombres a personas trans. Desde el 15 de septiembre de 2009 se ha estado denunciando que a pesar de la existencia del artículo 146 en la Ley Orgánica del Registro Civil que valora el cambio de nombre por razones de género, este no se aplica a personas trans. Sin embargo, estamos activamente haciendo presión a las instituciones y estamos dispuestos a apoyar cualquier acción que busque conseguir esto."
    },
    {
        question: "Quiero comprar prendas y artículos que afirmen quién soy, ¿Dónde puedo conseguirlos?",
        answer: (<>
            ¡Conocemos diferentes espacios! <br />
            <a href="https://wa.me/c/584242540207"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline">Guayaba Store
            </a>: Para conseguir binders (fajas que ayudan a ocultar el pecho), también crean banderas en diferentes presentaciones para elevar ese orgullo que sientes, boxers con efecto packer para simular un bulto y cinta kinesiologica para aplanar el pecho. Además, es una tienda totalmente gestionada por personas trans y realizan envíos a todo el país. <br />
            <a href="https://www.instagram.com/fajasamaris?igsh=MXgxcGtyZTd1YXZvag=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline">
                FajaSamaris</a>: Es otra tienda que crea binders, pero además varias otras fajas para moldear tu cuerpo de la manera que desees.<br /> Puedes revisar el comentario de Tristán Key al respecto {" "}
            <a href="https://vm.tiktok.com/ZMk1KQaKt/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline">
                aquí</a>. <br />Además, tenemos un directorio con diversos emprendedores que está regularmente actualizado. Lo puedes ver {" "}
            <a href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTg1NTkwNjM5NjM0NTcw?story_media_id=3336347527094048532_60982122627&igsh=MTN2bHZ1eTYyZno2dw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline">
                aquí</a>.
        </>),
    },
    {
        question: "¿Que significa AFAB?",
        answer: "Son siglas para decir Assigned Female At Birth, que traducido al español sería Asignade Femenine Al Nacer. Es decir, al momento de nacer lo más probable es que lo hicieras con vulva y los médicos y tu familia te declarara del sexo femenino. Una situación que nos llamó la atención al momento de crear estos espacios ha sido la invisibilización de las personas trans AFAB, es por ello que buscamos traer esa conversación a través de nuestro mismo nombre, aún cuando al final del día trabajamos en colectividad con toda la comunidad trans."
    },
    {
        question: "¿Cómo puedo formar parte de TAFAB?",
        answer: "Desde participar como usuarie a querer empezar a organizarte dentro del movimiento por nuestros bienestar y derechos, puedes unirte a través de nuestros espacios aquí (redirigir a la sección de Sé parte de la comunidad), donde podrás empezar a articular dentro de nuestras actividades. Desde TAFAB consideramos que cualquier persona es valiosa dentro de la comunidad, por ende si deseas estar activamente dentro de la colectiva, puedes unirte como Voluntarie, ofreciendo tu tiempo y talento dentro de nuestros espacios para la realización de actividades."
    },
    {
        question: "Estoy siendo violentado por mi familia y/o mi pareja, ¿donde puedo buscar ayuda?",
        answer: "Aunque desde TAFAB realizamos acompañamiento, es necesario entender que el alcance que contamos para estos casos está limitado a la escucha activa y amorosa, primeros auxilios psicológicos y contención emocional. Redirigimos a organizaciones de nuestra confianza como el Observatorio de Violencias LGBTIQ+, Tinta Violeta y algunos otros para obtener apoyo psicológico individual y asesoría legal en caso de desear realizar una denuncia. Es importante que sepas que no estas sole, ni es tu culpa."
    },
    {
        question: "Sufrí una violencia en la calle o en una institución ¿qué puedo hacer?",
        answer: "¡No estás sole! Pueden buscar apoyo en las anteriores organizaciones mencionadas o escribirnos para ser derivades a estas."
    }
]


export default function FAQSection() {

    return (
        <main className="px-mobile md:px-tablet w-full xl:max-w-top min-[1500px]:px-0 lg:mx-auto *:mb-[45px] lg:*:mb-[70px]">
            <section>
                <h2 className="title mb-6">PREGUNTAS FRECUENTES</h2>
                <Preguntas list={faqs} />
            </section>

            <section>
                <div className="flex flex-row items-center justify-between mb-9">
                    <h1 className="title">TU OPINIÓN CUENTA</h1>
                    <div className="bg-tertiary h-1 w-full min-w-[20%] max-w-[55%] ml-4"></div>
                </div>
                <p className='leading-8 text-sm md:text-base lg:text-xl font-light mb-4' >
                Tu voz es importante para nosotros. Usa nuestro buzón para enviar denuncias, resolver dudas o compartir sugerencias de manera segura y confidencial.
                </p>

                <div className="my-12">
                    <Link
                        href='https://forms.gle/FuqH24a31HzaskY97'
                        alt="Formulario"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#FABF74] text-[#484848] py-5 px-10 hover:bg-bth-blue"
                    >
                        Escribenos aquí
                    </Link>
                </div>


            </section>
        </main>
    )
}

