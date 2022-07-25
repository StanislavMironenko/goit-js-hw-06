const form = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

form.addEventListener("input", (event) => {
  span.textContent = event.currentTarget.value;
});
form.addEventListener("blur", () => {
  if (form.value === "") {
    span.textContent = "Anonymous";
  }
});