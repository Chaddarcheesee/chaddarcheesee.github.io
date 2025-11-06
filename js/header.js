// js/header.js
export function headerMarkup(name) {
  return `
<nav class="navbar navbar-expand-lg bg-body-tertiary shadow-sm fixed-top">
  <div class="container">
    <a class="navbar-brand fw-bold" href="index.html">${name}</a>
    <div class="d-flex align-items-center">
      <a href="projects.html" class="nav-link px-2">Projects</a>
      <a href="work.html" class="nav-link px-2">Experience</a>
      <a href="blog.html" class="nav-link px-2">Blog</a>
      <a href="contact.html" class="nav-link px-2">Contact</a>
      <button id="themeBtn" class="btn ms-2"></button>
    </div>
  </div>
</nav>`;
}
