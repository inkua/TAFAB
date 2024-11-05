
import { logout } from "@/app/services/lib"; 

// logout
export async function POST() {
    try {
        const result = await logout()
        
        if(result){
            return Response.json("Operación exitosa", { status: 200, data: null });
        }else{
            return Response.json("No se pudo cerrar la sesión", { status: 500, data: null });
        }
        
    } catch (e) {
        console.error(e)
        return Response.json("No se pudo cerrar la sesión", { status: 500, data: null });
    }
}
