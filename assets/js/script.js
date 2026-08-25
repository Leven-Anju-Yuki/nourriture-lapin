document.addEventListener("DOMContentLoaded", function () {
    // Enregistrement du service worker (PWA)
    if ((location.protocol === "http:" || location.protocol === "https:") && "serviceWorker" in navigator) {
        navigator.serviceWorker.register("./sw.js").then(
            function (registration) {
                console.log("Service Worker enregistré :", registration.scope);
            },
            function (error) {
                console.warn("Échec de l'enregistrement du Service Worker :", error);
            }
        );
    }

    // Installation PWA : le bouton n'existe pas forcément sur toutes les pages.
    let deferredPrompt;
    const installButton = document.getElementById("installButton");

    window.addEventListener("beforeinstallprompt", (event) => {
        event.preventDefault();
        deferredPrompt = event;
        if (installButton) installButton.style.display = "block";
    });

    if (installButton) {
        installButton.addEventListener("click", async () => {
            if (!deferredPrompt) return;
            deferredPrompt.prompt();
            await deferredPrompt.userChoice;
            deferredPrompt = null;
            installButton.style.display = "none";
        });
    }

    window.addEventListener("appinstalled", () => {
        console.log("PWA installée");
        if (installButton) installButton.style.display = "none";
    });
});
