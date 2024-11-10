class GameFrame extends HTMLElement {
  /** @type HTMLElement **/
  iframe = null;
  constructor() {
    super();
  }

  connectedCallback() {
    const showGame = () => {
      this.iframe = document.createElement("iframe");
      this.iframe.allowFullscreen = true;
      this.iframe.src = this.getAttribute("src");
      this.iframe.style.display = "block";
      this.appendChild(this.iframe);
      this.iframe.requestFullscreen();
      this.iframe.onfullscreenchange = _ => hideGame();
    };

    const hideGame = () => {
      if (this.iframe.isFullscreen) {
        this.iframe.remove();
      }
      this.iframe.isFullscreen = true;
    }

    const thumbnail = document.createElement("img");
    thumbnail.classList.add("project-img");
    thumbnail.src = this.getAttribute("img");
    thumbnail.alt = this.getAttribute("alt");
    thumbnail.onclick = () => { showGame(); };

    this.appendChild(thumbnail);
    this.style.position = "relative";
    this.style.display = "block";
    // this.classList.add("project-img");
  }
}

customElements.define('game-frame', GameFrame);
