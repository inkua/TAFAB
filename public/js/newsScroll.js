document.addEventListener("DOMContentLoaded", function () {
    const containerNews = document.getElementById("newsScroll");

    if (!containerNews) return;

    let isDragging = false;
    let startX, scrollLeft;

    containerNews.addEventListener("mousedown", (e) => {
        isDragging = true;
        containerNews.classList.add("grabbing");
        startX = e.pageX - containerNews.offsetLeft;
        scrollLeft = containerNews.scrollLeft;
    });

    containerNews.addEventListener("mouseleave", () => {
        isDragging = false;
        containerNews.classList.remove("grabbing");
    });

    containerNews.addEventListener("mouseup", () => {
        isDragging = false;
        containerNews.classList.remove("grabbing");
    });

    containerNews.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - containerNews.offsetLeft;
        const walk = (x - startX) * 2;
        containerNews.scrollLeft = scrollLeft - walk;
    });

    // Mostrar barra de scroll al hacer hover
    containerNews.addEventListener("mouseenter", () => {
        containerNews.style.scrollbarWidth = "auto";
        containerNews.style.overflowX = "scroll";
    });

    // Ocultar barra de scroll cuando el cursor sale
    containerNews.addEventListener("mouseleave", () => {
        containerNews.style.scrollbarWidth = "none";
        containerNews.style.overflowX = "hidden";
    });
});
