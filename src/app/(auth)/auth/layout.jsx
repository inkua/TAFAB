import { ToastProvider } from "@/utils/ToastProvider"

export const metadata = {
    title: "Autenticación | TAFAB",
    description: "Login de usuarios en la plataforma de TAFAB.",
}

function layout({ children }) {
    return (
        <body className="h-screen">
            {children}
            <ToastProvider />
        </body>
    )
}

export default layout
