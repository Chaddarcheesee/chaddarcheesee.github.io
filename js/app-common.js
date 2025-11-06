// js/app-common.js
// utilities: initTheme, mountApp
export function initTheme() {
  const saved = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-bs-theme", saved);
  return saved;
}

export function toggleTheme(current) {
  const next = current === "light" ? "dark" : "light";
  localStorage.setItem("theme", next);
  document.documentElement.setAttribute("data-bs-theme", next);
  return next;
}

// helper to mount petite-vue app object with window.App merged
export async function mountPetiteApp(pageState = {}) {
  // load petite-vue as ES module
  const { createApp } = await import("https://unpkg.com/petite-vue?module");
  const rootState = {
    data: window.App || {},
    theme: initTheme(),
    toggleTheme() {
      this.theme = toggleTheme(this.theme);
    },
    ...pageState,
  };

  createApp(rootState).mount();
  return rootState;
}
