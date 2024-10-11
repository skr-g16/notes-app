class appBar extends HTMLElement {
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
    width: 100%;
    color: #f7f7f7;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    text-align: center;}
    `;
  }

  render() {
    this._emptyElement();
    this._updateStyle();
    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
    <h1>Notes App</h1>`;
  }
}

customElements.define("app-bar", appBar);
