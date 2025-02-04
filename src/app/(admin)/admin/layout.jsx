import { ToastProvider } from "@/utils/ToastProvider"
import AdminNav from "./componets/AdminNav/AdminNav"

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
