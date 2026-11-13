
// Находим кнопку переключения темы
const themeButton = document.getElementById("theme-toggle");

// Проверяем, какая тема была выбрана ранее
const savedTheme = localStorage.getItem("theme");

// Если ранее выбирали тёмную тему — включаем её
if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
}

// Обновляем надпись на кнопке
function updateButton() {
    if (document.body.classList.contains("dark-theme")) {
        themeButton.textContent = "☀️ Светлая тема";
    } else {
        themeButton.textContent = "🌙 Тёмная тема";
    }
}

// Выполняем при открытии страницы
updateButton();

// Обрабатываем нажатие кнопки
themeButton.addEventListener("click", function () {

    // Переключаем класс тёмной темы
    document.body.classList.toggle("dark-theme");

    // Проверяем текущую тему
    if (document.body.classList.contains("dark-theme")) {

        // Сохраняем тёмную тему
        localStorage.setItem("theme", "dark");

    } else {

        // Сохраняем светлую тему
        localStorage.setItem("theme", "light");

    }

    // Меняем надпись на кнопке
    updateButton();

});
