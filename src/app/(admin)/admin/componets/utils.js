// take a description string, if is too long return a short description.
const truncateDescription = (descripcion)=>{
    if (descripcion.length <= 70) return descripcion; 
    return descripcion.slice(0, 70) + " ..."; 
}

const reloadPage = (router)=>{
    setTimeout(()=>{
        router.refresh()
    }, 1500)
}

export {
    truncateDescription,
    reloadPage,
}