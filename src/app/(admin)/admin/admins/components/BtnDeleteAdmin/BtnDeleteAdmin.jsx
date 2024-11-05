import { useRouter } from "next/navigation";

function BtnDeleteAdmin({ data }) {
    const router = useRouter()
    const handleDelete = async () => {
        const response = await fetch('http://localhost:3000/api/admins', {
            method: 'DELETE',
            body: JSON.stringify({
                token: '',
                data: data,
            }),
        });

        const result = await response.json();

        if (result.data) {
            alert("Operación Exitosa!")
            router.refresh()
        } else {
            alert("No se pudo realizar la operación!")
        }
    }


    return (
        <>
            {data.type === "root" ?

                <button className="block px-4 py-2 text-sm text-gray-400" role="menuitem" tabIndex="-1" id="menu-item-3" disabled>Delete admin</button>
                :
                <button className="block px-4 py-2 text-sm text-gray-700 hover:underline" role="menuitem" tabIndex="-1" id="menu-item-3" onClick={() => handleDelete()}>Delete admin</button>
            }

        </>
    )
}

export default BtnDeleteAdmin
