import { addElement, deleteElement, getAllElements, getElementById, updateElement } from './container';

// add a new admin | require the data admin
const addAdmin = async (newAdmin) => {
    newAdmin.type = "admin"
    newAdmin.password = generatePassword()
    return await addElement(newAdmin, 'admins')
}

// get a admin by id | require the admin id
const getAdminById = async (aid) => {
    return await getElementById(aid, 'admins')

}
// get a admin by id | require the admin id
const getAdminByEmail = async (email) => {
    try {
        const admins = await getAdmins()
        const admin = admins.find(item =>(item.email===email))
        return admin
    } catch (error) {
        return false        
    }
}

// get all admins
const getAdmins = async ()=>{
    return await getAllElements('admins')
}

// update a admin by id | require new data and the admin id
const setAdmin = async (newData, aid)=>{
    return await updateElement(newData, aid, 'admins')
}

// update a admin by id | require new data and the admin id
const deleteAdmin = async (aid)=>{
    return await deleteElement(aid, 'admins')
}


// genera contraseña y se la envía al email
const generatePassword = ()=>{
    return "123456789"
}
export {
    addAdmin,
    getAdminById,
    getAdmins,
    setAdmin,
    deleteAdmin,
    getAdminByEmail,
}