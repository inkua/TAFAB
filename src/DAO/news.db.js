import { getDateFormated, parseDate } from "@/utils/getDate";
import { deleteImage, updateImage, uploadImage } from "./cloudinaryContainer";
import { addElement, deleteElement, getAllElements, getElementById, updateElement } from "./container";

// add a new news entity | requires news data | returns the added news response
const addNew = async (newData) => {
    newData.date = getDateFormated()
    return await addElement(newData, 'news');
};

// get a news by id | requires the news id | returns the news object
const getNewById = async (nid) => {
    return await getElementById(nid, 'news');
};

// get all news | require the page you wanna display & how many elements you need | returns a list of news oganized and per page
const getNews = async (page = 1, pageSize = 5) => {
    const allNews = await getActiveNews('news');
    const newsFormated = formattedNews(allNews)

    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;

    const paginatedEntities = newsFormated.slice(startIndex, endIndex);

    const totalItems = newsFormated.length;
    const totalPages = Math.ceil(totalItems / pageSize);

    return {
        list: paginatedEntities,
        currentPage: page,
        totalPages: totalPages,
        totalItems: totalItems,
        pageSize: pageSize
    };
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
const setNew = async (newData, nid) => {
    return await updateElement(newData, nid, 'news');
};

// delete a news by id and its image | requires the news id | returns the delete operation response
const deleteNew = async (nid) => {
    const newItem = await getNewById(nid);

    if (newItem.data.imgUrl) {
        await deleteNewImg(newItem.data.imgUrl);
    }

    return await deleteElement(nid, 'news');
};

// upload a news image | requires the image buffer and news id | returns the uploaded image URL
const uploadNewImg = async (buffer, newsId) => {
    const result = await uploadImage(buffer, "news");

    if (result) {
        await setNew({ imgUrl: result }, newsId);
    }
    return result;
};

// update a news image | requires the image buffer and existing image URL | returns the updated image URL
const setNewImg = async (buffer, imgUrl) => {
    const result = await updateImage(buffer, imgUrl, "news");
    return result;
};

// delete a news image | requires the image URL | returns the delete operation response
const deleteNewImg = async (imgUrl) => {
    const result = await deleteImage(imgUrl);
    return result;
};

// Función para ordenar y limpiar la lista de noticias
function formattedNews(newsList) {
    return newsList
        .map(({ article, ...rest }) => rest) // Elimina la propiedad 'article'
        .sort((a, b) => parseDate(b.date) - parseDate(a.date)); // Ordena de más reciente a más antigua
}

export {
    addNew,
    getNewById,
    getNews,
    getNewsPerPage,
    getActiveNews,
    setNew,
    deleteNew,
    uploadNewImg,
    setNewImg,
    deleteNewImg,
};
