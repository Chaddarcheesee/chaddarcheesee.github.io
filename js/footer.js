// js/footer.js
export function footerMarkup(name, email) {
  return `<footer class="text-center py-4 border-top">
    <small>© ${new Date().getFullYear()} ${name} — ${email}</small>
  </footer>`;
}
