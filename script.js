//1 
function createCounter() {
    let count = 0;
    return function() {
        count += 1;
        return count;
    };
}
const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());

//2
function outerFunction() {
    let privateVariable = "I am private";
    return {
        set(innerVariable) { 
            privateVariable = innerVariable;
            return privateVariable;
        },
        get() {
            return privateVariable;
        }
    };

}
const changePrivate = outerFunction();
console.log(changePrivate.get());
console.log(changePrivate.set("New Value"));

//3
function createAdder(input){
    return function(num) {
        return input + num;
    };
}
const addFive = createAdder(5);
console.log(addFive(10));

//4
function delayedGreeting(message, delay) {
    setTimeout(function() {
        console.log(message);
    }, delay);
}
delayedGreeting("Hello after 3 seconds", 3000);

//5
function keepTrack(){
    let list = [1, 2, 3];
    return function(num){
        list.push(num);
        return list;
    }
}
const trackList = keepTrack();
console.log(trackList(4));
console.log(trackList(5));

//6
function createFibo() {
  const cache = {}; 

  function fib(n) {
    if (n <= 1) return n;
    if (cache[n] !== undefined) {
      console.log(`Stored: fib(${n})`);
      return cache[n];
    }
    console.log(`Calculating: fib(${n})`);
    cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
  }

  return fib;
}

const fibonacci = createFibo();
console.log(fibonacci(6)); 
console.log(fibonacci(6)); 

//7 
function authenticate(password="pass"){
    let savedPassword = password;
    return {
        newPass(newPassword) {
            savedPassword = newPassword;
            return "Saved successfully";
        },
        check(passwordToCheck) {
            return passwordToCheck === savedPassword;
        }
    };
}
const auth = authenticate("pass123");
console.log(auth.check("pass123"));
console.log(auth.check("Pass123"));
console.log(auth.newPass("newPass456"));
console.log(auth.check("newPass456"));

//8
function createPerson(name, age){
    return{
        getName(){
            return name;
        },
        getAge(){
            return age;
        },
        setName(newName){
            name = newName;
            return name;
        },
        setAge(newAge){
            age = newAge;
            return age;
        }
    }
}

//9
function callCounter(fn) {
    let count = 0;
    return function (...args) {
        count++;
        console.log(`Number of calls: ${count}`);
        return fn(...args);
    };
}

const counterOfFunction = callCounter(authenticate);
console.log(counterOfFunction("amro"));
console.log(counterOfFunction("amro"));

//10
let clickCount = 0;
function buttonClickHandler(){
    const button = document.getElementById("myButton");
    button.addEventListener("click", function() {
        clickCount++;
        console.log(`Button was clicked ${clickCount} times!`);
    });
}

buttonClickHandler();
