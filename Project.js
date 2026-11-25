document.documentElement.classList.add("dark-mode");

const cookieConsentKey = "cookie-consent-v2";
let cookieConsent = localStorage.getItem(cookieConsentKey);

if (cookieConsent === null) {
    cookieConsent = window.confirm(
        "Deze website gebruikt cookies op alle pagina's. " +
        "Wil je cookies toestaan? Kies OK om toe te staan of Annuleren om te weigeren."
    ) ? "accepted" : "denied";
    localStorage.setItem(cookieConsentKey, cookieConsent);
}