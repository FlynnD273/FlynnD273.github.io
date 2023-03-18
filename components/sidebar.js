class Sidebar extends HTMLElement {
    constructor() {
        super();
    }

connectedCallback() {
    this.outerHTML = `
    <aside class="sidebar" data-sidebar>
      <div class="sidebar-info">

        <figure class="avatar-box">
          <img src="./images/profile.jpg" alt="Flynn Duniho" width="80">
        </figure>

        <div class="info-content">
          <h1 class="name" title="Flynn Duniho">Flynn Duniho</h1>

          <p class="title">Computer Science Major</p>
        </div>

        <button class="info_more-btn" onclick='document.querySelector("[data-sidebar]").classList.toggle("active");' data-sidebar-btn>
          <span>Show Contacts</span>

          <ion-icon name="chevron-down"></ion-icon>
        </button>

      </div>

      <div class="sidebar-info_more">
        <div class="separator"></div>

        <ul class="contacts-list">

          <li class="contact-item">

            <div class="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>

            <div class="contact-info">
              <p class="contact-title">Email</p>

              <a href="mailto:fhduniho@wpi.edy" class="contact-link">fhduniho@wpi.edy</a>
            </div>

          </li>

          <li class="contact-item">

            <div class="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>

            <div class="contact-info">
              <p class="contact-title">Phone</p>

              <a href="tel:+14252411216" class="contact-link">+1 (425) 241-1216</a>
            </div>

          </li>

          <li class="contact-item">

            <div class="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div class="contact-info">
              <p class="contact-title">Location</p>

              <address>Carnation, Washington, USA</address>
            </div>

          </li>

        </ul>

        <div class="separator"></div>

        <ul class="social-list">

          <li class="social-item">
            <a href="https://github.com/FlynnD273" class="social-link">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>

          <li class="social-item">
            <a href="https://www.linkedin.com/in/flynnduniho/" class="social-link">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>

          <li class="social-item">
            <a href="https://www.instagram.com/flynnd03/" class="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>

        </ul>

      </div>

    </aside>
    `;
  }
}

customElements.define('custom-sidebar', Sidebar);