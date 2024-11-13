class GameFrame extends HTMLElement {
  /** @type HTMLElement **/
  iframe = null;
  constructor() {
    super();
  }

  connectedCallback() {
    const showGame = async () => {
      this.iframe?.remove();
      this.iframe = document.createElement("iframe");
      this.iframe.allowFullscreen = true;
      this.iframe.src = this.getAttribute("src");
      this.iframe.style.display = "block";
      this.appendChild(this.iframe);
      this.iframe.onfullscreenchange = _ => hideGame();
      try {
        await this.iframe.requestFullscreen();
      }
      catch (error) {
        this.iframe.remove();
        this.iframe = null;
        window.location.href = this.getAttribute("src");
      }
    };

    const hideGame = () => {
      if (this.iframe.isFullscreen) {
        this.iframe.remove();
        this.iframe = null;
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
