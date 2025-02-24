
import { getSession } from "@/app/services/lib";
import { getNewById, setNewImg, uploadNewImg } from "@/DAO/news.db";

export async function POST(request) {
    const session = await getSession()

    if (!session) {
        return Response.json({ status: 400, msg: "No se pudo realizar la operación", data: false });
    }

    try {
        const data = await request.formData()
        const image = data.get('file')
        const itemId = data.get('id')
        const entityNew = await getNewById(itemId)

        if (!image || !entityNew) {
            return Response.json("No se pudo guardar la imagen", { status: 400, data: null });
        }
        const bytes = await image.arrayBuffer()
        const buffer = Buffer.from(bytes)

        let response

        if (entityNew.data.imgUrl) {
            response = await setNewImg(buffer, entityNew.data.imgUrl, itemId)
        } else {
            response = await uploadNewImg(buffer, itemId)
        }

        if (response) {
            return Response.json({ status: 200, msg: "operación Exitosa", data: response });
        } else {
            return Response.json({ status: 500, msg: "No se pudo realizar la operación", data: response });
        }
    } catch (e) {
        console.log(e);
        return Response.json({ status: 500, msg: "No se pudo realizar la operación", data: false });
    }
}