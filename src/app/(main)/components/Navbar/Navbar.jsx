import Link from "next/link"

function Navbar() {

    const links = [
        { label: 'Nosotros', route: '/nosotros' },
        { label: 'Proyectos', route: '/proyectos' },
        { label: 'Infórmate', route: '/informate' },
        { label: 'Preguntas Frecuentes', route: '/informate' },
        { label: 'Cómo ayudar', route: '/informate' },

    ]

    return (
        <header className='flex flex-col w-full'>
            <div className="bg-primary p-mobile md:p-tablet flex gap-16 items-center justify-center text-text-white font-semibold text-lg">
                <p>Buscamos los derechos y bienestar de personas trans de nuestro país</p>
                <button className="flex gap-2 items-center px-mobile border-2 border-white">
                    <img src="/assets/Flag.jpg" alt="Bandera orgullo trans" />
                    <span>
                        Sé miembro de nuestra comunidad
                    </span>
                </button>
            </div>
            <img className="w-full" src="/assets/bandera.jpg" alt="Bandera orgullo trans" />
            <nav className="flex justify-center items-center gap-16 p-mobile m-auto text-xl font-semibold">
                <img className="w-28"
                    src="/auth/logoAuth.jpg"
                    alt="logo" />
                <ul className="flex flex-1 gap-16 justify-center">
                    {links.map((link) => {
                        return <li key={link.route}>
                            <Link
                                href={link.route}>
                                {link.label}
                            </Link>
                        </li>
                    })}
                </ul>
                <button className="flex gap-2 items-center bg-btn-purple p-5 text-white rounded-lg">
                    <span>
                        Doná a nuestra comunidad
                    </span>
                    <img src="/assets/Heart.jpg" alt="Corazon orgullo trans" />
                </button>
            </nav>
        </header>
    )
}

export default Navbar
