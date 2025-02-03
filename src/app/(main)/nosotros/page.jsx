import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import React from 'react'
import LeaderCard from './LeaderCard'

function page() {
  return (
    <section className='w-full flex flex-col justify-center '>

      <div className='w-full flex mt-16 justify-center items-center'>

        <img className='w-[80%] h-[300px] md:w-1/2    lg:w-[80%]  ' src="Frame50.svg" alt="" />

      </div>

      <div className='mt-16  w-[75%] m-auto  flex flex-col gap-8  '  >
        <h1 className='font-extrabold text-2xl  md:text-3xl text-text-dark ' >¿QUIÉNES SOMOS?</h1>


        <p className='leading-8' >Somos una colectiva cuyo propósito es crear un espacio seguro y organizado para que la población Transgénero (Trans) venezolana esté  informada, acompañada y asistida, sin importar ubicación o condición socioeconómica de cada individue.
          Dicha iniciativa surge con la finalidad de evitar que las personas trans de Venezuela estén aisladas entre sí y poder brindarles un lugar a donde recurrir con sus dudas e inquietudes de una manera casual y sin sentirse bajo escrutinio, con la opción de permanecer en anonimato si así se deseara.</p>



        <Disclosure >
          <DisclosureButton className="py-2 px-2 bg-btn-pink  text-text-dark underline uppercase  md:hidden block">Ver más contenido</DisclosureButton>
          <DisclosurePanel >
            <p className=" leading-8">
              Nos caracterizamos por ser una colectiva dirigida por y para personas trans. Con nuestro nombre deseamos visibilizar a la comunidad trans disidente del género femenino asignado al nacer (Trans AFAB). Sin embargo, nuestros proyectos también incluyen y están enfocados en la comunidad trans disidente del género masculino asignado al nacer (Trans AMAB). Por último, en algunas regiones de Venezuela no existen organizaciones LGBTIQ+ que incidan localmente, por lo cual hemos abierto algunos espacios seguros que incluyen a toda la comunidad LGBTIQ+ venezolana, para que ninguna persona gay, lesbiana, bisexual, trans, intersex o queer esté aislada y excluida.
            </p>
          </DisclosurePanel>
        </Disclosure>

        <p className="hidden md:block leading-8">
          Nos caracterizamos por ser una colectiva dirigida por y para personas trans. Con nuestro nombre deseamos visibilizar a la comunidad trans disidente del género femenino asignado al nacer (Trans AFAB). Sin embargo, nuestros proyectos también incluyen y están enfocados en la comunidad trans disidente del género masculino asignado al nacer (Trans AMAB). Por último, en algunas regiones de Venezuela no existen organizaciones LGBTIQ+ que incidan localmente, por lo cual hemos abierto algunos espacios seguros que incluyen a toda la comunidad LGBTIQ+ venezolana, para que ninguna persona gay, lesbiana, bisexual, trans, intersex o queer esté aislada y excluida.
        </p>


        <div className='grid gap-6   md:grid-cols-2 w-full' >

          <div className='flex flex-col md:flex-row  gap-3 justify-center'>
            <img className='w-full md:w-1/2 lg:w-1/3' src="/Frame51.svg" alt="" />
            <div>
              <h3 className='text-text-dark font-extrabold  text-3xl  mt-3'
                id='misionyvision'>MISIÓN </h3>
              <p className='leading-6'>Construir redes de apoyo, asistir, visibilizar, defender el bienestar psicosocial de las personas Trans venezolanas y sus DDHH</p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-3  justify-center  '>
            <img className='w-full md:w-1/2 lg:w-1/3' src="/Frame52.svg" alt="" />
            <div >
              <h3 className='text-text-dark font-extrabold text-3xl mt-3'>VISIÓN  </h3>
              <p className='leading-6  '>Ser una organización con alcance nacional e internacional, que genere una red de apoyo que  promueva y acompañe el bienestar Psicosocial de las personas Transgénero y el alcance de sus DDHH, que mejore sus contextos y les permita  generar sus propias iniciativas de solidaridad Trans.</p>
            </div>
          </div>

        </div>
      </div>


      <section id='dirigencia'>
        {/* container  */}
        <main className='w-[90%] m-auto  flex-wrap' >
          {/* div lder */}
          <h2 className='font-extrabold text-text-dark text-2xl  md:text-3xl mt-16'>QUIÉN ES NUESTRA DIRIGENCIA</h2>

          <div className='w-full flex flex-col  '>
            <h3 className='mt-10 text-2xl  md:text-4xl text-text-dark mb-2'>Jonah Daniel Sira</h3>

            {/* container article  */}
            <div className='grid md:grid-cols-2 gap-9'>

              <article className='flex flex-col md:flex-row justify-center items-center gap-4'>
                <img src="/Frame56.svg" alt="" />


                <p className='leading-6 font-semibold'>Hombre transgénero y No Binarie nacido en Coro, Falcón. Estudiante universitario, defensor de Derechos Humanos y cofundador de Trans AFAB Venezuela. Actualmente es codirector de la organización.</p>
              </article>

              <div className='text-start border border-tertiary p-5 hidden md:flex'>

                <p className='leading-6 '>“Las personas Trans tenemos Derecho a ocupar espacios y a alzar la voz ante cualquier muestra de discriminación. Somos personas que desde la pobreza y la marginalidad social debemos seguir luchando por alcanzar nuestros derechos, si no lo hacemos nosotros, ¿Quién lo hará?”.  Jonah Sira.</p>

              </div>
              <div className='md:hidden'>
                <Disclosure>
                  <DisclosureButton className="py-2 px-2 bg-tertiary text-slate-600">Las personas Trans...  ver más</DisclosureButton>
                  <DisclosurePanel className="text-gray-500">
                    tenemos Derecho a ocupar espacios y a alzar la voz ante cualquier muestra de discriminación. Somos personas que desde la pobreza y la marginalidad social debemos seguir luchando por alcanzar nuestros derechos, si no lo hacemos nosotros, ¿Quién lo hará?”.  Jonah Sira.
                  </DisclosurePanel>
                </Disclosure>
              </div>


            </div>

          </div>
          {/* div lder */}
          <div className='w-full  flex flex-col '>

            <h3 className='mt-10 text-2xl  md:text-4xl text-text-dark mb-2'>Kallum Olortegui</h3>

            {/* container article  */}
            <div className='grid md:grid-cols-2 gap-9'>

              <article className='flex flex-col md:flex-row justify-center items-center gap-4'>
                <img src="/Frame57.svg" alt="" />
                <p className='leading-6 font-semibold'>Hombre transgénero. Estudiante de psicología en la Universidad Central de Venezuela, activista por los Derechos Humanos de la comunidad LGBTIQ+ y Cofundador de Trans AFAB Venezuela. Actualmente es codirector y tesorero de la organización.</p>
              </article>

              <div className='text-start border border-tertiary p-5 hidden md:flex'>

                <p className='leading-6'>“Entendí que si no encuentro espacios a los que pertenecer, yo los crearé. No sólo, nunca sólo, pero en colaboración y en compañía a través de la solidaridad y la ternura, la comunicación y responsabilidad. Que nuestra venganza sea no la violencia, si no nuestra felicidad y bienestar”.  Kallum Olortegui.</p>

              </div>
              <div className='md:hidden'>
                <Disclosure>
                  <DisclosureButton className="py-2 px-2 bg-tertiary text-slate-600">Entendí que si no...  ver más</DisclosureButton>
                  <DisclosurePanel className="text-gray-500">
                    encuentro espacios a los que pertenecer, yo los crearé. No sólo, nunca sólo, pero en colaboración y en compañía a través de la solidaridad y la ternura, la comunicación y responsabilidad. Que nuestra venganza sea no la violencia, si no nuestra felicidad y bienestar”.  Kallum Olortegui.
                  </DisclosurePanel>
                </Disclosure>


              </div>






              {/* ////////////////////////////////////////////////////////////////////////////////////////////// */}
              <Disclosure>
                <DisclosureButton className="py-2 px-2 bg-btn-pink  text-text-dark underline  md:hidden block">VER MÁS CONTENIDO</DisclosureButton>
                <DisclosurePanel className="text-gray-500">
                  {/* div lder */}
                  <div className='w-full  flex flex-col  '>

                    <h3 className='mt-10 text-2xl  md:text-4xl text-text-dark mb-2'>Samara Sereno</h3>

                    {/* container article  */}
                    <div className='grid md:grid-cols-2 gap-9'>

                      <article className='flex flex-col md:flex-row justify-center items-center gap-4'>
                        <img src="/Frame58.svg" alt="" />
                        <p className='leading-6 font-semibold'>Mujer Trans. Artista, artesana y activista por los Derechos Humanos de las personas LGBTIQ+. Actualmente es vocal de la junta directiva y coordinadora regional para el estado Aragua.</p>
                      </article>

                      <div className='text-start border border-tertiary p-5 hidden md:flex'>

                        <p className='leading-6'>“Hoy soy libre y sigo descubriendo quien soy realmente después de tantos años, el activismo me da fuerzas para continuar en esta ‘guerra’ diaria de ser yo”.  S. Sereno</p>

                      </div>

                      <div className='md:hidden'>
                        <Disclosure>
                          <DisclosureButton className="py-2 px-2 bg-tertiary text-slate-600">“Hoy soy libre...  ver más</DisclosureButton>
                          <DisclosurePanel className="text-gray-500">
                            y sigo descubriendo quien soy realmente después de tantos años, el activismo me da fuerzas para continuar en esta ‘guerra’ diaria de ser yo”.  S. Sereno
                          </DisclosurePanel>
                        </Disclosure>
                      </div>


                    </div>

                  </div>
                  {/* div lder */}
                  <div className='w-full  flex flex-col  '>

                    <h3 className='mt-10 text-2xl  md:text-4xl text-text-dark mb-2'>Dani Brito</h3>

                    {/* container article  */}
                    <div className='grid md:grid-cols-2 gap-9'>

                      <article className='flex flex-col md:flex-row justify-center items-center gap-4'>
                        <img src="/Frame59.svg" alt="" />
                        <p className='leading-6 font-semibold'>Persona No Binarie. Artista, Drag Queen venezolana y activista por los Derechos Humanos de la comunidad LGBTIQ+. Actualmente es vocal de la junta directiva y coordinadora regional para el estado Carabobo.</p>
                      </article>

                      <div className='text-start border border-tertiary p-5 hidden md:flex'>

                        <p className='leading-6'>“Necesitaba este fuego, este deseo de luchar, de impulsar y trabajar por el progreso. Tengo un gran viaje delante de mí y solo puedo sentir ansias”.  Dani Brito</p>

                      </div>

                      <div className='md:hidden'>
                        <Disclosure>
                          <DisclosureButton className="py-2 px-2 bg-tertiary text-slate-600">“Necesitaba este fuego...  ver más</DisclosureButton>
                          <DisclosurePanel className="text-gray-500">
                            , este deseo de luchar, de impulsar y trabajar por el progreso. Tengo un gran viaje delante de mí y solo puedo sentir ansias”.  Dani Brito
                          </DisclosurePanel>
                        </Disclosure>
                      </div>


                    </div>

                  </div>
                  {/* div lder */}
                  <div className='w-full  flex flex-col '>

                    <h3 className='mt-10 text-2xl  md:text-4xl text-text-dark mb-2'>D. F.</h3>

                    {/* container article  */}
                    <div className='grid md:grid-cols-2 gap-9'>

                      <article className='flex flex-col md:flex-row justify-center items-center gap-4'>
                        <img src="/Frame60.svg" alt="" />
                        <p className='leading-6 font-semibold'>Hombre Trans. Estudiante universitario, músico e ilustrador. Actualmente es secretario de la junta directiva diseñador gráfico de TAFAB.</p>
                      </article>

                      <div className='text-start border border-tertiary p-5 hidden md:flex'>

                        <p className='leading-6'>"Pasé gran parte de mi vida con miedo de mí mismo y del rechazo. Ser yo requiere valentía pero también trajo alegría, y hoy soy amado por quién soy”. D. F.</p>

                      </div>
                      <div className='md:hidden'>
                        <Disclosure>
                          <DisclosureButton className="py-2 px-2 bg-tertiary text-slate-600">“Pasé gran parte...  ver más</DisclosureButton>
                          <DisclosurePanel className="text-gray-500">
                            de mi vida con miedo de mí mismo y del rechazo. Ser yo requiere valentía pero también trajo alegría, y hoy soy amado por quién soy”. D. F.
                          </DisclosurePanel>
                        </Disclosure>
                      </div>


                    </div>

                  </div>
                </DisclosurePanel>
              </Disclosure>

            </div>

          </div>

          <LeaderCard />

        </main>
      </section>


      <section className=' w-[85%] m-auto'
        id='comofuncionamos'>

        <h2 className='font-extrabold text-text-dark text-2xl  md:text-3xl mt-16'
          id='misionyvision'>¿COMO FUNCIONAMOS?</h2>
        <p className='leading-8 mt-2'>Actualmente, nuestra fuerza de trabajo es el voluntariado. Con más de 25 voluntarios alrededor del país, creamos alianzas profesionales con individuos que de manera altruista dedican su tiempo y esfuerzo a nuestra causa.
          Además, participamos conjuntamente con otras organizaciones de la sociedad civil en proyectos conjuntos, con el objetivo de ampliar nuestro alcance e impacto en la comunidad LGBTIQ venezolana.</p>


        <img className='m-auto w-full' src="/Frame61.svg" alt="" />


        <h2 className='font-extrabold text-text-dark text-2xl  md:text-3xl mt-16'>¿CUÁLES SON NUESTROS PRINCIPIOS?</h2>

        <h3 className='mt-2'
          id='principios'>¿Cuáles son nuestros principios?</h3>
        <ol className='list-decimal flex flex-col gap-2 mt-2'>
          <li>Inclusión y respeto: Creemos que los intereses de las personas trans venezolanas deben de ser escuchados, atendidos, visibilizados y defendidos.</li>
          <li>Solidaridad: Fomentamos la unión y el bienestar de la población trans venezolana.</li>
          <li>Empoderamiento y apoyo mutuo: El apoyo social es nuestra principal herramienta.</li>
        </ol>


        <h2 className='font-extrabold text-text-dark text-2xl  md:text-3xl mt-16'
        id='comonosfinanciamos'>¿CÓMO NOS FINANCIAMOS?</h2>

        <p className='leading-8 mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with de</p>


      </section>


    </section>
  )
}

export default page