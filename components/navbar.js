class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const ul = document.createElement("ul");
    ul.classList.add("navbar-list");
    ul.innerHTML = `
        <li class="navbar-item">
          <a class="navbar-link" href="./">About</a>
        </li>

        <li class="navbar-item">
          <a class="navbar-link" href="resume">Resume</a>
        </li>

        <li class="navbar-item">
          <a class="navbar-link" href="projects">Projects</a>
        </li>

        <li class="navbar-item">
          <a class="navbar-link" href="hobbies">Hobbies</a>
        </li>
    `;
    this.appendChild(ul);
    let links = document.getElementsByClassName("navbar-link");
    let highlight = { href: "" };
    for (let link of links) {
      if (window.location.href.indexOf(link.href) >= 0 && this.trim(link.href).split("/").length > this.trim(highlight.href).split("/").length) {
        highlight = link;
      }
    }
    highlight.classList.add("active");
  }

  trim(str) {
    let end = str.length;
    while (end > 0 && str[end - 1] == "/")
      end--;
    return str.substring(0, end);
  }
}

customElements.define('custom-navbar', Navbar);
