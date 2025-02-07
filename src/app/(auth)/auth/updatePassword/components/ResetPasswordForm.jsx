"use client";

import { useToast } from "@/utils/toast";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

function ResetPasswordForm() {
    const emailRef = useRef(null);
    const currentPswRef = useRef(null);

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState("");

    const { showToast } = useToast()

    const router = useRouter();

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

    const validateForm = () => {
        let newErrors = "";
        let isValid = true;

        const email = emailRef.current?.value;
        const currentPassword = currentPswRef.current?.value;

        if (!email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            newErrors = "Debe ingresar un correo válido.";
            isValid = false;
        }

        if (!currentPassword) {
            newErrors = "Debe ingresar su contraseña actual/provisional.";
            isValid = false;
        }

        if (!passwordRegex.test(password)) {
            newErrors =
                "La nueva contraseña debe tener al menos 8 caracteres, incluir una letra mayúscula, una letra minúscula y un número.";
            isValid = false;
        } else if (password !== confirmPassword) {
            newErrors = "Las contraseñas no coinciden.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const data = {
                    email: emailRef.current.value,
                    currentPass: currentPswRef.current.value,
                    newPass: password,
                };
    
                const response = await fetch("/api/admins/pass/change", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });
    
                const result = await response.json();
    
                if (result.data) {
                    showToast({type:'success', message:'operación exitosa, puedes ingresar a la plataforma desde el login con tu nueva contraseña', time:4000})
                    router.push("/auth")
                } else {
                    showToast({type:'error', message:'No se pudo realizar la operación, verifique los campos.', time:4000})
                }
            } catch (error) {
                showToast({type:'error', message:'No se pudo realizar la operación, verifique los campos.', time:4000})
            }

        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-6">
                <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600 "
                >
                    Correo
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Correo asociado a su cuenta"
                    ref={emailRef}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>

            <div className="mb-6">
                <label
                    htmlFor="currentPassword"
                    className="block mb-2 text-sm text-gray-600 "
                >
                    Contraseña actual/provisional
                </label>
                <input
                    type="text"
                    name="currentPassword"
                    id="currentPassword"
                    placeholder="Su contraseña"
                    ref={currentPswRef}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>

            <div className="mb-6">
                <label
                    htmlFor="password"
                    className="block mb-2 text-sm text-gray-600 "
                >
                    Nueva contraseña
                </label>
                <input
                    type="text"
                    name="password"
                    id="password"
                    placeholder="Ingrese su nueva contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>

            <div className="mb-6">
                <label
                    htmlFor="confirmPassword"
                    className="block mb-2 text-sm text-gray-600 "
                >
                    Confirmar contraseña
                </label>
                <input
                    type="text"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirme su nueva contraseña"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors && <p className="mt-1 text-sm text-red-500">{errors}</p>}
            </div>

            <div className="mt-6">
                <button
                    type="submit"
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                    Cambiar contraseña
                </button>
            </div>
        </form>
    );
}

export default ResetPasswordForm;
