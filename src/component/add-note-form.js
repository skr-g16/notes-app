import _notesData from "../data/notes-data.js";

class addNoteForm extends HTMLElement {
  _style = null;
  _shadowRoot = null;
  _script = null;
  RENDER_EVENT = `render-notes`;
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
    this._script = document.createElement("link");
  }
  connectedCallback() {
    this.render();
    this._addEventListener();
  }

  generateId() {
    this._randomLetters = Math.random().toString(36).substring(2, 4);
    this._randomAlphanumeric = Math.random().toString(36).substring(2, 11);
    return `notes-${this._randomLetters}-${this._randomAlphanumeric}`;
  }

  generateNotesObject(id, title, body, createdAt, archived) {
    return { id, title, body, createdAt, archived };
  }

  _addEventListener() {
    const titleValidationMessage =
      this.shadowRoot.getElementById("titleValidation");
    const bodyValidationMessage =
      this.shadowRoot.getElementById("bodyValidation");
    this._shadowRoot.querySelector("form").addEventListener("submit", (e) => {
      e.preventDefault();
      this._title = this._shadowRoot.getElementById("title").value;
      this._body = this._shadowRoot.getElementById("body").value;
      this._generateID = this.generateId();
      this._createdAT = new Date().toISOString();
      this._notesObject = this.generateNotesObject(
        this._generateID,
        this._title,
        this._body,
        this._createdAT,
        false
      );
      this._shadowRoot.getElementById("title").value = ``;
      this._shadowRoot.getElementById("body").value = ``;
      _notesData.addNote(this._notesObject);
      document.dispatchEvent(new Event(this.RENDER_EVENT));
    });
  }

  _updateStyle() {
    this._style.textContent = `
  .form-group {
    box-shadow: 1px 1px 10px 1px #3f7785;
    border-radius: 10px;
    max-width: 400px;
    margin: 0 auto 1em;
    padding: 2em;
  }
  .title,
  .body {
    font-size:1.3em;
    padding: 8px;
    width: 90%;
    border-radius: 5px;
    border: 2px solid #2c5c68;
    color: #2c5c68;
    transition: box-shadow 0.2s ease-in-out;
    }
    
  input:focus-visible,
  textarea:focus-visible {
    outline: none;
    box-shadow: 1px 1px 10px 1px #3f7785;
    }
    
  input:focus:invalid,
  textarea:focus:invalid {
    box-shadow: 1px 1px 10px 1px red;
    }

  textarea {
    height: 150px;
    overflow-y: auto;
    }

  textarea::-webkit-scrollbar {
    width: 8px;
    }

  textarea::-webkit-scrollbar-thumb {
    background-color: #3f7785;
    border-radius: 10px;
    }
  
  textarea::-webkit-scrollbar-track {
    background-color: #e0e0e0;
    }
    
  textarea::-webkit-scrollbar-thumb:hover {
    background-color: #2c5c68;
    }
      
  .validation-message {
    margin: 0.2rem 0 10px;
    opacity: 0;
    color: red;
    text-align: left;
    padding: 5px 20px;
    font-size: small;
    transition: opacity 0.3s ease-in-out;
    }
  .validation-message.visible {
    opacity: 1;
    }
  button {
    border-radius: 10px;
    background-color: #3f7785;
    color: #f7f7f7;
    padding: 10px 12px;
    border: none;
    transition: background-color 0.2s ease-in-out, transform 0.2s;
  }

  button:hover {
    cursor: pointer;
    background-color: #2c5c68;
  }

  button:active {
    transform: scale(0.98);
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);
    }
  ::placeholder {
  font-style: italic;
}
`;
  }
  _fontAwesome() {
    this._script.setAttribute("rel", "stylesheet");
    this._script.setAttribute(
      "href",
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
    );
    this._script.setAttribute(
      "integrity",
      "sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
    );
    this._script.setAttribute("crossorigin", "anonymous");
    this._script.setAttribute("referrerpolicy", "no-referrer");
  }
  _emptyElement() {
    this._shadowRoot.innerHTML = `
    `;
  }

  render() {
    this._emptyElement();
    this._fontAwesome();
    this._updateStyle();
    this._shadowRoot.append(this._script, this._style);
    this._shadowRoot.innerHTML += `
    <div class="form-group">
          <form>
          <div class="input-wrapper">
            <input
              placeholder="Note Title"
              class="title"
              type="text"
              id="title"
              name="title"
              required
              autocomplete="off"
              aria-describedby="titleValidation"
            />
          <p id="titleValidation" class="validation-message" aria-live="polite"></p>
          </div>
          
          <div class="body-wrapper">
            <textarea
              class="body"
              placeholder="Note Body"
              id="body"
              name="body"
              required
              aria-describedby="bodyValidation"
            ></textarea>
            <p id="bodyValidation" class="validation-message" aria-live="polite"></p>
          </div>
          <button type="submit" class="button-add-notes">
            <i class="fa-solid fa-plus"></i> New Note
          </button>
        </form>
        </div>
    `;
  }
}
customElements.define("add-note-form", addNoteForm);
