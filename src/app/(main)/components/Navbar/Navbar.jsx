'use client'
import { useState } from "react";
import Link from "next/link";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (menu) => {
        setActiveDropdown(activeDropdown === menu ? null : menu);
    };

    const menuItems = [
        {
            name: "Nosotros",
            href: "/nosotros",
            dropdownItems: [
                {
                    name: "Item1",
                    href: "/nosotros#item1"
                },
                {
                    name: "Item2",
                    href: "/nosotros#item2"
                },
            ],
        },

        {
            name: "Proyectos",
            href: "/proyectos",
            dropdownItems: [
                {
                    name: "Item1",
                    href: "/proyectos#item1"
                },
                {
                    name: "Item2",
                    href: "/proyectos#item2"
                },
            ],
        },
        {
            name: "Infórmate",
            href: "/informate"
        },
        {
            name: "Preguntas frecuentes",
            href: "/preguntasfrecuentes"
        },
        {
            name: "Cómo ayudar",
            href: "/comoayudar"
        },
    ];

    return (
        <header className="flex flex-col">
            {/* Top Banner */}
            <div className="bg-primary p-mobile lg:p-8 flex flex-col lg:flex-row gap-4 text-center items-center justify-center text-text-white font-semibold text-lg">
                <p>Defendemos los derechos y el bienestar de las personas Trans en Venezuela y el mundo</p>
                <button className="flex gap-2 items-center px-mobile border-2 border-white my-5 lg:my-0">
                    <img src="/assets/Flag.jpg" alt="Bandera orgullo trans" />
                    <span>Sé miembro de nuestra comunidad</span>
                </button>
            </div>

            <img className="w-full"
                src="/assets/bandera.jpg"
                alt="Bandera orgullo trans" />

            {/* Desktop Navigation */}
            <nav className="hidden p-tablet justify-center items-center gap-9 lg:flex">
                <Link href={'/'}>
                    <img className="w-28"
                        src="/auth/logoAuth.jpg"
                        alt="logo" />
                </Link>
                <ul className="flex w-2/3 gap-9 justify-center">
                    {menuItems.map((item) => (
                        <li key={item.name} className="relative inline-flex items-cente font-semibold text-xl text-gray-700">
                            <Link className="border-b-4 border-transparent hover:border-tertiary transition-colors duration-150"
                                href={item.href}>{item.name}
                            </Link>
                            <button
                                className="inline-block"
                                onClick={() => item.dropdownItems && toggleDropdown(item.name)}
                            >
                                {item.dropdownItems && (
                                    <svg
                                        className={`ml-1 h-5 w-5 transition-transform duration-200 stroke-primary ${activeDropdown === item.name ? "rotate-180" : ""
                                            }`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={3}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                )}
                            </button>

                            {/* Dropdown Menu */}
                            {item.dropdownItems && activeDropdown === item.name && (
                                <div className="absolute left-0 top-5 mt-2 w-48 origin-top-left rounded-md bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5">
                                    {item.dropdownItems.map((dropdownItem) => (
                                        <Link
                                            key={dropdownItem.name}
                                            href={dropdownItem.href}
                                            className="block px-4 py-2 text-lg text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                                        >
                                            {dropdownItem.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
                <button className="flex text-lg px-5 gap-2 items-center bg-btn-purple p-5 text-white">
                    <span>
                        Haz un donativo
                    </span>
                    <img src="/assets/Heart.jpg" alt="Corazon orgullo trans" />
                </button>
            </nav>

            {/* Mobile Navigation */}
            <div className="flex justify-between p-mobile items-center lg:hidden">
                <Link href={'/'}>
                    <img className="w-20"
                        src="/auth/logoAuth.jpg"
                        alt="logo" />
                </Link>
                <button className="flex text-lg gap-2 items-center bg-btn-purple py-1 px-3 text-white">
                    <span>
                        Haz un donativo
                    </span>
                    <img src="/assets/Heart.jpg" alt="Corazon orgullo trans" />
                </button>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                >
                    <span className="sr-only">Abrir menú principal</span>
                    {!isOpen ? (
                        <svg
                            className="block h-12 w-12 stroke-btn-purple"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="3"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="absolute top-2 right-2 z-10 h-12 w-12 stroke-btn-purple"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="3"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Dropdown */}
            <div className={`${isOpen ? "absolute w-full bg-primary" : "hidden"} lg:hidden`}>
                <div className="space-y-1 pb-3 pt-2">
                    <ul className="flex flex-col gap-10 pt-10">
                        {menuItems.map((item) => (
                        <li key={item.name}
                            className="text-2xl font-semibold text-white w-full items-center pl-10 py-2 list-none">
                            <Link href={item.href}>
                                {item.name}
                            </Link>
                            <button
                                onClick={() => item.dropdownItems && toggleDropdown(item.name)}
                            >
                                {item.dropdownItems && (
                                    <svg
                                        className={`ml-2 h-5 w-5 transition-transform duration-200 stroke-btn-purple ${activeDropdown === item.name ? "rotate-180" : ""
                                            }`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={5}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                )}
                            </button>
                            {item.dropdownItems && activeDropdown === item.name && (
                                <div className="px-4 py-2">
                                    {item.dropdownItems.map((dropdownItem) => (
                                        <Link
                                            key={dropdownItem.name}
                                            href={dropdownItem.href}
                                            className="block px-4 py-2 text-xl"
                                        >
                                            {dropdownItem.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
