"use client"

import { useToast } from "@/utils/toast"

const SeeBtn = () => {
    const { showToast } = useToast()

    const handleClick = () => {
        showToast({ type: "info", message: "Este video es solo para miembros, te invitamos a subscribirte", time: 3500 })
    }
    return (
        <button className="font-bold underline mt-4 text-sm hover:text-btn-purple bg-transparent"
            onClick={() => handleClick()}
        >ver</button>
    )
}

export default SeeBtn
