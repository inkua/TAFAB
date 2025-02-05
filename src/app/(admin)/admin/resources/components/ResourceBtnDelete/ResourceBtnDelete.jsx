"use client"

import { useState } from "react";
import BlockingOverlay from "../../../componets/BlockingOverlay/BlockingOverlay";

const ResourceBtnDelete = ({ rid }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handlerDelete = async (e) => {
        e.preventDefault()

        if (confirm("Desea eliminar el registro?")) {

            setIsLoading(true);

            try {
                const URL = `/api/resources`
                const response = await fetch(URL, {
                    method: "DELETE",
                    body: JSON.stringify({
                        data: rid
                    }),
                });

                const data = await response.json();

                if (data.data) {
                    alert("Operación Exitosa!");
                } else {
                    alert("No se pudo realizar la operación!");
                }
            } catch (error) {
                alert("No se pudo realizar la operación!");

            } finally {
                setIsLoading(false);
            }

        }
    }

    return (
        <>
            <BlockingOverlay isLoading={isLoading} />

            <button
                onClick={(e) => handlerDelete(e)}
                className={`block px-4 py-2 text-sm text-gray-700 hover:underline `}
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
            >
                Eliminar
            </button>
        </>
    )
}

export default ResourceBtnDelete
