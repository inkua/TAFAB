"use client"

import { useToast } from "@/utils/toast";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import DOMPurify from "dompurify";

// Esquema de validación con yup
const schema = yup.object().shape({
    nombre: yup.string().required("El nombre es obligatorio"),
    correo: yup.string().email("Correo inválido").required("El correo es obligatorio"),
    mensaje: yup.string().required("El mensaje es obligatorio"),
});

const FormContact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });
    const { showToast } = useToast()

    const onSubmit = async (data) => {

        // Sanitizar los datos
        const values = {
            name: DOMPurify.sanitize(data.nombre),
            email: DOMPurify.sanitize(data.correo),
            content: DOMPurify.sanitize(data.mensaje)
        };

        const response = await fetch('/api/mail', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data: values }),
        })

        if (response.ok) {
            showToast({ type: 'success', message: '¡Tu consulta ha sido enviada con éxito!' })
            reset()
        } else {
            showToast({ type: 'error', message: 'No pudimos enviar tu consulta. Inténtalo nuevamente.' })
        }


        reset(); // Opcional: limpiar el formulario después de enviar
    };

    return (
        <form className="mt-4 lg:max-w-[550px] 2xl:max-w-[660px]" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex-1">
                <label className="block mb-2 text-md text-white">Nombre</label>
                <input
                    type="text"
                    {...register("nombre")}
                    placeholder="tu nombre"
                    className="block w-full px-5 py-1 lg:py-2 mt-2 text-gray-700 bg-white border border-gray-200 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                />
                {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre.message}</p>}
            </div>

            <div className="flex-1 mt-6">
                <label className="block mb-2 text-md text-white">Correo</label>
                <input
                    type="email"
                    {...register("correo")}
                    placeholder="tu correo"
                    className="block w-full px-5 py-1 lg:py-2 mt-2 text-gray-700 bg-white border border-gray-200 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                />
                {errors.correo && <p className="text-red-500 text-sm mt-1">{errors.correo.message}</p>}
            </div>

            <div className="w-full mt-6">
                <label className="block mb-2 text-md text-white">Mensaje</label>
                <textarea
                    {...register("mensaje")}
                    className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-200 md:h-48 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                    placeholder="texto"
                ></textarea>
                {errors.mensaje && <p className="text-red-500 text-sm mt-1">{errors.mensaje.message}</p>}
            </div>

            <button type="submit" className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-btn-purple">
                ENVIAR MENSAJE
            </button>
        </form>
    );
};

export default FormContact;
