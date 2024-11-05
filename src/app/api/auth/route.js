import { login } from "@/app/services/lib"; 
import { getAdminByEmail } from "@/DAO/admins.db";

// login
export async function POST(request) {
    const formData = await request.formData();
    const email = formData.get("email")
    const password = formData.get("password")

    const admin = await getAdminByEmail(email)
    
    if(!admin || password !== admin.password){
        return Response.json("No autorizado", { status: 401, data: null });
    }else{
        await login(admin)
        return Response.json("Inicio de sesión exitoso", { status: 200, data: "Inicio de sesión exitoso" });
    }

}
