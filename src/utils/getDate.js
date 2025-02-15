function getDateFormated() {
    const meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    const fecha = new Date();
    const nombreMes = meses[fecha.getMonth()];
    const dia = fecha.getDate();
    const año = fecha.getFullYear();

    return `${nombreMes} ${dia}, ${año}`;
}

// Función para convertir la fecha en un objeto Date
function parseDate(dateStr) {
    const months = {
        "Enero": 0, "Febrero": 1, "Marzo": 2, "Abril": 3, "Mayo": 4, "Junio": 5,
        "Julio": 6, "Agosto": 7, "Septiembre": 8, "Octubre": 9, "Noviembre": 10, "Diciembre": 11
    };
    const [month, day, year] = dateStr.split(" ");
    return new Date(year, months[month], parseInt(day.replace(",", "")));
}
export {
    getDateFormated,
    parseDate,
}