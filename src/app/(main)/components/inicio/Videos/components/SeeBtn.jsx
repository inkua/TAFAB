"use client"

import { useToast } from "@/utils/toast"

const SeeBtn = () => {
    const { showToast } = useToast()

    const handleClick = () => {
        showToast({ type: "info", message: "Este video es solo para miembros, te invitamos a subscribirte", time: 3500 })
    }
    return (
        <button className="bg-btn-pink hover:bg-bth-blue text-text-dark py-2 px-6 uppercase underline font-bold"
            onClick={() => handleClick()}
        >ver</button>
    )
}

export default SeeBtn
