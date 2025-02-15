import Tutorials from './componets/Tutorials/Tutorials'
import Link from 'next/link'

function Index() {
    return (
        <>
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Panel Administrativo</h1>
                    <div className='flex justify-end'>
                        <Link 
                            className='underline text-btn-purple'
                            href='/'
                            alt="go home"
                        >Ir al sitio web</Link>
                    </div>
                </div>
            </header>
            <main className="container mx-auto mt-1 max-w-7xl px-4 sm:px-6 lg:px-8">
                <Tutorials />
            </main>
        </>
    )
}

export default Index
