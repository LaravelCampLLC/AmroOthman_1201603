export function getUserInput(inputId) {
  const inputElement = document.getElementById(inputId);
  if (!inputElement) {
    throw new Error(`Element with id "${inputId}" not found`);
  }
  return inputElement.value;
}
