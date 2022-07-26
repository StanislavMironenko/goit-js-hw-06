function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector('input')
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const galleryBoxes = document.querySelector('#boxes')


createBtn.addEventListener("click", () => {
  const amount = input.value;
   createBoxes(amount);
  });
  destroyBtn.addEventListener("click", () => {
  galleryBoxes.innerHTML = '',
    input.value = ''
  })


function createBoxes(amount) {
  let elWidth = 20;
  let elHeight = 20;

  const colectionElements = [];
  for (let i = 0; i < amount; i += 1) {
    const ten = 10;
    elWidth += ten;
    elHeight += ten;
    const div = document.createElement("div");

    div.style.width = `${elWidth}px`;
    div.style.height = `${elHeight}px`;
    div.style.backgroundColor = getRandomHexColor();

    colectionElements.push(div);
  }
  return galleryBoxes.append(...colectionElements);
}


 

