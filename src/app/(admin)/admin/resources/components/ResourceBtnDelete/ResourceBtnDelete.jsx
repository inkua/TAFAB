"use client"

import { useState } from "react";
import BlockingOverlay from "@/app/components/BlockingOverlay/BlockingOverlay";
import { reloadPage } from "../../../componets/utils";
import { useRouter } from "next/navigation";
import { useConfirmDialog } from "@/utils/hooks/useConfirmDialog";
import { useToast } from "@/utils/toast";

const ResourceBtnDelete = ({ rid }) => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter()
    const { confirm, ConfirmDialogComponent } = useConfirmDialog();
    const { showToast } = useToast()


    const handlerDelete = async (e) => {
        e.preventDefault()
        const isConfirmed = await confirm();

        if (isConfirmed) {

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
                    showToast({ message: 'Recurso eliminado!' })
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
    }

    return (
        <>
            {ConfirmDialogComponent}
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
