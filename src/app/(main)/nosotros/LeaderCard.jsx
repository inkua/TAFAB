
import { Disclosure,DisclosureButton,DisclosurePanel } from "@headlessui/react"


function LeaderCard() {
 return(


  <section className="hidden md:flex md:flex-col">
   {/* div lder */}
  <div className='w-full  flex flex-col '>
 
  <h3  className='mt-10 text-2xl  md:text-4xl text-text-dark mb-2'>Samara Sereno</h3>
 
 {/* container article  */}
  <div className='grid  tablet:grid-cols-1 md:grid-cols-2 gap-9'>
 
    <article className='flex flex-col md:flex-row justify-center items-center gap-4'>
      <img src="https://via.placeholder.com/329x153" alt="" />
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
 
  <h3  className='mt-10 text-2xl  md:text-4xl text-text-dark mb-2'>Dani Brito</h3>
 
 {/* container article  */}
  <div className='grid md:grid-cols-2 gap-9'>
 
    <article className='flex flex-col md:flex-row justify-center items-center gap-4'>
      <img src="https://via.placeholder.com/329x153" alt="" />
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
 
  <h3  className='mt-10 text-2xl  md:text-4xl text-text-dark mb-2'>D. F.</h3>
 
 {/* container article  */}
  <div className='grid md:grid-cols-2 gap-9'>
 
    <article className='flex flex-col md:flex-row justify-center items-center gap-4'>
      <img src="https://via.placeholder.com/329x153" alt="" />
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
    
  
  </section>
 )
   
  }
  
  export default LeaderCard