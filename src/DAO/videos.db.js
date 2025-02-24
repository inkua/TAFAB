import { parseDate } from "@/utils/getDate";
import { deleteImage, updateImage, uploadImage } from "./cloudinaryContainer";
import { addElement, deleteElement, getAllElements, getElementById, updateElement } from "./container";

// add a new video entity | requires video data | returns the added video response
const addVideo = async (newVideo) => {
    return await addElement(newVideo, 'videos')
}

// get an video by id | requires the video id | returns the video object
const getVideoById = async (vid) => {
    return await getElementById(vid, 'videos')
}

// get all videos | does not require parameters | returns a list of all videos
const getVideos = async (page = 1, pageSize = 6) => {
    const allVideos = await getActiveVideos()
    const orderedList = orderedVideos(allVideos)

    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;

    const paginatedEntities = orderedList.slice(startIndex, endIndex);

    const totalItems = orderedList.length;
    const totalPages = Math.ceil(totalItems / pageSize);

    return {
        list: paginatedEntities,
        currentPage: page,
        totalPages: totalPages,
        totalItems: totalItems,
        pageSize: pageSize
    };
}

// get videos per page | requires page and pageSize (default: 1 and 5) | returns paginated videos
const getVideosPerPage = async (page = 1, pageSize = 5) => {
    const list = await getAllElements('videos');

    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;

    const paginatedEntities = list.slice(startIndex, endIndex);

    const totalItems = list.length;
    const totalPages = Math.ceil(totalItems / pageSize);

    return {
        list: paginatedEntities,
        currentPage: page,
        totalPages: totalPages,
        totalItems: totalItems,
        pageSize: pageSize
    };
}

// get only active videos list | does not require parameters | returns a list of active videos
const getActiveVideos = async () => {
    const videos = await getAllElements("videos");
    const activeVideos = videos.filter(item => item.status === "Activo");
    return activeVideos;
};

// update an video by id | requires new data and the video id | returns the updated video response
const setVideo = async (newData, vid) => {
    return await updateElement(newData, vid, 'videos')
}

// delete an video by id and its image | requires the video id | returns the delete operation response
const deleteVideo = async (vid) => {
    const video = await getVideoById(vid)

    if (video.data.imgUrl) {
        await deleteVideoImg(video.data.imgUrl)
    }

    return await deleteElement(vid, 'videos')
}

// upload an video image | requires the image buffer and video id | returns the uploaded image URL
const uploadVideoImg = async (buffer, videoId) => {
    const result = await uploadImage(buffer, "videos")

    if (result) {
        await setVideo({ imgUrl: result }, videoId)
    }
    return result
}

// update an video image | requires the image buffer and existing image URL | returns the updated image URL
const setVideoImg = async (buffer, imgUrl, videoId) => {
    const result = await updateImage(buffer, imgUrl, "videos")
    if (result && result !== imgUrl) {
        await setVideo({ imgUrl: result }, videoId)
    }
    return result
}

// delete an video image | requires the image URL | returns the delete operation response
const deleteVideoImg = async (imgUrl) => {
    const result = await deleteImage(imgUrl)
    return result
}

// Función para ordenar por fechas
function orderedVideos(newsList) {
    return newsList.map(item => item).sort((a, b) => parseDate(b.date) - parseDate(a.date));
}

export {
    addVideo,
    getVideoById,
    getVideos,
    getVideosPerPage,
    getActiveVideos,
    setVideo,
    deleteVideo,
    uploadVideoImg,
    setVideoImg,
    deleteVideoImg,
}