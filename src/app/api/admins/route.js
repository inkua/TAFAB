import { addAdmin, deleteAdmin, getAdmins, setAdmin } from "@/DAO/admins.db";


export async function POST(req) {
    try {
        const { token, data } = await req.json();
        // Use token to validate request

        const res = await addAdmin(data);

        if (res) {
            return Response.json({ status: 200, msg: "operación Exitosa", data: res });
        } else {
            return Response.json({ status: 500, msg: "No se pudo realizar la operación", data: res });
        }
    } catch (e) {
        console.log(e);
        return Response.json({ status: 500, msg: "No se pudo realizar la operación", data: e });
    }
}

export async function PUT(req) {
    try {
        const { token, data } = await req.json();
        // Use token to validate request

        const res = await setAdmin(data.newData, data.id);

        if (res) {
            return Response.json({ status: 200, msg: "operación Exitosa", data: res });
        } else {
            return Response.json({ status: 500, msg: "No se pudo realizar la operación", data: res });
        }
    } catch (e) {
        console.log(e);
        return Response.json({ status: 500, msg: "No se pudo realizar la operación", data: e });
    }
}

export async function DELETE(req) {
    const { token, data } = await req.json();
    
    try {
        const res = await deleteAdmin(data.id)
        if (res) {
            return Response.json({ status: 200, msg: "operación Exitosa", data: res });
        } else {
            return Response.json({ status: 500, msg: "No se pudo realizar la operación", data: res });
        }
    } catch (e) {
        return Response.json({ status: 500, msg: e });
    }
}