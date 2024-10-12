class addNoteWithTitle extends HTMLElement {
  static get observedAttributes() {
    return ['title'];
  }
  _shadowRoot = null;
  _style = null;
  _needTitle = `NEED SECTION TITLE`;

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = '';
  }

  connectedCallback() {
    this.render();
  }

  set title(value) {
    this._needTitle = value;
  }

  get title() {
    return this._needTitle;
  }
  _updateStyle() {
    this._style.textContent = `
    :host {
      text-align: center;
      font-size: large;
      color: #2c5c68;
      }
      h2{
      margin-bottom:0.5em
      }
    `;
  }

  render() {
    this._emptyContent();
    this._updateStyle();
    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
    <div class="add-notes">
        <h2>${this._needTitle}</h2>
        <slot></slot>
    </div>`;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'title':
        this._needTitle = newValue;
        break;
    }
    this.render();
  }
}

customElements.define('section-with-title', addNoteWithTitle);
