class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <ul class="navbar-list">
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

      </ul>
    `;
    let links = document.getElementsByClassName("navbar-link");
    console.log(links);
    for (let i = 0; i < links.length; i++) {
      let link = links[i];
      if (link.href == window.location.href) {
        link.className += " active";
        break;
      }
    }
  }
}

customElements.define('custom-navbar', Navbar);
