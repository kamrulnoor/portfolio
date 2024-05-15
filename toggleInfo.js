document.addEventListener("DOMContentLoaded", function () {
    const infoToggles = document.querySelectorAll(".info-toggle");

    infoToggles.forEach(toggle => {
        toggle.addEventListener("click", function () {
            const infoId = toggle.getAttribute("data-info");
            const infoElement = document.getElementById(infoId);
            infoElement.style.display = infoElement.style.display === "none" ? "block" : "none";
        });
    });
});
