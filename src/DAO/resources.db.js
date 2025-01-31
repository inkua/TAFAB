import { deleteImage, updateImage, uploadImage } from "./cloudinaryContainer";
import { addElement, deleteElement, getAllElements, getElementById, updateElement } from "./container";

// add a new resource entity | requires resource data | returns the added resource response
const addResource = async (newResource) => {
    return await addElement(newResource, 'resources');
};

// get a resource by id | requires the resource id | returns the resource object
const getResourceById = async (rid) => {
    return await getElementById(rid, 'resources');
};

// get all resources | does not require parameters | returns a list of all resources
const getResources = async () => {
    return await getAllElements('resources');
};

// get resources per page | requires page and pageSize (default: 1 and 5) | returns paginated resources
const getResourcesPerPage = async (page = 1, pageSize = 5) => {
    const list = await getAllElements('resources');

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

// get only active resources list | does not require parameters | returns a list of active resources
const getActiveResources = async () => {
    const resources = await getAllElements("resources");
    const activeResources = resources.filter(item => item.status === "Activo");
    return activeResources;
};

// update a resource by id | requires new data and the resource id | returns the updated resource response
const setResource = async (newData, rid) => {
    return await updateElement(newData, rid, 'resources');
};


// delete a resource by id and its image | requires the resource id | returns the delete operation response
const deleteResource = async (rid) => {
    const resource = await getResourceById(rid);

    if (resource.data.imgUrl) {
        await deleteResourceImg(resource.data.imgUrl);
    }

    return await deleteElement(rid, 'resources');
};

// upload a resource image | requires the image buffer and resource id | returns the uploaded image URL
const uploadResourceImg = async (buffer, resourceId) => {
    const result = await uploadImage(buffer, "resources");

    if (result) {
        await setResource({ imgUrl: result }, resourceId);
    }
    return result;
};

// update a resource image | requires the image buffer and existing image URL | returns the updated image URL
const setResourceImg = async (buffer, imgUrl) => {
    const result = await updateImage(buffer, imgUrl, "resources");
    return result;
};

// delete a resource image | requires the image URL | returns the delete operation response
const deleteResourceImg = async (imgUrl) => {
    const result = await deleteImage(imgUrl);
    return result;
};

export {
    addResource,
    getResourceById,
    getResources,
    getResourcesPerPage,
    getActiveResources,
    setResource,
    deleteResource,
    uploadResourceImg,
    setResourceImg,
    deleteResourceImg,
};
