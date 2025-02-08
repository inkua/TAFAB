import Image from "next/image"
import Link from "next/link"


const Proyectos = () => {
    const projects = [
        {id:1, imgUrl:'/home/proyectos/acompanamiento.webp', title:'Acompañamiento psicosocial', url:'/proyectos#'},
        {id:2, imgUrl:'/home/proyectos/closet.webp', title:'Closet comunitario', url:'/proyectos#'},
        {id:3, imgUrl:'/home/proyectos/redes.webp', title:'Visualización en redes', url:'/proyectos#'},
        {id:4, imgUrl:'/home/proyectos/insidencia.webp', title:'Insidencia pública', url:'/proyectos#'},
    ]
    return (
        <section className="bg-white" role="listbox">
            <div className=" flex flex-row items-center justify-between mb-9">
                <h2 className="title">PROYECTOS</h2>
                <div className="bg-tertiary h-1 w-full min-w-[20%] max-w-[55%] ml-4"></div>
            </div>

            <div className="overflow-x-scroll overflow-y-hidden flex flex-row gap-6 px-6"
                role="list"
            >

                {projects.map((project)=>(

                    <div className=" w-full min-w-[290px] lg:hover:scale-105 delay-150" role="listitem" key={project.id}>
                        <Link href={project.url} alt={project.title}>
                            <Image
                                className="aspect-square w-full"
                                src={project.imgUrl}
                                width={500}
                                height={500}
                                alt={project.title} />


                            <div className="bg-btn-pink h-[75px] flex items-center justify-center">
                                <h3 className=" text-white text-xl font-semibold text-center uppercase">
                                    {project.title}
                                </h3>
                            </div>
                        </Link>
                    </div>

                ))}

            </div>
        </section>
    )
}

export default Proyectos
