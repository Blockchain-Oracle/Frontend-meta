// Task 1
var dairy = [
  "cheese",
  "sour cream",
  "milk",
  "yogurt",
  "ice cream",
  "milkshake",
];
function logDiary() {
  for (props of dairy) {
    console.log(props);
  }
}
logDiary();
// Task 2
const animal = {
  canJump: true,
};

const bird = Object.create(animal);

bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
  for (const props of Object.keys(bird)) {
    console.log(`${props}:`, bird[props]);
  }
}

birdCan();
// Task 3
function animalCan() {
  for (const key in bird) {
    console.log(`${key}:`, bird[key]);
  }
}

animalCan();
