import { getValueA } from "./moduleA.js";

export function getValueB() {
  // console.log("B sees:", getValueA()); this line causes circular dependency error 
  return "Value from B";
}

export function printValues() {
  console.log("B sees:", getValueA());
}
