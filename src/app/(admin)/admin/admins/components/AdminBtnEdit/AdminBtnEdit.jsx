"use client";

import { useRouter } from "next/navigation";
import AdminFrom from "../AdminForm/AdminForm";
import { reloadPage } from "../../../componets/utils";
import BlockingOverlay from "../../../componets/BlockingOverlay/BlockingOverlay";
import { useState } from "react";

function AdminBtnEdit({ data, open, setOpen, disabled = false }) {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const updateData = async (newData) => {
        try {
            const response = await fetch("/api/admins", {
                method: "PUT",
                body: JSON.stringify({
                    data: newData,
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
            reloadPage(router)
        }
    };

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

            <AdminFrom
                isOpen={open}
                setIsOpen={setOpen}
                saveUser={updateData}
                data={data}
                add={false}
            />
        </>
    );
}

export default AdminBtnEdit;
