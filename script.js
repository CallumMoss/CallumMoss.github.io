function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById("theme-icon");

    // Toggle between light and dark mode classes
    body.classList.toggle("light-mode");

    // Change the icon based on theme
    if (body.classList.contains("light-mode")) {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
        localStorage.setItem("theme", "light");
    } else {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
        localStorage.setItem("theme", "dark");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    const body = document.body;
    const themeIcon = document.getElementById("theme-icon");

    if (savedTheme === "light") {
        body.classList.add("light-mode");
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    } else {
        body.classList.remove("light-mode");
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
    }
});
