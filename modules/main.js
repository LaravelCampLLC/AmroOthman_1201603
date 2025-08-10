import {add} from './math.js';
import {subtract, multiply, greet, book, PI, car} from './utility.js';
import {Circle, Square} from './shapes.js';
import {add as calculatorAdd, subtract as calculatorSubtract} from './calculator.js';
import {increment} from './counter.js';

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