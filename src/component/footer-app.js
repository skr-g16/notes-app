class footerApp extends HTMLElement {
  _style = null;
  _shadowRoot = null;

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
  }

  connectedCallback() {
    this.render();
  }

  _emptyElement() {
    this._shadowRoot.innerHTML = ``;
  }

  _updateStyle() {
    this._style.textContent = `
    :host {
      text-align: center;
      color: #f7f7f7;
      width: 100%;
      }
    `;
  }

  render() {
    this._emptyElement();
    this._updateStyle();
    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
    <p>&copy; 2024 Notes App | Fahmy Anugrah</p>`;
  }
}
customElements.define("footer-app", footerApp);
