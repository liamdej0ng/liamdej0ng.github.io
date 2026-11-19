const button = document.querySelector(".theme-toggle");
const key = "portfolio-theme";

function setDarkMode(dark) {
    document.documentElement.classList.toggle("dark-mode", dark);
    button.textContent = dark ? "☀️ Lichtmodus" : "🌙 Dark mode";
    button.setAttribute("aria-pressed", String(dark));
}

setDarkMode(localStorage.getItem(key) === "dark");

button.addEventListener("click", () => {
    const dark = !document.documentElement.classList.contains("dark-mode");
    localStorage.setItem(key, dark ? "dark" : "light");
    setDarkMode(dark);
});