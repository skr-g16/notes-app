import addNotes from "./src/script/add-notes.js";
import "./src/component/app-bar.js";
import "./src/component/footer-app.js";

document.addEventListener("DOMContentLoaded", function () {
  addNotes();
  document.dispatchEvent(new Event("render-notes"));
});
