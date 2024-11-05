import { login, validateToken } from "@/app/services/lib";
import { getAdminByEmail } from "@/DAO/admins.db";
import { headers } from "next/headers";

// login
export async function POST(request) {
    const formData = await request.formData();
    const email = formData.get("email")
    const password = formData.get("password")

    const admin = await getAdminByEmail(email)
    
    if (!admin || password !== admin.password) {
        return Response.json("No autorizado", { status: 401, data: null });
    } else {
        await login(admin)
        return Response.json("Inicio de sesión exitoso", { status: 200, data: "Inicio de sesión exitoso" });
    }

}

// valid token
export async function GET() {
    try {
        const headersList = headers()
        const token = headersList.get('Authorization').replace("Bearer ", "");
        const res = await validateToken(token)

        if (res) {
            return Response.json({ status: 200, msg: "operación Exitosa", data: true });
        } else {
            return Response.json({ status: 401, msg: "No se puedes realizar esta operación", data: false });
        }
    } catch (e) {
        console.error(e)
        return Response.json({ status: 500, msg: "No se pudo realizar la operación", data: false });
    }
}