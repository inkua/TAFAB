
"use client"

import { useToast } from "@/utils/toast"
import { useRouter } from "next/navigation"
import { useState } from "react";
import BlockingOverlay from "../../../componets/BlockingOverlay/BlockingOverlay";
import { reloadPage } from "../../../componets/utils";
import { useConfirmDialog } from "@/utils/hooks/useConfirmDialog";

function BtnDeleteEvent({ data }) {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false);
    const { confirm, ConfirmDialogComponent } = useConfirmDialog(); // Usa el hook
    const { showToast } = useToast()

    const deleteData = async () => {
        const isConfirmed = await confirm();

        if (isConfirmed) {
            setIsLoading(true);

            try {
                const response = await fetch(`/api/events`, {
                    method: 'DELETE',
                    body: JSON.stringify({
                        token: '',
                        id: data.id,
                        url: data.url,
                    }),
                });

                const responseData = await response.json();

                if (responseData.data) {
                    showToast({ type: "success", message: 'Evento eliminado!' })
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
            <button onClick={() => deleteData()} className="inline-flex px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 w-full" role="menuitem" tabIndex="-1" id="menu-item-0">Eliminar</button>
        </>
    )

}

export default BtnDeleteEvent;
