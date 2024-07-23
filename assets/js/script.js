function setFavicon() {
    var faviconPc = document.getElementById("favicon-pc");
    var faviconMobile = document.getElementById("favicon-mobile");

    if (window.innerWidth <= 768) {
        faviconPc.remove();
        document.head.appendChild(faviconMobile);
    } else {
        faviconMobile.remove();
        document.head.appendChild(faviconPc);
    }
}
window.addEventListener("resize", setFavicon);
window.addEventListener("load", setFavicon);
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js").then(
        function (registration) {
            console.log("Service Worker registration successful with scope: ", registration.scope);
        },
        function (error) {
            console.log("Service Worker registration failed: ", error);
        }
    );
}
let deferredPrompt;
const installButton = document.getElementById("installButton");

window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installButton.style.display = "block";
});

installButton.addEventListener("click", () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === "accepted") {
                console.log("User accepted the A2HS prompt");
            } else {
                console.log("User dismissed the A2HS prompt");
            }
            deferredPrompt = null;
            installButton.style.display = "none";
        });
    }
});

window.addEventListener("appinstalled", () => {
    console.log("PWA was installed");
});
