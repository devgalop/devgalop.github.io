let currentLang = "en";

document.getElementById("lang-toggle").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "es" : "en";
  document.getElementById("lang-toggle").textContent =
    currentLang === "en" ? "ES" : "EN";

  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.dataset[currentLang];
  });
});
