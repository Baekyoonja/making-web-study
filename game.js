const firstValue = document.querySelector("#firstVaule");
const secondValue = document.querySelector("#secondValue");
const thirdValue = document.querySelector("#thirdValue");

const button = document.querySelector(".button");
const start = button.querySelector("#start");
const threeNumber = document.querySelector(".threeNumber");
const One = threeNumber.querySelector("#one");
const Two = document.querySelector("#two");
const Three = document.querySelector("#three");
const Four = document.querySelector("#four");
const Five = document.querySelector("#five");
const Six = document.querySelector("#six");
const Seven = document.querySelector("#seven");
const Eight = document.querySelector("#eight");
const Nine = document.querySelector("#nine");

function handleStart(event) {
  event.preventDefault();
}
function inputNumber() {}

function handleNumber() {
  One.addEventListener("submit", one);
  function one(event) {
    event.preventDefault();
    console.log("1");
  }
}

function handleMath() {
  min = Math.ceil(10);
  max = Math.floor(1);
  console.log(
    Math.floor(Math.random() * (max - min + 1)) + min,
    Math.floor(Math.random() * (max - min + 1)) + min,
    Math.floor(Math.random() * (max - min + 1)) + min
  );
}

function init() {
  button.addEventListener("submit", handleStart);
  handleMath();
  handleNumber();
}
init();
