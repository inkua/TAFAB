export function getDateFormated() {
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
