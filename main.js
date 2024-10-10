// import realTimeVal from "./src/script/realtime-val.js";
import "./src/component/index.js";
import viewNotes from "./src/script/view-notes.js";

document.addEventListener("DOMContentLoaded", function () {
  viewNotes();
  document.dispatchEvent(new Event("render-notes"));
});
