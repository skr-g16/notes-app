import _notesData from "../data/notes-data.js";

const addNotes = () => {
  const RENDER_EVENT = "render-notes";
  const submitForm = document.querySelector("form");
  submitForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addNote();
  });
  function addNote() {
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
    document.getElementById("title").value = "";
    document.getElementById("body").value = "";
    _notesData.addNote(notesObject);
    document.dispatchEvent(new Event(RENDER_EVENT));
  }
  function generateNotesObject(id, title, body, createdAt, archived) {
    return {
      id,
      title,
      body,
      createdAt,
      archived,
    };
  }

  function generateId() {
    const randomLetters = Math.random().toString(36).substring(2, 4);
    const randomAlphanumeric = Math.random().toString(36).substring(2, 11);
    return `notes-${randomLetters}-${randomAlphanumeric}`;
  }

  function makeNewNote(noteObject) {
    const noteCard = document.createElement("div");
    noteCard.classList.add("note-card");
    noteCard.setAttribute("id", noteObject.id);

    const titleNote = document.createElement("h3");
    titleNote.innerText = noteObject.title;

    const bodyNote = document.createElement("p");
    bodyNote.innerText = noteObject.body;

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-date-container");

    const dateCreate = document.createElement("h5");
    dateCreate.classList.add("date-create");
    const formattedDate = noteObject.createdAt.split("T")[0];
    dateCreate.innerText = formattedDate;

    const btnChangeStatus = document.createElement("button");
    btnChangeStatus.classList.add("button-change-status");
    btnChangeStatus.innerText = noteObject.archived ? "Active" : "Archived";
    btnChangeStatus.addEventListener("click", function () {
      if (noteObject.archived == false) {
        addNotesToArchived(noteObject.id);
      } else {
        addNotesToActive(noteObject.id);
      }
    });
    const editLogo = document.createElement("i");
    editLogo.classList.add("fa-regular", "fa-pen-to-square");
    const editButton = document.createElement("button");
    editButton.classList.add("button-edit");
    editButton.appendChild(editLogo);
    editButton.addEventListener("click", function () {
      editNotes(noteObject.id);
    });

    const deleteLogo = document.createElement("i");
    deleteLogo.classList.add("fa-solid", "fa-trash");
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("button-delete");
    deleteButton.appendChild(deleteLogo);
    deleteButton.addEventListener("click", function () {
      deleteNotes(noteObject.id);
    });
    buttonContainer.append(
      dateCreate,
      btnChangeStatus,
      editButton,
      deleteButton
    );
    noteCard.append(titleNote, bodyNote, buttonContainer);
    return noteCard;
  }

  function addNotesToArchived(notesId) {
    const notesTarget = findNotes(notesId);
    if (notesTarget == null) return;
    notesTarget.archived = true;
    document.dispatchEvent(new Event(RENDER_EVENT));
  }
  function addNotesToActive(notesId) {
    const notesTarget = findNotes(notesId);
    if (notesTarget == null) return;
    notesTarget.archived = false;
    document.dispatchEvent(new Event(RENDER_EVENT));
  }
  function findNotes(notesId) {
    for (const noteItem of _notesData.getAll())
      if (noteItem.id === notesId) {
        return noteItem;
      }
  }

  function editNotes(notesId) {
    const notesTarget = findNotes(notesId);
    if (notesTarget == null) return;
    document.getElementById("title").value = notesTarget.title;
    document.getElementById("body").value = notesTarget.body;
    deleteNotes(notesId);
  }

  function deleteNotes(notesId) {
    const notesTarget = findNotesIndex(notesId);
    if (notesTarget == -1) return;
    _notesData.getAll().splice(notesTarget, 1);
    document.dispatchEvent(new Event(RENDER_EVENT));
  }
  function findNotesIndex(notesId) {
    for (const index in _notesData.getAll()) {
      if (_notesData.getAll()[index].id === notesId) return index;
    }
  }

  document.addEventListener(RENDER_EVENT, function () {
    const activeNotes = document.getElementById("active-notes-body");
    const archivedNotes = document.getElementById("archived-notes-body");
    activeNotes.innerHTML = "";
    archivedNotes.innerHTML = "";

    for (const noteListItem of _notesData.getAll()) {
      const noteElement = makeNewNote(noteListItem);
      if (!noteListItem.archived) {
        activeNotes.append(noteElement);
      } else {
        archivedNotes.append(noteElement);
      }
    }
  });
};
export default addNotes;
