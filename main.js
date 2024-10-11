import "./style.css";
import addNotes from "./src/script/add-notes.js";
import realTimeVal from "./src/script/realtime-val.js";
import "./src/component/app-bar.js";
import "./src/component/footer-app.js";
import "./src/component/divider-bar.js";
import "./src/component/add-note-with-title.js";

document.addEventListener("DOMContentLoaded", function () {
  addNotes();
  realTimeVal();
  document.dispatchEvent(new Event("render-notes"));
});
