"use client";

import { useToast } from "@/utils/toast";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import DOMPurify from "dompurify";
import * as yup from "yup";

const schema = yup.object().shape({
    email: yup.string().email("Correo inválido").required("Debe ingresar un correo válido."),
    currentPassword: yup.string().required("Debe ingresar su contraseña actual/provisional."),
    newPassword: yup
        .string()
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
            "La nueva contraseña debe tener al menos 8 caracteres, incluir una letra mayúscula, una letra minúscula y un número."
        )
        .required("Debe ingresar una nueva contraseña."),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('newPassword'), null], 'Las contraseñas no coinciden.')
        .required("Debe confirmar la nueva contraseña."),
});


function ResetPasswordForm() {
    const emailRef = useRef(null);
    const currentPswRef = useRef(null);

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState("");

    const { showToast } = useToast()

    const router = useRouter();

    const validateForm = () => {
        const email = emailRef.current?.value;
        const currentPassword = currentPswRef.current?.value;
    
        const formData = {
            email,
            currentPassword,
            newPassword: password,
            confirmPassword,
        };
    
        try {
            schema.validateSync(formData, { abortEarly: false });
            setErrors("");
            return true;
        } catch (err) {
            if (err.inner && err.inner.length > 0) {
                setErrors(err.inner[0].message); // solo mostrar el primer error
            } else {
                setErrors("Error de validación.");
            }
            return false;
        }
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const data = {
                    email: DOMPurify.sanitize(emailRef.current.value),
                    currentPass: DOMPurify.sanitize(currentPswRef.current.value),
                    newPass: DOMPurify.sanitize(password),
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
