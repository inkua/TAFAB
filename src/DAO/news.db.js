import { deleteImage, updateImage, uploadImage } from "./cloudinaryContainer";
import { addElement, deleteElement, getAllElements, getElementById, updateElement } from "./container";

// add a new news entity | requires news data | returns the added news response
const addNews = async (newNews) => {
    return await addElement(newNews, 'news');
};

// get a news by id | requires the news id | returns the news object
const getNewsById = async (nid) => {
    return await getElementById(nid, 'news');
};

// get all news | does not require parameters | returns a list of all news
const getNews = async () => {
    return await getAllElements('news');
};

// get news per page | requires page and pageSize (default: 1 and 5) | returns paginated news
const getNewsPerPage = async (page = 1, pageSize = 5) => {
    const list = await getAllElements('news');

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
};

// get only active news list | does not require parameters | returns a list of active news
const getActiveNews = async () => {
    const news = await getAllElements("news");
    const activeNews = news.filter(item => item.status === "Activo");
    return activeNews;
};

// update a news by id | requires new data and the news id | returns the updated news response
const setNews = async (newData, nid) => {
    return await updateElement(newData, nid, 'news');
};

// delete a news by id and its image | requires the news id | returns the delete operation response
const deleteNews = async (nid) => {
    const newsItem = await getNewsById(nid);

    if (newsItem.data.imgUrl) {
        await deleteNewsImg(newsItem.data.imgUrl);
    }

    return await deleteElement(nid, 'news');
};

// upload a news image | requires the image buffer and news id | returns the uploaded image URL
const uploadNewsImg = async (buffer, newsId) => {
    const result = await uploadImage(buffer, "news");

    if (result) {
        await setNews({ imgUrl: result }, newsId);
    }
    return result;
};

// update a news image | requires the image buffer and existing image URL | returns the updated image URL
const setNewsImg = async (buffer, imgUrl) => {
    const result = await updateImage(buffer, imgUrl, "news");
    return result;
};

// delete a news image | requires the image URL | returns the delete operation response
const deleteNewsImg = async (imgUrl) => {
    const result = await deleteImage(imgUrl);
    return result;
};

export {
    addNews,
    getNewsById,
    getNews,
    getNewsPerPage,
    getActiveNews,
    setNews,
    deleteNews,
    uploadNewsImg,
    setNewsImg,
    deleteNewsImg,
};
