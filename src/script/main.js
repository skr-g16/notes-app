function main() {
  const baseUrl = 'https://notes-api.dicoding.dev/v2';

  const getNote = () => {
    fetch(`${baseUrl}/notes`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.error) {
          showResponseMessage(responseJson.message);
        } else {
          console.log(responseJson);
          rendelALLNote(responseJson.data);
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
        getNote();
      })
      .catch((error) => {
        showResponseMessage(error);
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
        getNote();
      })
      .catch((error) => {
        showResponseMessage(error);
      });
  };

  const rendelALLNote = (notes) => {
    const activeNote = document.querySelector('#active-notes-body');
    activeNote.innerHTML = '';
    notes.forEach((note) => {
      activeNote.innerHTML += `
        <div class="note-card" id="${note.id}">
          <h3>${note.title}</h3>
          <p>${note.body}</p>
          <div class="button-container">
            <h5 class="date-create">${note.createdAt.split('T')[0]}</h5>
            <button class="button-change-status">${note.archived ? 'Active' : 'Archived'}</button>
            <button class='button-delete' id="${note.id}">Delete</button>
          </div>
        </div>
      `;
    });

    activeNote.addEventListener('click', (event) => {
      if (event.target.classList.contains('button-delete')) {
        const noteId = event.target.id;
        deleteNote(noteId);
      }
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
    getNote();
  });
}

export default main;
