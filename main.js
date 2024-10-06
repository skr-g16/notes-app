import addNotes from "./src/script/add-notes.js";
import realTimeVal from "./src/script/realtime-val.js";
import "./src/component/app-bar.js";
import "./src/component/footer-app.js";

document.addEventListener("DOMContentLoaded", function () {
  addNotes();
  realTimeVal();
  document.dispatchEvent(new Event("render-notes"));
});
