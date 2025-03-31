const categories = document.getElementById("categories");
const categoriesMenu = document.getElementById("categories-menu");

categories.addEventListener("mouseover", () => {
    categoriesMenu.style.display = "grid";
});

categoriesMenu.addEventListener("mouseleave", () => {
    categoriesMenu.style.display = "none";
});

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".product button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Produit ajouté au panier !");
        });
    });
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5, // Afficher 5 produits à la fois
    spaceBetween: 20,
    loop: true, // Défilement en boucle
    autoplay: {
        delay: 1000, // Défiler automatiquement toutes les 3 secondes
        disableOnInteraction: false, // Continuer même après une interaction
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

