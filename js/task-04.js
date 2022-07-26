const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueDisplay=document.querySelector('#value')

decrementBtn.addEventListener("click", () => {   
    valueDisplay.innerHTML--
});

incrementBtn.addEventListener("click",() => {   
    valueDisplay.innerHTML++
    });

decrementBtn.addEventListener("click", onDecrentButtonClick);
incrementBtn.addEventListener("click", onIncrementButtonClick);

// let counterValue = 0;
// function onDecrentButtonClick() {
//     updateValue(counterValue-=1);
 
   
// }

// function onIncrementButtonClick() {
//     updateValue((counterValue+=1));
    
// }
// function updateValue(value){
//     valueDisplay.innerHTML = value;
// }
