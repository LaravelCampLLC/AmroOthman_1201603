import { getValueB } from './moduleB.js';

export function getValueA() {
//   console.log("A sees:", getValueB()); this line causes circular dependency error
  return "Value from A";
}

export function printValues() {
  console.log('A sees:', getValueB());
}
