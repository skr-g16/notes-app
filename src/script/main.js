function main() {
  const baseUrl = 'https://notes-api.dicoding.dev/v2';

  const getAllNotes = () => {
    fetch(`${baseUrl}/notes`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.error) {
          showResponseMessage(responseJson.message);
        } else {
          renderActiveNotes(responseJson.data);
        }
      })
      .catch((error) => {
        console.log(error);
        showResponseMessage(error.message);
      });

    fetch(`${baseUrl}/notes/archived`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.error) {
          showResponseMessage(responseJson.message);
        } else {
          renderArchivedNotes(responseJson.data);
        }
      })
      .catch((error) => {
        console.log(error);
        showResponseMessage(error.message);
      });
  };

  const insertNote = (note) => {
    fetch(`${baseUrl}/notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: note.title,
        body: note.body,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        showResponseMessage(responseJson.message);
        getAllNotes();
      })
      .catch((error) => {
        showResponseMessage(error);
      });
  };

  const addtoarchive = (noteId) => {
    fetch(`${baseUrl}/notes/${noteId}/archive`, {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((responseJson) => {
        showResponseMessage(responseJson.message);
        getAllNotes();
      })
      .catch((error) => {
        showResponseMessage(error.message);
      });
  };

  const unarchiveNote = (noteId) => {
    fetch(`${baseUrl}/notes/${noteId}/unarchive`, {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((responseJson) => {
        showResponseMessage(responseJson.message);
        getAllNotes();
      })
      .catch((error) => {
        showResponseMessage(error.message);
      });
  };

  const deleteNote = (noteId) => {
    fetch(`${baseUrl}/notes/${noteId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        showResponseMessage(responseJson.message);
        getAllNotes();
      })
      .catch((error) => {
        showResponseMessage(error);
      });
  };

  const showResponseMessage = (message = 'Check your internet connection') => {
    alert(message);
  };

  document.addEventListener('DOMContentLoaded', () => {
    const inputNoteTitle = document.getElementById('title');
    const inputNoteBody = document.getElementById('body');
    const buttonSave = document.querySelector('.button-add-notes');
    buttonSave.addEventListener('click', function (event) {
      event.preventDefault();
      const note = {
        title: inputNoteTitle.value,
        body: inputNoteBody.value,
      };
      insertNote(note);
      inputNoteTitle.value = ``;
      inputNoteBody.value = ``;
    });
    getAllNotes();
  });
  const renderActiveNotes = (notes) => {
    const activeNotesCard = document.querySelector('.active-notes-body');
    activeNotesCard.innerHTML = '';
    notes.forEach((note) => {
      activeNotesCard.innerHTML += `
      <div class="note-card" id="${note.id}">
            <h3>${note.title}</h3>
            <p>${note.body}</p>
            <div class="button-container">
              <h5 class="date-create">${note.createdAt.split('T')[0]}</h5>
              <button class="button-change-status" dataset="active-note" id="${note.id}">Archived</button>
              <button class='fa-solid fa-trash' dataset="button-delete" id="${note.id}"></button>
            </div>
          </div>
      `;
      const deleteButton = activeNotesCard.querySelector(
        `#${note.id} .fa-trash`,
      );
      deleteButton.addEventListener('click', (e) => {
        const noteId = e.target.id;
        deleteNote(noteId);
      });
      const buttonChangeStatus = activeNotesCard.querySelector(
        `#${note.id} .button-change-status`,
      );
      buttonChangeStatus.addEventListener('click', (e) => {
        const noteId = e.target.id;
        addtoarchive(noteId);
      });
    });
  };
  const renderArchivedNotes = (notes) => {
    const archiveNoteCard = document.querySelector('.archived-notes-body');
    archiveNoteCard.innerHTML = '';
    notes.forEach((note) => {
      archiveNoteCard.innerHTML += `
      <div class="note-card" id="${note.id}">
            <h3>${note.title}</h3>
            <p>${note.body}</p>
            <div class="button-container">
              <h5 class="date-create">${note.createdAt.split('T')[0]}</h5>
              <button class="button-change-status" dataset="archive-note" id="${note.id}">Active</button>
              <button class='fa-solid fa-trash' dataset="button-delete" id="${note.id}"></button>
            </div>
          </div>
      `;
      const buttonChangeStatus = archiveNoteCard.querySelector(
        `#${note.id} .button-change-status`,
      );
      buttonChangeStatus.addEventListener('click', (e) => {
        const noteId = e.target.id;
        unarchiveNote(noteId);
      });
      const deleteButton = archiveNoteCard.querySelector(
        `#${note.id} .fa-trash`,
      );
      deleteButton.addEventListener('click', (e) => {
        const noteId = e.target.id;
        deleteNote(noteId);
      });
    });
  };
}

export default main;
