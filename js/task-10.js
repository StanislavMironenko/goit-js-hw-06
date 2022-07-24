function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector('input')
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const galleryBoxes = document.querySelector('#boxes')


createBtn.addEventListener("click", createColection);

 const colectionElements = [];
function createColection() {
 
  for (let i = 1; i <= input.value; i += 1){
    const div = document.createElement("div");
    div.style.width = '30px';
    div.style.height = '30px';
    div.style.backgroundColor = getRandomHexColor();
    console.log(div)
    colectionElements.push(div);
    console.log(colectionElements)
  }
  return colectionElements;

}

galleryBoxes.append(...colectionElements);
console.log(colectionElements);