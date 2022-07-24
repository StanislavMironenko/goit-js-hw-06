const list = document.querySelector(['#categories']);

const allChildren = list.children;

console.log(`Number of categories: ${allChildren.length}`);

const categoryList = document.querySelectorAll('.item');

categoryList.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`)
    console.log(` Elements: ${element.lastElementChild.children.length}`)

});
    

   

