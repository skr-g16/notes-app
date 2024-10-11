class divider extends HTMLElement {
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
      width: 4px;
      background-color: #3f7785;
      min-height: 100%;
      margin: 0 20px;
    }`;
  }

  render() {
    this._emptyElement();
    this._updateStyle();
    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
    <div class="divider"></div>
    `;
  }
}

customElements.define("divider-bar", divider);
