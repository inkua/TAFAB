"use client"

import { useRouter } from "next/navigation"
import { useToast } from "@/utils/toast";
import FormEvent from "../FormEvent/FormEvent";
import BlockingOverlay from "../../../componets/BlockingOverlay/BlockingOverlay";
import { useState } from "react";
import { reloadPage } from "../../../componets/utils";

function BtnEditEvent({ data, open, setOpen }) {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false);
    const { showToast } = useToast()

    const updateData = async (newData) => {
        setIsLoading(true);

        try {
            const response = await fetch('/api/events', {
                method: 'PUT',
                body: JSON.stringify({
                    token: '',
                    data: newData,
                }),
            });
    
            const data = await response.json();
    
            if (data.data) {
                showToast({type:'success', message:'Datos actualizados!'})
            } else {
                showToast({type:'error', message:'No se pudo realizar la operación!'})
            }
        } catch (error) {
            showToast({type:'error', message:'No se pudo realizar la operación!'})
        } finally {
            setIsLoading(false);
            reloadPage(router)
        }
    }

    return (
        <>
            <BlockingOverlay isLoading={isLoading} />

            <button onClick={() => setOpen(true)} className="inline-flex px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 w-full" role="menuitem" tabIndex="-1" id="menu-item-0">Editar</button>

            <FormEvent isOpen={open} setIsOpen={setOpen} saveEvent={updateData} data={data} add={false} />
        </>
    )
}

export default BtnEditEvent
