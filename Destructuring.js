let { PI } = Math;
console.log(Math.PI === PI); //TRUE

/*
Destructuring simply accessing of all 
componets(Methods , atrubute) of an objextss
*/

//futher exampiles and looping through objects

const colors = ["red", "orange", "yellow"];
for (var color of colors) {
  console.log(color);
}
//red orange yellow

// methods: Object.keys(), Object.values(), and Object.entries().
const car2 = {
  speed: 200,
  color: "red",
};
console.log(Object.keys(car2)); // ['speed','color']

const car3 = {
  speed: 200,
  color: "red",
};
console.log(Object.values(car3)); //["200","red"]

const car4 = {
  speed: "200",
  color: "red",
};

console.log(Object.entries(car4)); //[ [ 'speed', '200' ], [ 'color', 'red' ] ]
