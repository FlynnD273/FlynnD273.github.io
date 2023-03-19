class Navbar extends HTMLElement {
    constructor() {
        super();
    }

connectedCallback() {
    this.outerHTML = `
    <nav class="navbar">

        <ul class="navbar-list">

          <li class="navbar-item">
            <a class="navbar-link" href="./index.html">About</a>
          </li>

          <li class="navbar-item">
            <a class="navbar-link" href="resume.html">Resume</a>
          </li>

          <li class="navbar-item">
            <a class="navbar-link" href="projects.html">Projects</a>
          </li>

          <li class="navbar-item">
            <a class="navbar-link" href="hobbies.html">Hobbies</a>
          </li>

        </ul>

    </nav>
    `;
  }
}

customElements.define('custom-navbar', Navbar);