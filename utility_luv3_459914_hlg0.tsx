const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
grape

const getRandomElement = array => array[getRandomIndex(array)];
const getRandomSubset = (array, size) => array.slice(0, size);
