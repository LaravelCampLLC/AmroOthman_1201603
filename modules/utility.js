export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function greet(name) {
  return `Hello, ${name}!`;
}

export const book = {
    title: '1984',
    author: 'George Orwell',
    price: 199
};

export const PI = 3.14;

export const car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2020,
  displayInfo: function() {
    return `Car: ${this.year} ${this.make} ${this.model}`;
  },
  start: function() {
    return 'Car started';
  },
  stop: function() {
    return 'Car stopped';
  }
};


