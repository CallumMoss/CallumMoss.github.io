function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById("theme-icon");
    const themeCheckbox = document.getElementById("theme-toggle-checkbox");

    // Toggle between light and dark mode classes
    body.classList.toggle("light-mode");

    // Change the icon based on theme
    if (body.classList.contains("light-mode")) {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
        localStorage.setItem("theme", "light"); // Save light mode preference
    } else {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
        localStorage.setItem("theme", "dark"); // Save dark mode preference
    }
}

// Load the theme from localStorage when the page loads
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    const body = document.body;
    const themeIcon = document.getElementById("theme-icon");

    // If there's no saved theme, default to light mode
    if (savedTheme === "light") {
        body.classList.add("light-mode");  // Apply light mode if savedTheme is dark
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
        document.getElementById("theme-toggle-checkbox").checked = true;
    } else {
        body.classList.remove("light-mode"); // Apply dark mode by default
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
        document.getElementById("theme-toggle-checkbox").checked = false;
    }
});
