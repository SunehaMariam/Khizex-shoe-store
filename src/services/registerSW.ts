export function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;

  window.addEventListener("load", async () => {
    try {
      const registration =
        await navigator.serviceWorker.register("/sw.js");

      console.log(
        "Service Worker Registered:",
        registration
      );
    } catch (error) {
      console.error(
        "Service Worker Registration Failed:",
        error
      );
    }
  });
}