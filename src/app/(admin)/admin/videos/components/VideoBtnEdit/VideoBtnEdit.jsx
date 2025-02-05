"use client"

import { useState } from "react";
import BlockingOverlay from "../../../componets/BlockingOverlay/BlockingOverlay";
import VideoForm from "../VideoForm/VideoForm";

const VideoBtnEdit = ({ data, open, setOpen, disabled = false }) => {
    const [isLoading, setIsLoading] = useState(false);

    const setData = async (newData, vid) => {
        setIsLoading(true);

        try {
            const URL = `/api/videos`
            const response = await fetch(URL, {
                method: "PUT",
                body: JSON.stringify({
                    data: newData,
                    id: vid
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

            <VideoForm
                isOpen={open}
                setIsOpen={setOpen}
                saveVideo={setData}
                data={data}
                add={false}
            />
        </>
    )
}

export default VideoBtnEdit
