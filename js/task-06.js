const input = document.querySelector("#validation-input");



input.addEventListener("blur", () => {
  
    if (input.value.length < input.getAttribute("data-length")) {       
        input.classList.add("invalid");
        return
    };
    input.classList.remove("invalid")
    input.classList.add("valid");
});