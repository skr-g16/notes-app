const realTimeVal = () => {
  const form = document.querySelector("form");
  const titleInput = form.elements.title;
  const bodyInput = form.elements.body;

  form.addEventListener("submit", (event) => event.preventDefault());

  const customValidationHandler = (inputElement, validationMessage) => {
    inputElement.setCustomValidity("");

    if (inputElement.validity.valueMissing) {
      inputElement.setCustomValidity("This field is required.");
      return;
    }

    if (inputElement.value.trim() === "") {
      inputElement.setCustomValidity("Input cannot be empty or just spaces.");
      return;
    }

    if (inputElement.validity.patternMismatch) {
      inputElement.setCustomValidity(validationMessage);
      return;
    }
  };

  const addValidationListeners = (inputElement, validationMessage) => {
    inputElement.addEventListener("input", () =>
      customValidationHandler(inputElement, validationMessage)
    );
    inputElement.addEventListener("blur", (event) => {
      customValidationHandler(event.target, validationMessage);
      const connectedValidationEl = document.getElementById(
        event.target.getAttribute("aria-describedby")
      );
      connectedValidationEl.innerText = event.target.validationMessage;
    });
  };

  addValidationListeners(
    titleInput,
    "Title cannot contain special characters."
  );
  addValidationListeners(bodyInput, "Body cannot contain special characters.");
};

export default realTimeVal;
