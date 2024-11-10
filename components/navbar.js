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
    for (let i = 0; i < links.length; i++) {
      let link = links[i];
      if (window.location.href.startsWith(link.href)) {
        link.classList.add("active");
        break;
      }
    }
  }
}

customElements.define('custom-navbar', Navbar);
