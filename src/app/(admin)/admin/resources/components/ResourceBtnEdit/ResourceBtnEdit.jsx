"use client"

import { useState } from "react";
import ResourceForm from "../ResourceForm/ResourceForm";
import BlockingOverlay from "../../../componets/BlockingOverlay/BlockingOverlay";

const ResourceBtnEdit = ({ data, open, setOpen, disabled = false }) => {
    const [isLoading, setIsLoading] = useState(false);

    const setData = async (newData, rid) => {
        setIsLoading(true)

        try {
            const URL = `/api/resources`
            const response = await fetch(URL, {
                method: "PUT",
                body: JSON.stringify({
                    data: newData,
                    id: rid
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
    return (
        <>
            <BlockingOverlay isLoading={isLoading} />

            <button
                onClick={() => setOpen(true)}
                className={`block px-4 py-2 text-sm ${disabled ? "text-gray-400" : "text-gray-700 hover:underline"} `}
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
                disabled={disabled}>
                Editar
            </button>

            <ResourceForm
                isOpen={open}
                setIsOpen={setOpen}
                saveResource={setData}
                data={data}
                add={false}
            />
        </>
    )
}

export default ResourceBtnEdit
