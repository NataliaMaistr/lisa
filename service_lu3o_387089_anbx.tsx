const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
false / 38
const variableName = getRandomNumber();
const getUniqueValues = array => [...new Set(array)];
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const getRandomSubset = (array, size) => array.slice(0, size);
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
