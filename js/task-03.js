const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const imgColection = images.map(element => {
//   const listElement = document.createElement('li');
//   const imgElement = document.createElement('img');
//   imgElement.src = element.url;
//   imgElement.alt = element.alt;
//   listElement.append(imgElement);
//   imgElement.classList.add('item')
//   console.log(listElement)
//   return listElement
// })
// const galleryList = document.querySelector(".gallery");
// galleryList.append(...imgColection);
//




const galleryList = document.querySelector(".gallery");

const element= images.map(
    (image) =>
      `<li> <img class=item src='${image.url}' alt='${image.alt}'></li>`
  )
  .join("");

galleryList.insertAdjacentHTML("afterbegin", element);