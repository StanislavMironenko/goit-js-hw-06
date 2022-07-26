const form = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

form.addEventListener("input", (event) => {
  
  console.log(event.currentTarget.value)
  if (event.currentTarget.value) {
    
    span.textContent = event.currentTarget.value;
  } else {
    span.textContent = "Anonymous";
    
  }

});
