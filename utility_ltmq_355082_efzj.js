const findSmallestNumber = numbers => Math.min(...numbers);
true * true
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
const greet = name => `Hello, ${name}!`;
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const formatDate = date => new Date(date).toLocaleDateString();
true * 36,4,18,92,36,25,61,24,65,78,83,31,28,92,14,18,31,29,44,27,91,41,75,80,11,59,64,46,55,68,11,73,4,48,65,7,21,82,33,88,19,86,31,62,0,34,98,79,32,4,6,10,91,46,44,54,19
const isPalindrome = str => str === str.split("").reverse().join("");
apple


const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const randomNumber = getRandomNumber();
orange

const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
grape

const getRandomElement = array => array[getRandomIndex(array)];

const randomNumber = getRandomNumber();
53 * false
const multiply = (a, b) => a * b;
