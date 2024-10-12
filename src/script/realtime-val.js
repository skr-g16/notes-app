const realTimeVal = () => {
  const form = document.querySelector('form');
  const titleInput = form.elements.title;
  const bodyInput = form.elements.body;

  form.addEventListener('submit', (event) => event.preventDefault());

  const customValidationHandler = (inputElement, validationMessage) => {
    inputElement.setCustomValidity('');
    const connectedValidationEl = document.getElementById(
      inputElement.getAttribute('aria-describedby'),
    );

    if (inputElement.validity.valueMissing) {
      inputElement.setCustomValidity('This field is required.');
    } else if (inputElement.value.trim() === '') {
      inputElement.setCustomValidity('Input cannot be empty or just spaces.');
    } else if (inputElement.validity.patternMismatch) {
      inputElement.setCustomValidity(validationMessage);
    }

    connectedValidationEl.innerText = inputElement.validationMessage;
    if (inputElement.validationMessage) {
      connectedValidationEl.classList.add('visible');
    } else {
      connectedValidationEl.classList.remove('visible');
    }
  };

  const addValidationListeners = (inputElement, validationMessage) => {
    inputElement.addEventListener('input', () =>
      customValidationHandler(inputElement, validationMessage),
    );
    inputElement.addEventListener('blur', () => {
      customValidationHandler(inputElement, validationMessage);
    });
  };

  addValidationListeners(titleInput, '');
  addValidationListeners(bodyInput, '');
};

export default realTimeVal;
