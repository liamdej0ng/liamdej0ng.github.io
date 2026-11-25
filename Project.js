const themePreferenceKey = "theme-preference";
const themeToggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem(themePreferenceKey);

function setTheme(isDarkMode) {
    document.documentElement.classList.toggle("dark-mode", isDarkMode);
    themeToggle.setAttribute("aria-pressed", String(isDarkMode));
}

setTheme(savedTheme === "dark");

themeToggle.addEventListener("click", () => {
    const isDarkMode = !document.documentElement.classList.contains("dark-mode");
    setTheme(isDarkMode);
    localStorage.setItem(themePreferenceKey, isDarkMode ? "dark" : "light");
});

function getGreeting(hour) {
    if (hour < 6) return "Goedenacht";
    if (hour < 12) return "Goedemorgen";
    if (hour < 18) return "Goedemiddag";
    return "Goedenavond";
}

const greetingText = getGreeting(new Date().getHours()) + "! Welkom bij mijn portfolio.";


const greetingShownKey = "greeting-shown";
if (sessionStorage.getItem(greetingShownKey) === null) {
    window.alert(greetingText);
    sessionStorage.setItem(greetingShownKey, "yes");
}

const cookieConsentKey = "cookie-consent-v2";
let cookieConsent = sessionStorage.getItem(cookieConsentKey);

if (cookieConsent === null) {
    cookieConsent = window.confirm(
        "Deze website gebruikt cookies op alle pagina's. " +
        "Wil je cookies toestaan? Kies OK om toe te staan of Annuleren om te weigeren."
    ) ? "accepted" : "denied";
    sessionStorage.setItem(cookieConsentKey, cookieConsent);
}

// ===== Console logs =====

// Cookie-keuze loggen
if (cookieConsent === "accepted") {
    console.log("De gebruiker heeft de cookie popup geaccepteerd.");
} else {
    console.log("De gebruiker heeft de cookies geweigerd.");
}

// Welke pagina is geladen
console.log("Pagina geladen: " + document.title);

// Hoveren over een plaatje
const afbeeldingen = document.querySelectorAll("img");
afbeeldingen.forEach((afbeelding) => {
    afbeelding.addEventListener("mouseenter", () => {
        console.log("De gebruiker hovert over het plaatje: " + afbeelding.alt);
    });
});

// Klikken op een link in het menu
const menuLinks = document.querySelectorAll("nav a");
menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        console.log("De gebruiker klikt op de menulink naar: " + link.getAttribute("href"));
    });
});

// Dark mode aan/uit
themeToggle.addEventListener("click", () => {
    const isDarkMode = document.documentElement.classList.contains("dark-mode");
    console.log("De gebruiker heeft de " + (isDarkMode ? "donkere" : "lichte") + " modus aangezet.");
});

// Contactformulier (alleen op de contactpagina)
const contactFormulier = document.getElementById("contactformulier");
if (contactFormulier !== null) {
    contactFormulier.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("De gebruiker heeft het contactformulier verstuurd.");
    });
    contactFormulier.addEventListener("reset", () => {
        console.log("De gebruiker heeft het contactformulier gereset.");
    });
}