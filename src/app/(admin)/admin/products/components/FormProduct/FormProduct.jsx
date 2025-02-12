"use client"

import { useEffect, useState } from 'react';
import { uploadImage } from '@/DAO/container';

function FormProduct({ isOpen, setIsOpen, saveData, data, add = true }) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [id, setId] = useState("");
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null)

    const handleChangeImage = (e) => {
        if (e.target.files[0]) {
            const file = e.target.files[0];
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        let imageUrl = ""

        if (image) {
            imageUrl = await uploadImage(image, 'products')
        }

        const newData = {
            name,
            price,
            category,
            description,
            imageUrl,
        }

        if (add) {
            saveData(newData)
        } else {
            saveData({ newData, id: id })
        }

        setName('')
        setPrice('')
        setCategory('')
        setDescription('')
        setImage(null)

        setIsOpen(false)
    }

    //DRAG AND DROP

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDragEnter = (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.currentTarget.classList.add("bg-gray-200");
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.currentTarget.classList.remove("bg-gray-200");
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.currentTarget.classList.remove("bg-gray-200");

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const file = e.dataTransfer.files[0];
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    //CLEAR FORM

    const handleClear = () => {
        setName('');
        setPrice('');
        setCategory('');
        setDescription('');
        setImage(null);
        setImagePreview(null);
        setId('');
        setIsOpen(false); // También cierra el formulario
    };


    useEffect(() => {
        if (data) {
            setName(data.name)
            setPrice(data.price)
            setCategory(data.category)
            setDescription(data.description)
            setId(data.id)
        }
    }, [])



    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-auto">
                        <div className="flex justify-between items-center p-6 border-b">
                            <h2 className="text-xl font-semibold text-gray-900">{add ? "Agregar Producto" : "Modificar Producto"}</h2>
                            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-500 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <form className="w-full" onSubmit={(e) => handleSubmit(e)}>
                            <div className="p-6 space-y-6">
                                <div className="space-y-2">
                                    <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
                                        Nombre
                                    </label>
                                    <input
                                        type="text"
                                        id="productName"
                                        name="productName"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Ingresa nombre del producto"
                                        required
                                        className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="productPrice" className="block text-sm font-medium text-gray-700">
                                        Precio
                                    </label>
                                    <input
                                        type="number"
                                        id="productPrice"
                                        name="productPrice"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        placeholder="0.00"
                                        required
                                        className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="productCategory" className="block text-sm font-medium text-gray-700">
                                        Categoria
                                    </label>
                                    <input
                                        type="text"
                                        id="productCategory"
                                        name="productCategory"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        placeholder="Ingresa categoria del producto"
                                        required
                                        className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="productDescription" className="block text-sm font-medium text-gray-700">
                                        Descripción
                                    </label>
                                    <textarea
                                        id="productDescription"
                                        name="productDescription"
                                        rows={3}
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        placeholder="Ingresa descripción"
                                        className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    ></textarea>
                                </div>


                                <div
                                    className="flex items-center justify-center w-full"
                                    onDragOver={handleDragOver}
                                    onDragEnter={handleDragEnter}
                                    onDragLeave={handleDragLeave}
                                    onDrop={handleDrop}
                                >
                                    <label
                                        htmlFor="dropzone-file"
                                        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                                    >
                                        {imagePreview ? (
                                            <div className='relative z-10'>
                                                <img
                                                    src={imagePreview}
                                                    alt="Preview"
                                                    className="object-contain w-full h-full rounded-lg"
                                                />
                                                <button
                                                    className="absolute flex items-center justify-center top-3 right-3 bg-gray-400/50 hover:bg-slate-300/75 transition-colors duration-200 h-10 w-10 rounded-full text-center"
                                                    onClick={(e) => {
                                                        setImagePreview(null);
                                                    }}
                                                >
                                                    <span className="text-black font-bold">X</span>
                                                </button>
                                            </div>

                                        ) : (
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <svg
                                                    className="w-8 h-8 mb-4 text-gray-500"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 20 16"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                                    />
                                                </svg>
                                                <p className="mb-2 text-sm text-gray-800">
                                                    <span className="font-semibold">Click to upload</span> or drag
                                                    and drop
                                                </p>
                                                <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                            </div>
                                        )}
                                        <input
                                            id="dropzone-file"
                                            type="file"
                                            accept="image/*"
                                            onChange={handleChangeImage}
                                            className="hidden"
                                        />
                                    </label>
                                </div>

                            </div>

                            <div className="flex justify-end space-x-4 p-6 border-t">
                                <button
                                    onClick={handleClear}
                                    type='button'
                                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    {add ? "Guardar Producto" : "Editar Producto"}
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            )}
        </>
    )
}

export default FormProduct
