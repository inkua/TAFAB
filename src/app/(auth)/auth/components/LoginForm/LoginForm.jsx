'use client'
import Swal from 'sweetalert2';

import { useState } from 'react';
import { useRouter } from "next/navigation";

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            await fetch('/api/auth/', {
                method: 'POST',
                body: JSON.stringify({
                    email: email, password: password,
                }),
            }).then(response => {
                if (response.ok) {
                    router.push('/admin');
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Credenciales inválidas',
                        icon: 'error',
                    });
                }
            }).catch(() => {
                Swal.fire({
                    title: 'Error!',
                    text: 'Error en el servidor. Por favor, inténtalo de nuevo más tarde.',
                    icon: 'error',
                });
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!email) newErrors.email = 'El correo electrónico es obligatorio';
        else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Ingresa un correo electrónico válido';

        if (!password) newErrors.password = 'La contraseña es obligatoria';
        else if (password.length < 6) newErrors.password = 'La contraseña debe tener al menos 6 caracteres';

        if (Object.keys(newErrors).length > 0) {
            const errorMessages = Object.values(newErrors).join('\n');
            Swal.fire({
                title: 'Campos incompletos',
                text: errorMessages,
                icon: 'warning',
            });
            return false;
        }
        return true;
    };

    return (
        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
                <div className="text-center">
                    <div className="flex justify-center mx-auto">
                        <img className="w-auto h-16 md:h-24 bg-white" src="/auth/logoAuth.jpg" alt="Logo" />
                    </div>
                    <p className="mt-3 text-[#4A3D5B]">Inicia sesión para acceder a tu cuenta</p>
                </div>

                <div className="mt-8">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm text-[#4A3D5B]">Correo Electrónico</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="ejemplo@correo.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>

                        <div className="mt-6">
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm text-[#4A3D5B]">Contraseña</label>
                            </div>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Tu Contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>

                        <div className="mt-6">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                Iniciar sesión
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
