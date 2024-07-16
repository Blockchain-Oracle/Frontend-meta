const fruits = ["kiwi", "mango", "apple", "pear"];
function appendIndex(fruits, index) {
  console.log(`${index} ${fruits}`);
}
fruits.forEach(appendIndex);

fruits.forEach((fruits, index) => {
  console.log(index, fruits);
});

const nums = [0, 10, 20, 30, 40, 50];
var filterNum = nums.filter((nums) => {
  return nums > 20;
});

console.log(filterNum);
// [ 30, 40, 50 ]

var mapps = [0, 10, 20, 30, 40, 50].map(function (num) {
  return num / 10;
});
console.log(mapps);
// [ 0, 1, 2, 3, 4, 5 ]
const result = [];

var something = {
  speed: 100,
  color: "red",
};
let someThingArray = Object.keys(something);
someThingArray.forEach((key) => {
  result.push(key, something[key]);
});
console.log(result);
// [ 'speed', 100, 'color', 'color', 'red', 'color' ]

var bestBoxers = new Map();

bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");
bestBoxers.set(4, "The third place");
console.log(bestBoxers);
//Map(3) {1 => 'The Champion', 2 => 'The Runner-up', 3 => 'The third place'}
console.log(bestBoxers.get(1));
//set

const repetitiveFruits = ["apple", "pear", "apple", "pear", "plum", "apple"];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);
//{'apple', 'pear', 'plum'}

/***
 * Some more advanced data structures that have not been covered include:

Queues

Linked lists (singly-linked and doubly-linked)

Trees

Graphs
 */
