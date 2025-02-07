import { ToastProvider } from "@/utils/ToastProvider"


function layout({ children }) {
    return (
        <body className="h-screen">
            {children}
            <ToastProvider />
        </body>
    )
}

export default layout
