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

function dateFormatedFrontend(firebaseDate) {
    const date = new Date(firebaseDate.seconds * 1000);

    const opciones = { day: 'numeric', month: 'long', year: 'numeric' };
    const formatter = new Intl.DateTimeFormat('es-ES', opciones);
    const partes = formatter.formatToParts(date);

    const dia = partes.find(p => p.type === 'day').value;
    const mes = partes.find(p => p.type === 'month').value;
    const año = partes.find(p => p.type === 'year').value;

    const resultado = `${mes.charAt(0).toUpperCase() + mes.slice(1)} ${dia}, ${año}`;
    return resultado;
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
    dateFormatedFrontend,
}