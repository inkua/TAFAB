document.addEventListener("DOMContentLoaded", function () {
    const containerVideos = document.getElementById("videosScroll");

    if (!containerVideos) return;

    let isDragging = false;
    let startX, scrollLeft;

    containerVideos.addEventListener("mousedown", (e) => {
        isDragging = true;
        containerVideos.classList.add("grabbing");
        startX = e.pageX - containerVideos.offsetLeft;
        scrollLeft = containerVideos.scrollLeft;
    });

    containerVideos.addEventListener("mouseleave", () => {
        isDragging = false;
        containerVideos.classList.remove("grabbing");
    });

    containerVideos.addEventListener("mouseup", () => {
        isDragging = false;
        containerVideos.classList.remove("grabbing");
    });

    containerVideos.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - containerVideos.offsetLeft;
        const walk = (x - startX) * 2;
        containerVideos.scrollLeft = scrollLeft - walk;
    });

    // Mostrar barra de scroll al hacer hover
    containerVideos.addEventListener("mouseenter", () => {
        containerVideos.style.scrollbarWidth = "auto";
        containerVideos.style.overflowX = "scroll";
    });

    // Ocultar barra de scroll cuando el cursor sale
    containerVideos.addEventListener("mouseleave", () => {
        containerVideos.style.scrollbarWidth = "none";
        containerVideos.style.overflowX = "hidden";
    });
});
