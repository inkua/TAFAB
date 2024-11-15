import AdminNav from "./componets/AdminNav/AdminNav"

function layout({ children }) {
    return (
        <>
            <AdminNav/>
            {children}
        </>
    )
}

export default layout
