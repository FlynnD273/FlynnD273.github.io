class Sidebar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="sidebar-info">
        <img src="images/profile.jpg" class="avatar" alt="Portrait photo of Flynn Duniho">

        <div class="info-content">
          <h2 class="name">Flynn Duniho</h2>
        </div>

        <button class="info_more-btn" onclick='document.querySelector("custom-sidebar").classList.toggle("active");' data-sidebar-btn>
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
              <ion-icon name="logo-github" style="min-height: 32px;"></ion-icon>
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

          <li class="social-item">
            <a href="https://hedgehoggolf.itch.io/" class="social-link">
              <ion-icon src="./images/itchio-logo-textless-white.svg"></ion-icon>
            </a>
          </li>

          <li class="social-item">
            <a href="https://bsky.app/profile/flynnnnn.bsky.social" class="social-link">
              <ion-icon src="./images/bluesky_media_kit_logo.svg"></ion-icon>
            </a>
          </li>

        </ul>
      </div>
    `;
  }
}

customElements.define('custom-sidebar', Sidebar);
