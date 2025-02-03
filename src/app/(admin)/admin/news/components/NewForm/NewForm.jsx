import { getDateFormated } from "@/utils/getDate";
import { useEffect, useState } from "react";

const NewForm = ({ isOpen, setIsOpen, saveNew, data, add = true }) => {
    const [title, setTitle] = useState("")
    const [copy, setCopy] = useState("")
    const [article, setArticle] = useState("")
    const [status, setStatus] = useState("Activo")


    const [id, setId] = useState("");

    const allDataInput = () => {
        return {
            title,
            copy,
            article,
            status,
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newData = allDataInput()

        if (add) {
            newData.date = getDateFormated( )
            saveNew(newData);
        } else {
            saveNew({ newData, id: id });
        }

        setTitle("")
        setCopy("")
        setArticle("")
        setStatus("Activo")

        setIsOpen(false);
    }

    useEffect(() => {
        if (data) {
            setTitle(data.title || "")
            setCopy(data.copy || "")
            setArticle(data.article || "")
            setStatus(data.status || "Activo")
            setId(data.id);
        }
    }, [data])

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 p-4">
                    <div className="bg-white text-black rounded-lg p-6 shadow-lg w-full md:w-[500px] lg:w-[900px] max-h-[95vh] overflow-y-auto">
                        <h2 className="text-xl font-bold mb-4">
                            {add ? "Nuevo registro de adopción" : "Actualizar registro de adopción"}
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
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        type="text"
                                        required
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                                    />
                                </div>
                                <div>
                                    <label className="text-black" htmlFor="copy">
                                        Copy/Entradilla:
                                    </label>
                                    <input
                                        id="copy"
                                        name="copy"
                                        value={copy}
                                        onChange={(e) => setCopy(e.target.value)}
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
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                        required
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
                                    >
                                        <option value="Activo">Activo</option>
                                        <option value="Desactivado">Desactivado</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-6 mt-4">
                                <div>
                                    <label className="text-black" htmlFor="article">
                                        Artículo:
                                    </label>
                                    <textarea
                                        id="article"
                                        name="article"
                                        rows="5"
                                        value={article}
                                        onChange={(e) => setArticle(e.target.value)}

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

export default NewForm
