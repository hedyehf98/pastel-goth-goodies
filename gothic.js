document.addEventListener("DOMContentLoaded", function() {
    const showNecklacesButton = document.getElementById("showNecklaces");
    const imageContainers = document.querySelectorAll(".image-container");

    showNecklacesButton.addEventListener("click", function() {
        imageContainers.forEach(function(container) {
            if (container.style.display === "none" || container.style.display === "") {
                container.style.display = "block";
            } else {
                container.style.display = "none";
            }
        });
    });
});
