document.addEventListener("DOMContentLoaded", function () {
    const containerEvents = document.getElementById("eventsScroll");

    if (!containerEvents) return;

    let isDragging = false;
    let startX, scrollLeft;

    containerEvents.addEventListener("mousedown", (e) => {
        isDragging = true;
        containerEvents.classList.add("grabbing");
        startX = e.pageX - containerEvents.offsetLeft;
        scrollLeft = containerEvents.scrollLeft;
    });

    containerEvents.addEventListener("mouseleave", () => {
        isDragging = false;
        containerEvents.classList.remove("grabbing");
    });

    containerEvents.addEventListener("mouseup", () => {
        isDragging = false;
        containerEvents.classList.remove("grabbing");
    });

    containerEvents.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - containerEvents.offsetLeft;
        const walk = (x - startX) * 2;
        containerEvents.scrollLeft = scrollLeft - walk;
    });

    // Mostrar barra de scroll al hacer hover
    containerEvents.addEventListener("mouseenter", () => {
        containerEvents.style.scrollbarWidth = "auto";
        containerEvents.style.overflowX = "scroll";
    });

    // Ocultar barra de scroll cuando el cursor sale
    containerEvents.addEventListener("mouseleave", () => {
        containerEvents.style.scrollbarWidth = "none";
        containerEvents.style.overflowX = "hidden";
    });
});
