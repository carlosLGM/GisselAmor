document.getElementById("declarationBtn").addEventListener("click", function() {
    alert("Eres especial para mí. ¿Quieres ser mi novia?");
});

function createHearts() {
    const heartContainer = document.querySelector(".heart-container");

    for (let i = 0; i < 6; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heartContainer.appendChild(heart);
    }
}

createHearts();
