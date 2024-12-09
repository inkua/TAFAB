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
            name: "Nosotros", href: "/nosotros",
            dropdownItems: [
                { name: "Item1", href: "/proyectos#item1" },
                { name: "Item2", href: "/proyectos#item2" },
            ],
        },

        {
            name: "Proyectos", href: "/proyectos",
            dropdownItems: [
                { name: "Item1", href: "/proyectos#item1" },
                { name: "Item2", href: "/proyectos#item2" },
            ],
        },
        { name: "Infórmate", href: "/informate" },
        { name: "Preguntas frecuentes", href: "/preguntasfrecuentes" },
        { name: "Como ayudar", href: "/comoayudar" },
    ];

    return (
        <header className="flex flex-col">
            {/* Top Banner */}
            <div className="bg-primary p-mobile lg:p-10 flex flex-col lg:flex-row gap-4 text-center items-center justify-center text-text-white font-semibold text-lg">
                <p>Defendemos los derechos y el bienestar de las personas Trans en Venezuela y el mundo</p>
                <button className="flex gap-2 items-center px-mobile border-2 border-white">
                    <img src="/assets/Flag.jpg" alt="Bandera orgullo trans" />
                    <span>Sé miembro de nuestra comunidad</span>
                </button>
            </div>

            <img className="w-full" src="/assets/bandera.jpg" alt="Bandera orgullo trans" />

            {/* Desktop Navigation */}
            <nav className="hidden p-tablet justify-center items-center gap-9 lg:flex">
                <img className="w-28"
                    src="/auth/logoAuth.jpg"
                    alt="logo" />
                <ul className="flex flex-1 gap-9 justify-center">
                    {menuItems.map((item) => (
                        <li key={item.name} className="relative inline-block">
                            <button
                                className="inline-flex items-center font-semibold text-xl text-gray-700 hover:text-purple-600"
                                onClick={() => item.dropdownItems && toggleDropdown(item.name)}
                            >
                                {item.name}
                                {item.dropdownItems && (
                                    <svg
                                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === item.name ? "rotate-180" : ""
                                            }`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                )}
                            </button>

                            {/* Dropdown Menu */}
                            {item.dropdownItems && activeDropdown === item.name && (
                                <div className="absolute left-0 mt-2 w-48 origin-top-left rounded-md bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5">
                                    {item.dropdownItems.map((dropdownItem) => (
                                        <Link
                                            key={dropdownItem.name}
                                            href={dropdownItem.href}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
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
            <div className="flex items-center lg:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                >
                    <span className="sr-only">Abrir menú principal</span>
                    {!isOpen ? (
                        <svg
                            className="block h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
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
                            className="block h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
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
            <div className={`${isOpen ? "block" : "hidden"} lg:hidden`}>
                <div className="space-y-1 pb-3 pt-2">
                    {menuItems.map((item) => (
                        <div key={item.name}>
                            <button
                                className="flex w-full items-center px-4 py-2 text-base font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                                onClick={() => item.dropdownItems && toggleDropdown(item.name)}
                            >
                                {item.name}
                                {item.dropdownItems && (
                                    <svg
                                        className={`ml-auto h-4 w-4 transition-transform duration-200 ${activeDropdown === item.name ? "rotate-180" : ""
                                            }`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                )}
                            </button>
                            {item.dropdownItems && activeDropdown === item.name && (
                                <div className="bg-gray-50 px-4 py-2">
                                    {item.dropdownItems.map((dropdownItem) => (
                                        <Link
                                            key={dropdownItem.name}
                                            href={dropdownItem.href}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:text-purple-600"
                                        >
                                            {dropdownItem.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </header>
    );
}

export default Navbar;
