import { ToastProvider } from "@/utils/ToastProvider"
import AdminNav from "./componets/AdminNav/AdminNav"

export const metadata = {
    title: "Pánel Administrativo | TAFAB",
    description: "Accede al panel administrativo de TAFAB para gestionar el contenido de la plataforma.",
}

function layout({ children }) {
    return (
        <body className="h-screen">
            <AdminNav />
            {children}
            <ToastProvider />
        </body>
    )
}

export default layout
