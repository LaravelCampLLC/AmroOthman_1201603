// Common
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = {
  add,
  subtract,
};

// ES6
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

/* The above code demonstrates both CommonJS and ES6 module syntax for exporting functions. */