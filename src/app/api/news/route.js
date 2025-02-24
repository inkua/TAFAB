import { getSession } from "@/app/services/lib";
import { addNew, deleteNew, getNews, setNew } from "@/DAO/news.db";

export async function GET(request) {

    const searchParams = request.nextUrl.searchParams
    const page = searchParams.get('page')
    try {
        const res = await getNews((page ? Number(page) : 1), 9);
        
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

export async function POST(req) {
    const session = await getSession()

    if (!session) {
        return Response.json({ status: 400, msg: "No se pudo realizar la operación", data: false });
    }

    try {
        const { data } = await req.json();
        const res = await addNew(data);
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
    const session = await getSession()

    if (!session) {
        return Response.json({ status: 400, msg: "No se pudo realizar la operación", data: false });
    }

    try {
        const { data } = await req.json();

        const res = await setNew(data.newData, data.id);

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
    const session = await getSession()

    if (!session) {
        return Response.json({ status: 400, msg: "No se pudo realizar la operación", data: false });
    }

    try {
        const { data } = await req.json();

        const res = await deleteNew(data);

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

