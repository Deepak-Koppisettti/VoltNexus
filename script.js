// ==========================
// VoltNexus JavaScript
// ==========================

// Welcome message
console.log("Welcome to VoltNexus");

// Show welcome alert only once
window.onload = function () {
    console.log("VoltNexus Loaded Successfully!");
};

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Card hover animation
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px) scale(1.03)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
    });
});
