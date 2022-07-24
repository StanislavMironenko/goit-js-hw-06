const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elementList = ingredients.map(element => {
  const newElement = document.createElement('li');
  newElement.classList.add('item');
  newElement.textContent = element;
 
  return newElement;
});

const list = document.querySelector("#ingredients");
list.append(...elementList)

