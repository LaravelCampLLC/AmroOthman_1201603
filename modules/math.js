export function add(a, b) {
  return a + b;
}
export function square (a) {
  return a * a;
}
export default function cube(a) {
  return a * a * a;
}

export * from './calculator.js';