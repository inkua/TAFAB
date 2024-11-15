"use client"

import { useEffect, useState } from 'react'

function FormAdmin({ isOpen, setIsOpen, saveData, data, add = true }) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [id, setId] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const newData = {
            name,
            email,
        }

        if(add){
            saveData(newData)
        }else{
            saveData({newData, id:id})
        }

        setName('')
        setEmail('')

        setIsOpen(false)
    }

    useEffect(() => {
        if(data){
            setName(data.name)
            setEmail(data.email)
            setId(data.id)
        }
    }, [])



    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-auto">
                        <div className="flex justify-between items-center p-6 border-b">
                            <h2 className="text-xl font-semibold text-gray-900">{add ? "Agregar Administrador" : "Modificar Administrador"}</h2>
                            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-500 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <form className="w-full" onSubmit={(e) => handleSubmit(e)}>
                            <div className="p-6 space-y-6">
                                <div className="space-y-2">
                                    <label htmlFor="adminName" className="block text-sm font-medium text-gray-700">
                                        Nombre
                                    </label>
                                    <input
                                        type="text"
                                        id="adminName"
                                        name="adminName"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Ingresa nombre del administrador"
                                        required
                                        className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    />
                                </div>


                                <div className="space-y-2">
                                    <label htmlFor="adminEmail" className="block text-sm font-medium text-gray-700">
                                        Correo
                                    </label>
                                    <input
                                        type="email"
                                        id="adminEmail"
                                        name="adminEmail"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Ingresa el email del administrador"
                                        required
                                        className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end space-x-4 p-6 border-t">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    type='button'
                                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    {add ? "Guardar administrador" : "Editar administrador"}
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            )}
        </>
    )
}

export default FormAdmin
