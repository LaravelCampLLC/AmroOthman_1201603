//1
console.log("Hello, World!");

//2
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(5, 3)); 

//3
function squareRoot(x) {
    return Math.sqrt(x);
}
console.log(squareRoot(16));

//4
function triangleArea(base, height) {
    return 0.5 * base * height;
}
console.log(triangleArea(5, 10));

//5
let x = 5;
let y = 10;
console.log("Before: "+ x, y);
[x, y] = [y, x];
console.log("After:"+ x, y);

//6
/*Create a JavaScript function that solves a quadratic equation of the
form ax^2 + bx + c = 0*/

function solveQuadratic(a, b, c) {
    if (a === 0) {
        throw new Error("Coefficient 'a' cannot be zero.");
    }
    let dis = b * b - 4 * a * c;
    if (dis > 0) {
        let root1 = (-b + Math.sqrt(dis)) / (2 * a);
        let root2 = (-b - Math.sqrt(dis)) / (2 * a);
        return [root1, root2];
    } else if (dis === 0) {
        let root = -b / (2 * a);
        return [root];
    } else {
        return [];
    }
}
console.log(solveQuadratic(1, -3, 2)); // [2, 1]

//7
function kmToMiles(km) {
    return km * 0.621371;
}
console.log(kmToMiles(5)); // 3.106855

//8
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log(celsiusToFahrenheit(0)); // 32

//9
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}
console.log(getRandomNumber());

//10
function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}
console.log(checkNumber(5)); 
console.log(checkNumber(-3));
console.log(checkNumber(0)); 

//11
function checkOddEven(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(checkOddEven(5)); 
console.log(checkOddEven(10));

//12
function findLargestNumber(num1, num2, num3) {
    let largest = num1;
    if (num2 > largest) {
        largest = num2;
    }
    if (num3 > largest) {
        largest = num3;
    }
    return largest;
}
console.log(findLargestNumber(5, 10, 3)); 

//13
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(5)); 
console.log(isPrime(10)); 

//14
function primeInInterval(start, end) {
    for (let num = start; num <= end; num++) {
        if (isPrime(num)) {
            console.log(num);
        }
    }
}
primeInInterval(10, 50);

//15
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5)); 

//16
function displayMultiplicationTable(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}
displayMultiplicationTable(5);

//17
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(10)); 

//18
function isArmstrongNumber(num) {
    let sum = 0;
    let temp = num;
    const digits = String(num).length;
    while (temp > 0) {
        const digit = temp % 10;
        sum += digit ** digits;
        temp = Math.floor(temp / 10);
    }
    return sum === num;
}
console.log(isArmstrongNumber("IS armestrong number?: "+ 153)); 
console.log(isArmstrongNumber("IS armestrong number?: "+ 123)); 

//19
function findArmstrongNumbersInInterval(start, end) {
    const armstrongNumbers = [];
    for (let num = start; num <= end; num++) {
        if (isArmstrongNumber(num)) {
            armstrongNumbers.push(num);
        }
    }
    return armstrongNumbers;
}
console.log("Armstrong numbers between 100 and 999:", findArmstrongNumbersInInterval(100, 999));

//20
function calculator(a, b, operation) {
    switch (operation) {
        case "add":
            return a + b;
        case "subtract":
            return a - b;
        case "multiply":
            return a * b;
        case "divide":
            if (b !== 0) {
                return a / b;
            } else {
                return "Division by zero error";
            }
        default:
            return "Invalid operation";
    }
}

console.log(calculator(5, 3, "add"));
console.log(calculator(5, 3, "subtract"));
console.log(calculator(5, 3, "multiply"));
console.log(calculator(5, 3, "divide"));
console.log(calculator(5, 0, "divide"));

//21
function sumOfNaturalNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log("Sum of natural numbers up to 5 (iterative):", sumOfNaturalNumbers(5));

//22
function haveSameLastDigit(num1, num2) {
    const lastDigit1 = num1 % 10;
    const lastDigit2 = num2 % 10;
    return lastDigit1 === lastDigit2;
}
console.log(haveSameLastDigit(123, 3)); 
console.log(haveSameLastDigit(123, 4)); 

//23
function findHCF(num1, num2) {
    while (num2 !== 0) {
        const temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    return num1;
}
console.log("HCF of 12 and 18: ", findHCF(12, 18));
console.log("HCF of 5 and 10:", findHCF(5, 10));

//24
function findLCM(num1, num2) {
    const hcf = findHCF(num1, num2);
    return (num1 * num2) / hcf;
}
console.log("LCM of 12 and 18: ", findLCM(12, 18));
console.log("LCM of 5 and 10:", findLCM(5, 10));

//25
function findFactors(num) {
    const factors = [];
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            factors.push(i);
            if (i !== num / i) {
                factors.push(num / i);
            }
        }
    }
    return factors.sort((a, b) => a - b);
}
console.log("Factors of 12:", findFactors(12));
console.log("Factors of 15:", findFactors(15));

//26
function sumOfNaturalNumbersRecursive(n) {
    if (n <= 0) return 0;
    return n + sumOfNaturalNumbersRecursive(n - 1);
}

//27
function guessRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let userGuess;

    while (true) {
        const input = prompt("Guess a number between 1 and 100 (or type 'q' to quit):");

        if (input === null || input.toLowerCase() === 'q') {
            console.log("Game cancelled.");
            break;
        }

        userGuess = parseInt(input, 10);

        if (isNaN(userGuess)) {
            console.log("Please enter a valid number.");
            continue;
        }

        if (userGuess < randomNumber) {
            console.log("Too low! Try again.");
        } else if (userGuess > randomNumber) {
            console.log("Too high! Try again.");
        } else {
            console.log("🎉 Congratulations! You've guessed the number.");
            break;
        }
    }
}

// guessRandomNumber(); call when needed

//28
function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

const deck = [
    "Ace of Spades", "2 of Spades", "3 of Spades", "4 of Spades", "5 of Spades",
    "Ace of Hearts", "2 of Hearts", "3 of Hearts", "4 of Hearts", "5 of Hearts",
    "Ace of Diamonds", "2 of Diamonds", "3 of Diamonds", "4 of Diamonds", "5 of Diamonds",
    "Ace of Clubs", "2 of Clubs", "3 of Clubs", "4 of Clubs", "5 of Clubs"
];

console.log("Original deck:", deck);
const shuffledDeck = shuffleDeck(deck);
console.log("Shuffled deck:", shuffledDeck);

//29
//solved above

//30
//solved above

//31
function decimalToBinary(decimal) {
    if (decimal === 0) return "0000";
    let binary = "";
    while (decimal > 0) {
        binary = (decimal % 2) + binary;
        decimal = Math.floor(decimal / 2);
    }
    return binary;
}
console.log("Decimal 10 to Binary:", decimalToBinary(10));

//32
function charToASCII(char) {
    return char.charCodeAt(0);
}
console.log("ASCII value of 'A':", charToASCII('A'));
console.log("ASCII value of 'a':", charToASCII('a'));

//33
function isPalindrome(str) {
    const cleaned = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}
console.log("Is 'A man, a plan, a canal, Panama' a palindrome?", isPalindrome("A man, a plan, a canal, Panama"));
console.log("Is 'Hello, World!' a palindrome?", isPalindrome("Hello, World!"));

//34
function sortWordsAlphabetically(sentence) {
    const words = sentence.split(/\s+/);
    words.sort((a, b) => a.localeCompare(b));
    return words.join(' ');
}
console.log("Sorted words:", sortWordsAlphabetically("banana apple cherry"));

//35
function replaceChar(str, charToReplace, replacementChar) {
    const regex = new RegExp(charToReplace, 'g');
    return str.replace(regex, replacementChar);
}
console.log("Original string:", "banana apple cherry");
console.log("Replaced 'a' with 'o':", replaceChar("banana apple cherry", "a", "o"));

//36
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log("Original string:", "Hello, World!");
console.log("Reversed string:", reverseString("Hello, World!"));

//37  
// Object Literal
const person1 = {
    name: "Alice",
    age: 30,
};

// Constructor Function
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const person2 = new Person("Bob", 25);

// Object.create()
const person3 = Object.create(person1);
person3.name = "Charlie";
person3.age = 35;

//38
//Count the Occurrences of a Character in a String
function countCharOccurrences(str, char) {
    let count = 0;
    for (let c of str) {
        if (c === char) count++;
    }
    return count;
}
console.log("Occurrences of 'a' in 'banana':", countCharOccurrences("banana", "a"));

//39
function capitalizeFirstLetter(str) {
    if (str.length === 0 || typeof str !== "string") return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log("Capitalized 'hello':", capitalizeFirstLetter("hello"));

//40
function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let c of str) {
        if (vowels.includes(c)) count++;
    }
    return count;
}
console.log("Number of vowels in 'Hello, World!':", countVowels("Hello, World!"));

//41
function removeProperty(obj, prop) {
    if (obj.hasOwnProperty(prop)) {
        delete obj[prop];
    }
}
const person = {
    name: "Alice",
    age: 30,
    city: "New York"
};
removeProperty(person, "age");
console.log("Updated person object:", person);

//42
function startsAndEndsWith(str, startChar, endChar) {
    if (typeof str !== "string") return false;
    return str.startsWith(startChar) && str.endsWith(endChar);
}
console.log("Does 'Hello, World!' start with 'H' and end with '!':", startsAndEndsWith("Hello, World!", "H", "!"));

//43
function hasKey(obj, key) {
    return obj.hasOwnProperty(key);
}
console.log("Does person have a name property?", hasKey(person, "name"));
console.log("Does person have a country property?", hasKey(person, "country"));

//44
function cloneObject(obj) {
    const clone1 = Object.assign({}, obj);
    const clone2 = { ...obj };
    const clone3 = JSON.parse(JSON.stringify(obj));

    return { clone1, clone2, clone3 };
}
const original = { name: "Alice", age: 30 };
const clones = cloneObject(original);
console.log("Original object:", original);
console.log("Cloned objects:", clones);

//45
function printObjectProperties(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`Property: ${key}, Value: ${obj[key]}`);
        }
    }
}
let somePerson = {
    name: "Alice",
    age: 30,
    city: "New York"
};
printObjectProperties(somePerson);

//46
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
const personA = { name: "Alice", age: 30 };
const personB = { city: "New York", country: "USA" };
const mergedPerson = mergeObjects(personA, personB);
console.log("Merged person object:", mergedPerson);

//47
function countObjectKeys(obj) {
    return Object.keys(obj).length;
}
const personKeysCount = countObjectKeys(somePerson);
console.log("Number of keys in somePerson object:", personKeysCount);

//48
function addObjectKeyValue(obj, key, value) {
    obj[key] = value;
}
const newPerson = { name: "Alice", age: 30 };
addObjectKeyValue(newPerson, "city", "New York");
console.log("Updated person object:", newPerson);

//49
function replaceAllOccurrences(str, search, replace) {
    return str.split(search).join(replace);
}
console.log("Replace 'banana' with 'grape' in 'I like banana smoothies':", replaceAllOccurrences("I like banana smoothies", "banana", "grape"));

//50
const multilineString = `This is a string that spans
multiple lines using template literals.
You can include variables like this: ${newPerson.name}.`;
console.log("Multiline string:", multilineString);

//51
function formatCurrency(amount) {
    return `$${amount.toFixed(2)}`;
}
console.log("Formatted currency:", formatCurrency(1234.5));

//52
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}
console.log("Random string of length 11:", generateRandomString(11));

//53
function startsWithSubstring(str, substring) {
    if (typeof str !== "string" || typeof substring !== "string") return false;
    return str.startsWith(substring);
}
console.log("Does 'Hello, World!' start with 'Hello'?", startsWithSubstring("Hello, World!", "Hello"));
console.log("Does 'Hello, World!' start with 'World'?", startsWithSubstring("Hello, World!", "World"));

//54
function trimWhitespace(str) {
    if (typeof str !== "string") return "";
    return str.trim();
}
console.log("Trimmed string:", trimWhitespace("   Hello, World!   "));

//55
function objectToJson(obj) {
    return JSON.stringify(obj);
}
const personJson = objectToJson(newPerson);
console.log("JSON string of newPerson object:", personJson);

//56
function containsSubstring(str, substring) {
    if (typeof str !== "string" || typeof substring !== "string") return false;
    return str.includes(substring);
}
console.log("Does 'Hello, World!' contain 'World'?", containsSubstring("Hello, World!", "World"));
console.log("Does 'Hello, World!' contain 'world'?", containsSubstring("Hello, World!", "world"));

//57
function compareStrings(str1, str2) {
    if (typeof str1 !== "string" || typeof str2 !== "string") return false;
    return str1 === str2;
}
console.log("Are 'Hello' and 'Hello' equal?", compareStrings("Hello", "Hello"));
console.log("Are 'Hello' and 'World' equal?", compareStrings("Hello", "World"));

//58
function encodeToBase64(str) {
    if (typeof str !== "string") return "";
    return btoa(new TextEncoder().encode(str)
        .reduce((data, byte) => data + String.fromCharCode(byte), ""));
}

console.log("Base64 encoded string:", encodeToBase64("Hello, World!"));

//59
function replaceAllInstances(str, target, replacement) {
    if (typeof str !== "string" || typeof target !== "string" || typeof replacement !== "string") {
        return str;
    }
    return str.split(target).join(replacement);
}

console.log("Replace 'o' with '0' in 'Hello, World!':", replaceAllInstances("Hello, World!", "o", "0"));

//60
function replaceLineBreaks(str) {
    if (typeof str !== "string") return "";
    return str.replace(/\n/g, "<br>");
}

console.log("Replace line breaks with <br> tags:", replaceLineBreaks("Hello,\nWorld!"));

//61
function displayCurrentDateTime() {
    const now = new Date();
    console.log("Current date and time:", now.toString());
}

//62
function isLeapYear(year) {
    if (typeof year !== "number") return false;
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log("Is 2020 a leap year?", isLeapYear(2020));
console.log("Is 2021 a leap year?", isLeapYear(2021));

//63
function formatDate(date) {
    if (!(date instanceof Date)) return "";
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
}

const sampleDate = new Date("2023-10-07");
console.log("Formatted date:", formatDate(sampleDate));

//64
function displayCurrentDate() {
    const now = new Date();
    console.log("Current date:", now.toDateString());
}

//65
function compareDates(date1, date2) {
    if (!(date1 instanceof Date) || !(date2 instanceof Date)) return null;
    if (date1.getTime() === date2.getTime()) return "equal";
    return date1 < date2 ? "before" : "after";
}

const dateA = new Date("2023-10-07");
const dateB = new Date("2023-10-08");
console.log("Comparing dates:", compareDates(dateA, dateB));

//66
function startCountdown(duration) {
    let remainingTime = duration;
    const intervalId = setInterval(() => {
        if (remainingTime <= 0) {
            clearInterval(intervalId);
            console.log("Countdown finished");
        } else {
            console.log("Remaining time:", remainingTime);
            remainingTime -= 1;
        }
    }, 1000);
}
//startCountdown(5); 

//67
function removeItemFromArray(array, item) {
    if (!Array.isArray(array)) return array;
    const index = array.indexOf(item);
    if (index > -1) {
        array.splice(index, 1);
    }
    return array;
}

//68
function valueExistsInArray(array, value) {
    if (!Array.isArray(array)) return false;
    return array.includes(value);
}

console.log("Does the array contain 'apple'?", valueExistsInArray(["banana", "apple", "orange"], "apple"));
console.log("Does the array contain 'grape'?", valueExistsInArray(["banana", "apple", "orange"], "grape"));

//69
function insertItemAtPosition(array, item, position) {
    if (!Array.isArray(array) || typeof position !== "number") return array;
    const newArray = [...array];
    newArray.splice(position, 0, item);
    return newArray;
}

console.log("Insert 'grape' at index 1:", insertItemAtPosition(["banana", "apple", "orange"], "grape", 1));

//70
function appendObjectToArray(array, obj) {
    if (!Array.isArray(array)) return array;
    return [...array, obj];
}

console.log("Append object to array:", appendObjectToArray(["banana", "apple", "orange"], { fruit: "grape" }));

//71
function isArray(value) {
    return Array.isArray(value);
}

console.log("Is [1, 2, 3] an array?", isArray([1, 2, 3]));
console.log("Is 'Hello' an array?", isArray("Hello"));

//72
function emptyArray(array) {
    if (!Array.isArray(array)) return array;
    array.length = 0;
    return array;
}

console.log("Empty array:", emptyArray(["banana", "apple", "orange"]));

//73
function addItemToStartOfArray(array, item) {
    if (!Array.isArray(array)) return array;
    array.unshift(item);
    return array;
}

console.log("Array after adding 'grape' to the start:", addItemToStartOfArray(["banana", "apple", "orange"], "grape"));

//74
function removeDuplicatesFromArray(array) {
    if (!Array.isArray(array)) return array;
    return [...new Set(array)];
}

console.log("Array after removing duplicates:", removeDuplicatesFromArray(["banana", "apple", "orange", "banana"]));

//75
function mergeArraysAndRemoveDuplicates(array1, array2) {
    if (!Array.isArray(array1) || !Array.isArray(array2)) return [];
    const merged = [...array1, ...array2];
    return [...new Set(merged)];
}

console.log("Merged array without duplicates:", mergeArraysAndRemoveDuplicates(["banana", "apple"], ["orange", "banana"]));

//76
function sortItemsByQuantity(items) {
    if (!Array.isArray(items)) return [];
    return items.sort((a, b) => a.quantity - b.quantity);
}

//77
function createMatrix(rows, cols) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        const row = Array(cols).fill(0);
        matrix.push(row);
    }
    return matrix;
}

const myMatrix = createMatrix(3, 4);
console.log("Created matrix:", myMatrix);

//78
function extractPropertyValues(array, property) {
    if (!Array.isArray(array)) return [];
    return array.map(item => item[property]).filter(value => value !== undefined);
}

const items = [
    { name: "banana", quantity: 2 },
    { name: "apple", quantity: 5 },
    { name: "orange", quantity: 3 }
];

const quantities = extractPropertyValues(items, "quantity");
console.log("Extracted quantities:", quantities);

//79
function arraysAreEqual(array1, array2) {
    if (!Array.isArray(array1) || !Array.isArray(array2)) return false;
    if (array1.length !== array2.length) return false;
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) return false;
    }
    return true;
}

let array1 = [1, 2, 3];
let array2 = [1, 2, 3];
let array3 = [1, 2, 4];
arraysAreEqual(array1, array2);
arraysAreEqual(array1, array3);

//80
function getRandomItemFromArray(array) {
    if (!Array.isArray(array) || array.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

console.log("Random item from array:", getRandomItemFromArray(["banana", "apple", "orange"]));

//81
function intersectArrays(array1, array2) {
    if (!Array.isArray(array1) || !Array.isArray(array2)) return [];
    return array1.filter(item => array2.includes(item));
}

console.log("Intersection of arrays:", intersectArrays([1, 2, 3], [2, 3, 4]));

//82
function splitArrayIntoChunks(array, chunkSize) {
    if (!Array.isArray(array) || chunkSize <= 0) return [];
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
}

console.log("Split array into chunks:", splitArrayIntoChunks([1, 2, 3, 4, 5], 2));

//83
import { someFunction } from './anotherFile.js'; 

someFunction();

//84
function getFileExtension(fileName) {
    const parts = fileName.split('.');
    return parts.length > 1 ? parts.pop() : '';
}

console.log("File extension of 'document.txt':", getFileExtension('document.txt'));
console.log("File extension of 'archive.tar.gz':", getFileExtension('archive.tar.gz'));
console.log("File extension of 'no_extension':", getFileExtension('no_extension'));

//85
function isNullOrUndefined(value) {
    return value === null || value === undefined;
}

console.log("Is 'null' null or undefined?", isNullOrUndefined(null));
console.log("Is 'undefined' null or undefined?", isNullOrUndefined(undefined));
console.log("Is '5' null or undefined?", isNullOrUndefined(5));

//86
function greetUser(name = "Guest") {
    console.log("Hello, " + name + "!");
}

greetUser("Amro");
greetUser();

//87

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

// Union
const union = new Set([...setA, ...setB]);
console.log("Union:", union);

// Intersection
const intersection = new Set([...setA].filter(x => setB.has(x)));
console.log("Intersection:", intersection);

// Difference
const difference = new Set([...setA].filter(x => !setB.has(x)));
console.log("Difference:", difference);

//88
function getARandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Random number between 1 and 10:", getARandomNumber(1, 10));
console.log("Random number between 50 and 100:", getARandomNumber(50, 100));

//89
function getCurrentURL() {
    return window.location.href;
}

console.log("Current URL:", getCurrentURL());

//90
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

console.log("Is 'test@example.com' a valid email?", isValidEmail('test@example.com'));
console.log("Is 'invalid-email' a valid email?", isValidEmail('invalid-email'));

//91
function isFunction(value) {
    return typeof value === "function";
}

console.log("Is 'console.log' a function?", isFunction(console.log));
console.log("Is '5' a function?", isFunction(5));
console.log("Is 'Hello' a function?", isFunction("Hello"));
 
//92
const PI = 3.14159;
const MAX_USERS = 100;

console.log("Value of PI:", PI);
console.log("Maximum number of users:", MAX_USERS);

//93
function delayedGreeting(name) {
    setTimeout(() => {
        console.log("Hello, " + name + "!");
    }, 1000);
}

delayedGreeting("Amro");

//94
function generateRange(start, end) {
    const numbers = [];
    for (let i = start; i <= end; i++) {
        numbers.push(i);
    }
    return numbers;
}

function generateCharacterRange(startChar, endChar) {
    const chars = [];
    for (let i = startChar.charCodeAt(0); i <= endChar.charCodeAt(0); i++) {
        chars.push(String.fromCharCode(i));
    }
    return chars;
}

console.log("Number range from 1 to 5:", generateRange(1, 5));
console.log("Character range from 'a' to 'e':", generateCharacterRange('a', 'e'));

//95
function overloadedFunction(...args) {
    if (args.length === 0) {
        return "No arguments provided";
    } else if (args.length === 1) {
        return "Single argument provided: " + args[0];
    } else {
        return "Multiple arguments provided: " + args.join(", ");
    }
}

console.log(overloadedFunction());
console.log(overloadedFunction("Hello"));
console.log(overloadedFunction("Hello", "World"));

//96
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log("Top element:", stack.peek());
console.log("Popped element:", stack.pop());
console.log("Is stack empty?", stack.isEmpty());

//97
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.shift();
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log("Front element:", queue.peek());
console.log("Dequeued element:", queue.dequeue());
console.log("Is queue empty?", queue.isEmpty());

//98
function checkNumberType(num) {
    if (Number.isInteger(num)) {
        console.log(num + " is an integer.");
    } else {
        console.log(num + " is a float.");
    }
}

checkNumberType(4);
checkNumberType(4.5);

//99
function executeFunction(func) {
    if (typeof func === "function") {
        func();
    } else {
        console.log("Provided argument is not a function.");
    }
}

function sayHello() {
    console.log("Hello!");
}

executeFunction(sayHello);
executeFunction("Not a function");

//100
const img = document.getElementById("myImage");
const width = img.clientWidth;
const height = img.clientHeight;

console.log("Image dimensions:");
console.log("Width:", width);
console.log("Height:", height);