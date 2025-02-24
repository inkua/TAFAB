import { getSession } from "@/app/services/lib";
import { getResourceById, setResourceImg, uploadResourceImg } from "@/DAO/resources.db";


export async function POST(request) {
    const session = await getSession()

    if (!session) {
        return Response.json({ status: 400, msg: "No se pudo realizar la operación", data: false });
    }

    try {
        const data = await request.formData()
        const image = data.get('file')
        const resourceId = data.get('id')
        const resource = await getResourceById(resourceId)

        if (!image || !resource) {
            return Response.json("No se pudo guardar la imagen", { status: 400, data: null });
        }
        const bytes = await image.arrayBuffer()
        const buffer = Buffer.from(bytes)

        let response

        if (resource.data.imgUrl) {
            response = await setResourceImg(buffer, resource.data.imgUrl, resourceId)
        } else {
            response = await uploadResourceImg(buffer, resourceId)
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