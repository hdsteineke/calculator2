const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addResult = document.getElementById('add-result');
const addButton = document.getElementById('add-button');

console.log(addInput1);
console.log(addInput2, addResult, addButton);

addButton.addEventListener('click', () => {

const firstValue = addInput1.valueAsNumber;
const secondValue = addInput2.valueAsNumber;
const sum = firstValue + secondValue;


console.log(firstValue);
console.log(secondValue);
console.log(sum);

addResult.textContent = sum;






})