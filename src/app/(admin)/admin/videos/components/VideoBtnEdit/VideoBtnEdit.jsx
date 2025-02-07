"use client"

import { useState } from "react";
import BlockingOverlay from "@/app/components/BlockingOverlay/BlockingOverlay";
import VideoForm from "../VideoForm/VideoForm";
import { reloadPage } from "../../../componets/utils";
import { useRouter } from "next/navigation";
import { useToast } from "@/utils/toast";

const VideoBtnEdit = ({ data, open, setOpen, disabled = false }) => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false);
    const { showToast } = useToast()

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
                showToast({ type: "success", message: 'Operación exitosa' })
            } else {
                showToast({ type: 'error', message: 'No se pudo realizar la operación!' })
            }

        } catch (error) {
            showToast({ type: 'error', message: 'No se pudo realizar la operación!' })

        } finally {
            setIsLoading(false);
            reloadPage(router)
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
