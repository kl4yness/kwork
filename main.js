document.addEventListener("DOMContentLoaded", () => {
    // Находим элементы
    const burgerButton = document.getElementById("burgerButton");
    const burgerMenu = document.getElementById("burgerMenu");
    const body = document.body;

    // Проверяем, существуют ли элементы
    if (burgerButton && burgerMenu) {
        burgerButton.addEventListener("click", () => {
            // Переключаем классы
            const isMenuOpen = burgerMenu.classList.toggle("active");
            burgerMenu.classList.toggle("hidden", !isMenuOpen);
            body.classList.toggle("menu-open", isMenuOpen);

            // Меняем текст кнопки
            burgerButton.textContent = isMenuOpen ? "✖" : "☰";
        });
    } else {
        console.error("Элементы меню не найдены на странице.");
    }
});
