let name = 'Vasilisa'; 
const age = 18;
let logic = true;
logic = false;
console.log('-> name =', {name, age, logic});

let apple = {
  color: "Red",
  size: "Large",
  type: "Macintosh",
}

let apple2 = apple;
apple2.size = "Small";

console.log('-> apple =', apple.size);

let fruits = ['apple', 'orange', 'pear', 'grape']; 
 
console.log('-> fruits =', fruits); 
console.log('-> fruits 1 =', fruits[0]);
console.log('-> fruits.length =', fruits.length);

for (let index = 0; index < fruits.length; index++) {
  outputFruitsInDocument("u have fruits: ", index);

}
 
function outputFruitsInDocument(prefix, position) { 
  const fruit = fruits[position]; 
  const text = prefix + fruit; 
  console.log(text); 
  const node = document.createElement('div'); 
  node.innerText = text; 
  document.body.appendChild(node); 
}
