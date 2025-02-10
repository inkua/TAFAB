document.addEventListener("DOMContentLoaded", function () {
    const containerProjects = document.getElementById("projectsScroll");

    if (!containerProjects) return;

    let isDragging = false;
    let startX, scrollLeft;

    containerProjects.addEventListener("mousedown", (e) => {
        isDragging = true;
        containerProjects.classList.add("grabbing");
        startX = e.pageX - containerProjects.offsetLeft;
        scrollLeft = containerProjects.scrollLeft;
    });

    containerProjects.addEventListener("mouseleave", () => {
        isDragging = false;
        containerProjects.classList.remove("grabbing");
    });

    containerProjects.addEventListener("mouseup", () => {
        isDragging = false;
        containerProjects.classList.remove("grabbing");
    });

    containerProjects.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - containerProjects.offsetLeft;
        const walk = (x - startX) * 2;
        containerProjects.scrollLeft = scrollLeft - walk;
    });

    // Mostrar barra de scroll al hacer hover
    containerProjects.addEventListener("mouseenter", () => {
        containerProjects.style.scrollbarWidth = "auto";
        containerProjects.style.overflowX = "scroll";
    });

    // Ocultar barra de scroll cuando el cursor sale
    containerProjects.addEventListener("mouseleave", () => {
        containerProjects.style.scrollbarWidth = "none";
        containerProjects.style.overflowX = "hidden";
    });
});
