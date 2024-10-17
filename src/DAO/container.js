import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

import { db, storage } from "./firebaseConfig";

const addElement = async (element, collectionName) => {
    try {
        await addDoc(collection(db, collectionName), {
            ...element,
        });
        return true
    } catch (e) {
        console.error(`${collectionName}, addElement, container, DAO: `, e);
        return false;
    };
};

const getElementById = async (id, collectionName) => {
    try {
        const docRef = doc(db, collectionName, id);
        const response = await getDoc(docRef);
        const element = {
            id: response.id,
            data: response.data()
        };

        return element;
    } catch (e) {
        console.error(`${collectionName}, getElementById, container, DAO: `, e);
        return false;
    };
};

const deleteElement = async (id, collectionName) => {
    try {
        const docRef = doc(db, collectionName, id);
        await deleteDoc(docRef);
    } catch (e) {
        console.error(`${collectionName}, deleteElement, container, DAO: `, e);
        return false;
    };
};

const getAllElements = async (collectionName) => {
    try {
        const data = await getDocs(collection(db, collectionName));
        const elementList = formatList(data);
        return elementList;
    } catch (e) {
        console.error(`${collectionName}, getAllElements, container, DAO: `, e);
        return false;
    };
};

const updateElement = async (newData, id, collectionName) => {
    try {
        const docRef = doc(db, collectionName, id);
        const docBefore = await getDoc(docRef);

        await updateDoc(docRef, {
            ...docBefore.data(),
            ...newData,
        });
        return true
    } catch (e) {
        console.error(`${collectionName}, updateElement, container, DAO: `, e);
        return false;
    };
};

const formatList = (elementList) => {
    if (!elementList) {
        return null;
    };
    const formattedList = elementList.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
    }));
    return formattedList;
};

//UPLOAD AN IMAGE
const uploadImage = async (file, entityName) => {
    try {
        const storageRef = ref(storage, `${entityName}/${file.name}` + "_" + Date.now());
        await uploadBytes(storageRef, file);
        return await getDownloadURL(storageRef)
    } catch (e) {
        console.error(`${entityName},uploadImage, container, DAO: `, e);
        return false;
    }

}

// DELETE AN IMAGE
export async function delImage(imageUrl) {
    try {
        const storageRef = ref(storage, imageUrl);
        await deleteObject(storageRef);
    } catch (e) {
        console.error("delImage, container, DAO: ", e);
        return false;
    }
}



export {
    getAllElements,
    getElementById,
    addElement,
    updateElement,
    deleteElement,
    uploadImage,
};