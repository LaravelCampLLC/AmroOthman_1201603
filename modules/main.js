import {add} from './math.js';
import {subtract, multiply, greet, book, PI, car} from './utility.js';
import {Circle, Square} from './shapes.js';
import {add as calculatorAdd, subtract as calculatorSubtract} from './calculator.js';
import {increment} from './counter.js';
import cube,{divide} from './math.js';
import { url, timeout, retryCount } from './config.js';
import { fetchUser } from './api.js';
import { getUserInput } from './input.js';

console.log(add(2, 4));
console.log(subtract(10, 5));
console.log(multiply(3, 7));
console.log(greet('Batman'));
console.log(`Book: ${book.title}, Author: ${book.author}, Price: $${book.price}`);
console.log(`PI value is ${PI}`); 

//16
document.getElementById('myButton').addEventListener('click', async () => {
  try {
    const helperModule = await import('./helper.js');
    const message = helperModule.greeting('Amro');
    console.log(message);
  } catch (error) {
    console.error('Failed to load helper module:', error);
  }
});


//17
console.log(`Circle area: ${new Circle(5).area()}`);
console.log(`Square area: ${new Square(4).area()}`);

//18
console.log(`Calculator Add: ${calculatorAdd(5, 3)}`);
console.log(`Calculator Subtract: ${calculatorSubtract(10, 4)}`);

//19
/* Solved here by using different imports from different modules */

//20
console.log(car.displayInfo());
console.log(car.start());
console.log(car.stop());

//21
console.log(`Incremented counter: ${increment()}`);
console.log(`Incremented counter: ${increment()}`);

//22
/* Solved in common_new.js */

//23
console.log(`Math Divide: ${divide(10, 2)}`);


//24
document.getElementById('loadBtn').addEventListener('click', async () => {
  try {
    const math = await import('./math.js');
    const result = math.square(5);
    console.log('Square of 5 is:', result);
  } catch (error) {
    console.error('Failed to load module:', error);
  }
});

//25
import { printValues as printA } from './moduleA.js';
import { printValues as printB } from './moduleB.js';

printA(); // A sees: Value from B
printB(); // B sees: Value from A

//26
console.log(`Cube of 3 is: ${cube(3)}`);

//27
function fetchData() {
  console.log(`Fetching from ${url} with timeout ${timeout} ms, retrying up to ${retryCount} times.`);
  let attempts = 0;
  function tryFetch() {
    attempts++;
    console.log(`Attempt ${attempts}...`);
    if (attempts < retryCount) {
      console.log('Failed, retrying...');
      tryFetch();
    } else {
      console.log('Success!');
    }
  }
  
  tryFetch();
}

fetchData();

//28
fetchUser(1)
  .then(user => {
    console.log('User data:', user);
  })
  .catch(error => {
    console.error('Error fetching user:', error);
  });

//29
// Aliases already used in the import statements abov

//30

document.getElementById('submitBtn').addEventListener('click', () => {
  try {
    const userInput = getUserInput('usernameField');
    console.log('User input:', userInput);
  } catch (error) {
    console.error(error.message);
  }
});
