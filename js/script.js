document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menuDropdown = document.getElementById("menu-dropdown");

    // Abrir o cerrar el menú al hacer clic en "Menú"
    menuToggle.addEventListener("click", function (e) {
        e.preventDefault();
        menuDropdown.classList.toggle("show");
    });

    // Cerrar el menú al hacer clic fuera de él
    document.addEventListener("click", function (e) {
        if (!menuDropdown.contains(e.target) && !menuToggle.contains(e.target)) {
            menuDropdown.classList.remove("show");
        }
    });


    //HOVER HEADER
    const currentUrl = window.location.pathname;
    const menuLinks = document.querySelectorAll(".menu-desktop a");
    
    menuLinks.forEach(link => {
    
        if (currentUrl.includes(link.getAttribute('href'))) {
            link.classList.add("active");
        }
    });

    //CV
    const ampliableImg = document.querySelector('.ampliable');
    const fullscreenContainer = document.getElementById('fullscreen-container');
    const fullscreenImg = document.getElementById('fullscreen-img');

    // Ampliar la imagen
    ampliableImg.addEventListener('click', () => {
    fullscreenImg.src = ampliableImg.src; // Copia la fuente de la imagen
    fullscreenContainer.style.display = 'flex'; // Muestra el contenedor
    });

    // Cerrar la imagen al hacer clic fuera de ella
    fullscreenContainer.addEventListener('click', () => {
    fullscreenContainer.style.display = 'none'; // Oculta el contenedor
    });
   
    //FECHA FOOTER
    const yearElement = document.getElementById("year");
    const currentYear = new Date().getFullYear(); // Obtiene el año actual
    yearElement.textContent = currentYear; // Establece el texto del año

});
