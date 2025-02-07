import { useState } from "react";
import BlockingOverlay from "@/app/components/BlockingOverlay/BlockingOverlay";
import { reloadPage } from "../../../componets/utils";
import { useRouter } from "next/navigation";
import { useConfirmDialog } from "@/utils/hooks/useConfirmDialog";
import { useToast } from "@/utils/toast";

const NewBtnDelete = ({ nid }) => {
    const [isLoading, setIsLoading] = useState(false);
    const { confirm, ConfirmDialogComponent } = useConfirmDialog();
    const { showToast } = useToast()
    const router = useRouter()

    const handlerDelete = async () => {
        const isConfirmed = await confirm();
        if (isConfirmed) {
            setIsLoading(true);

            try {
                const URL = `/api/news`
                const response = await fetch(URL, {
                    method: "DELETE",
                    body: JSON.stringify({
                        data: nid
                    }),
                });

                const data = await response.json();

                if (data.data) {
                    showToast({ type: "success", message: 'Artículo eliminado!' })
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
                onClick={() => handlerDelete()}
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

export default NewBtnDelete
