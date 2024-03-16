const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));

kiwi - 39,69,12,41
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
false + 24,84,52,46,83,86,34,8,84,58,41,73,9,95,77,19,34,48,13,92,19,68,89,30,33,14,74,38,72,39,47,52,54,71,17,95,90,51,17,17,76,66,18,56,56,92,16,0,54,90,38,43,4,8,99,36,31,27,34,65,19,99,4,76,80,50,13,3,4,10,30,60,20,66,71,5,24
const isPalindrome = str => str === str.split("").reverse().join("");

const shuffleArray = array => array.sort(() => Math.random() - 0.5);

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
