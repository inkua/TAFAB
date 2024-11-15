import { useRouter } from "next/navigation";
function BtnLogout() {
    const router = useRouter()

    const handleClick = async ()=>{
        const response = await fetch('http://localhost:3000/api/auth/logout/', {
            method: 'POST',
            cache: "no-store" ,
            body: JSON.stringify({
                token: '',
            }),
        });
        
        if(response.ok){
            router.push('/auth')
        }
        
    }

    return (
        <>
            <button 
            className="hidden md:block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
            onClick={()=>handleClick()}
            >Cerrar sesión</button>


            <button 
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white md:hidden"
            onClick={()=>handleClick()}
            >Cerrar sesión</button>

        </>
    )
}

export default BtnLogout
