// max 70 caracters
const truncateDescription = (descripcion)=>{
    if (descripcion.length <= 70) return descripcion; 
    return descripcion.slice(0, 70) + " ..."; 
}

export {
    truncateDescription,
}

