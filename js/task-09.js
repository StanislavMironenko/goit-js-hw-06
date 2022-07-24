function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector('body')
const colorChangeBtn = document.querySelector(".change-color");
const colorBody = document.querySelector(".color");

colorChangeBtn.addEventListener("click", changeColorBody);

function changeColorBody() {
  const color=getRandomHexColor();
  
  colorBody.innerHTML = color;
  body.style.backgroundColor = color;
  
}