"use client";

import { useToast } from "@/utils/toast";
import { reloadPage } from "../../../componets/utils";
import { useRouter } from "next/navigation";
import BlockingOverlay from "../../../componets/BlockingOverlay/BlockingOverlay";
import { useState } from "react";

function AdminBtnDelete({ data, disabled = false }) {
    const { id } = data
    const [isLoading, setIsLoading] = useState(false);
    const { showToast } = useToast()
    const router = useRouter()


    const handleConfirm = () => {
        if (confirm('Confirma eliminar usuario?')) {
            return deleteData()
        };
        return 0;
    };

    const deleteData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`/api/admins`, {
                method: "DELETE",
                body: JSON.stringify({
                    id: id,
                }),
            });

            const result = await response.json();

            if (result.status == 200) {
                showToast({ message: 'Administrador eliminado!' })
            } else {
                showToast({ type: 'error', message: 'No se pudo realizar la operación!' })
            }
        } catch (error) {
            showToast({ type: 'error', message: 'No se pudo realizar la operación!' })
        } finally {
            setIsLoading(false);
            reloadPage(router)
        }
    };

    return (
        <>
            <BlockingOverlay isLoading={isLoading} />

            <button
                onClick={handleConfirm}
                className={`block px-4 py-2 text-sm ${disabled ? "text-gray-400" : "text-gray-700 hover:underline"} `}
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
                disabled={disabled}>
                Eliminar
            </button>
        </>
    );
}

export default AdminBtnDelete;
