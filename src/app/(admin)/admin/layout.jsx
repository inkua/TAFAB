import AdminNav from "./componets/AdminNav/AdminNav"

function layout({ children }) {
    return (
        <body className="bg-gray-900">
            <AdminNav />
            {children}
        </body>
    )
}

export default layout
