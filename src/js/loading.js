export function initLoading() {

    const loadingScreen = document.getElementById("loadingScreen");
    const mainPage = document.getElementById("mainPage");

    if (!loadingScreen || !mainPage) return;

    // Hide main page initially
    mainPage.classList.add("hidden");

    // Show loading screen for 3 seconds
    setTimeout(() => {

        loadingScreen.style.opacity = "0";
        loadingScreen.style.transition = "0.8s";

        setTimeout(() => {

            loadingScreen.classList.add("hidden");
            mainPage.classList.remove("hidden");

        }, 800);

    }, 3000);
}