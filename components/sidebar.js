class Sidebar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.outerHTML = `
    <aside class="sidebar" width="300px" data-sidebar>
      <div class="sidebar-info">

        <img src="images/profile.jpg" class="avatar" alt="Portrait photo of Flynn Duniho">

        <div class="info-content">
          <h2 class="name">Flynn Duniho</h2>
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

              <a href="mailto:flynn@harveyosity.org" class="contact-link">flynn@harveyosity.org</a>
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

              <a href="https://www.google.com/maps/place/Carnation,+WA+98014/"><address>Carnation, Washington, USA</address></a>
            </div>

          </li>

        </ul>

        <div class="separator"></div>

        <ul class="social-list">

          <li class="social-item">
            <a href="https://github.com/FlynnD273" class="social-link">
              <ion-icon name="logo-github">Github</ion-icon>
            </a>
          </li>

          <li class="social-item">
            <a href="https://www.linkedin.com/in/flynnduniho/" class="social-link">
              <ion-icon name="logo-linkedin">LinkedIn</ion-icon>
            </a>
          </li>

          <li class="social-item">
            <a href="https://www.instagram.com/flynnd03/" class="social-link">
              <ion-icon name="logo-instagram">Instagram</ion-icon>
            </a>
          </li>

        </ul>

      </div>

    </aside>
    `;
  }
}

customElements.define('custom-sidebar', Sidebar);
