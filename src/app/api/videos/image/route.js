import { getSession } from "@/app/services/lib";
import { getVideoById, setVideoImg, uploadVideoImg } from "@/DAO/videos.db";


export async function POST(request) {
    const session = await getSession()

    if (!session) {
        return Response.json({ status: 400, msg: "No se pudo realizar la operación", data: false });
    }

    try {
        const data = await request.formData()
        const image = data.get('file')
        const videoId = data.get('id')
        const video = await getVideoById(videoId)

        if (!image || !video) {
            return Response.json("No se pudo guardar la imagen", { status: 400, data: null });
        }
        const bytes = await image.arrayBuffer()
        const buffer = Buffer.from(bytes)

        let response

        if (video.data.imgUrl) {
            response = await setVideoImg(buffer, video.data.imgUrl, videoId)
        } else {
            response = await uploadVideoImg(buffer, videoId)
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