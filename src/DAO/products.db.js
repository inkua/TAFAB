import { addElement, delImage, getAllElements, getElementById, updateElement, uploadImage } from "./container";

// add a new product | require the data product
const addProduct = async (newProduct) => {
    return await addElement(newProduct, 'products')
}

// get a product by id | require the product id
const getProductById = async (Pid) => {
    return await getElementById(Pid, 'products')
}

// get all products
const getProducts = async ()=>{
    return await getAllElements('products')
}

// update a product by id | require new data and the product id
const setProduct = async (newData, Pid)=>{
    return await updateElement(newData, Pid, 'products')
}

const uploadProductImg = async (file)=>{
    return await uploadImage(file, "product")
}

const deleteProductImage = async (file)=>{
    return await delImage(urlImage)
}


export {
    addProduct,
    getProductById,
    getProducts,
    setProduct,
}