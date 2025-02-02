import { getDateFormated } from "@/utils/getDate";
import { useEffect, useState } from "react";

const VideoForm = ({ isOpen, setIsOpen, saveVideo, data, add = true }) => {
    const [formValues, setFormValues] = useState({
        title: "",
        type: "Privado",
        status: "Activo",
        videoUrl: "",
        description: "",
    });

    const [id, setId] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newData = { ...formValues };

        if (add) {
            newData.date = getDateFormated()
            saveVideo(newData);
        } else {
            saveVideo({ newData, id: id });
        }

        setFormValues({
            title: "",
            type: "Privado",
            status: "Activo",
            videoUrl: "",
            description: "",
        })

        setIsOpen(false);
    };

    useEffect(() => {
        if (data) {
            setFormValues({
                title: data.title || "",
                type: data.type || "Privado",
                status: data.status || "Activo",
                videoUrl: data.videoUrl || "",
                description: data.description || "",
            });
            setId(data.id);
        }
    }, [data]);
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 p-4">
                    <div className="bg-white text-black rounded-lg p-6 shadow-lg w-full md:w-[500px] lg:w-[900px] max-h-[95vh] overflow-y-auto">
                        <h2 className="text-xl font-bold mb-4">
                            {add ? "Nuevo registro de video" : "Actualizar registro de video"}
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                <div>
                                    <label className="text-black" htmlFor="title">
                                        Titulo:
                                    </label>
                                    <input
                                        id="title"
                                        name="title"
                                        value={formValues.title}
                                        onChange={handleChange}
                                        type="text"
                                        required
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                                    />
                                </div>
                                <div>
                                    <label className="text-black" htmlFor="videoUrl">
                                        Video URL:
                                    </label>
                                    <input
                                        id="videoUrl"
                                        name="videoUrl"
                                        value={formValues.videoUrl}
                                        onChange={handleChange}
                                        type="text"
                                        required
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                                    />
                                </div>
                                <div>
                                    <label className="text-black" htmlFor="status">
                                        Estado:
                                    </label>
                                    <select
                                        id="status"
                                        name="status"
                                        value={formValues.status}
                                        onChange={handleChange}
                                        required
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                                    >
                                        <option value="Activo">Activo</option>
                                        <option value="Desactivado">Desactivado</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-black" htmlFor="type">
                                        Tipo:
                                    </label>
                                    <select
                                        id="type"
                                        name="type"
                                        value={formValues.type}
                                        onChange={handleChange}
                                        required
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                                    >
                                        <option value="Privado">Privado</option>
                                        <option value="Público">Público</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-6 mt-4">
                                <div>
                                    <label className="text-black" htmlFor="description">
                                        Descripción:
                                    </label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        rows="5"
                                        value={formValues.description}
                                        onChange={handleChange}
                                        required
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end space-x-4 pt-4">
                                <button
                                    type="submit"
                                    className="flex items-center px-4 py-2 font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500">
                                    <span className="mx-1">{add ? "Guardar" : "Actualizar"}</span>
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center px-4 py-2 font-medium text-white bg-red-600 rounded-lg hover:bg-red-500">
                                    <span className="mx-1">Cancelar</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default VideoForm
