
const form = document.querySelector(".login-form");

form.addEventListener("submit", submitEvent);

function submitEvent(e) {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  const userLogin = {
    email: email.value,
    password: password.value
}


  console.log(userLogin);
  e.currentTarget.reset();
}