function Navbar() {
    return (
        <header className='flex flex-col w-full'>
            <div className="bg-primary p-mobile flex gap-16 items-center justify-center text-text-white font-semibold text-lg">
                <p>Buscamos los derechos y bienestar de personas trans de nuestro país</p>
                <button className="px-mobile border-2 border-white">
                    <span>
                        Sé miembro de nuestra comunidad
                    </span>
                </button>
            </div>
            <nav className="flex justify-center items-center gap-16 p-mobile w-3/5 m-auto text-xl font-semibold">
                <img className="w-28"
                    src="/auth/logoAuth.jpg"
                    alt="logo" />
                <ul className="flex flex-1 gap-16 justify-center">
                    <li>Home</li>
                    <li>Nosotros</li>
                    <li>Informate</li>

                </ul>
                <button className="bg-btn-purple p-mobile text-white rounded-lg">
                    Doná a nuestra comunidad
                </button>
            </nav>
        </header>
    )
}

export default Navbar
