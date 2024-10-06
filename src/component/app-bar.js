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
