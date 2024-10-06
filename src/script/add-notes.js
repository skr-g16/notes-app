import _notesData from "../data/notes-data.js";

const addNotes = () => {
  const RENDER_EVENT = "render-notes";
  const submitForm = document.querySelector("form");
  submitForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addNotes();
  });
  function addNotes() {
    const noteTitle = document.getElementById("title").value;
    const noteBody = document.getElementById("body").value;
    const generateID = generateId();
    const createdAT = new Date().toISOString();
    const notesObject = generateNotesObject(
      generateID,
      noteTitle,
      noteBody,
      createdAT,
      false
    );
    _notesData.addNote(notesObject);
    document.dispatchEvent(new Event(RENDER_EVENT));
  }
  function generateNotesObject(id, title, body, createAt, archived) {
    return {
      id,
      title,
      body,
      createAt,
      archived,
    };
  }

  function generateId() {
    const randomLetters = Math.random().toString(36).substring(2, 4);
    const randomAlphanumeric = Math.random().toString(36).substring(2, 11);
    return `notes-${randomLetters}-${randomAlphanumeric}`;
  }

  document.addEventListener(RENDER_EVENT, function () {
    console.log(_notesData.getAll());
  });
};
export default addNotes;
