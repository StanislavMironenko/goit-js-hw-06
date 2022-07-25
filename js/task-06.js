const input = document.querySelector("#validation-input");



input.addEventListener("blur", (event) => {
  console.log(event.currentTarget.value.length);
    if (event.currentTarget.value.length != input.getAttribute("data-length")) {       
        input.classList.add("invalid");
        input.classList.remove("valid")
        return
    };
    input.classList.remove("invalid")
    input.classList.add("valid");
});