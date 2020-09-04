const firstValue = document.querySelector("#firstValue");
const secondValue = document.querySelector("#secondValue");
const thirdValue = document.querySelector("#thirdValue");
const retry = document.querySelector(".retry");
const onMore = document.querySelector("#oneMore");
const button = document.querySelector(".button");
const start = button.querySelector("#start");

const One = document.querySelector("#one");
const Two = document.querySelector("#two");
const Three = document.querySelector("#three");
const Four = document.querySelector("#four");
const Five = document.querySelector("#five");
const Six = document.querySelector("#six");
const Seven = document.querySelector("#seven");
const Eight = document.querySelector("#eight");
const Nine = document.querySelector("#nine");
//const one = firstNumber.one;
const strike = document.querySelector("#strike");
const ball = document.querySelector("#ball");
const consequence = document.querySelector("#consequence");
let clicks = 0;
let strikeCount = 0;
let ballCount = 0;
let defaultNumber = [];

function onClick() {
  clicks++;
}

function handleStart(event) {
  event.preventDefault();
  if (parseInt(firstValue.textContent) === defaultNumber[0]) {
    //strike에 어떻게 쓰여질지 확인
    strikeCount++;
  }
  if (parseInt(secondValue.textContent) === defaultNumber[1]) {
    //strike에 어떻게 쓰여질지 확인
    strikeCount++;
  }
  if (parseInt(thirdValue.textContent) === defaultNumber[2]) {
    //strike에 어떻게 쓰여질지 확인
    strikeCount++;
  }

  if (
    parseInt(firstValue.textContent) != defaultNumber[0] &&
    (parseInt(firstValue.textContent) == defaultNumber[1] ||
      parseInt(firstValue.textContent) == defaultNumber[2])
  ) {
    ballCount++;
  }

  if (
    parseInt(secondValue.textContent) != defaultNumber[1] &&
    (parseInt(secondValue.textContent) == defaultNumber[0] ||
      parseInt(secondValue.textContent) == defaultNumber[2])
  ) {
    ballCount++;
  }
  if (
    parseInt(thirdValue.textContent) != defaultNumber[2] &&
    (parseInt(thirdValue.textContent) == defaultNumber[0] ||
      parseInt(thirdValue.textContent) == defaultNumber[1])
  ) {
    ballCount++;
  }

  if (
    parseInt(firstValue.textContent) == defaultNumber[0] &&
    parseInt(secondValue.textContent) == defaultNumber[1] &&
    parseInt(thirdValue.textContent) == defaultNumber[2]
  ) {
    consequence.innerText = "Congraturations! You're success! ";
  } else {
    consequence.innerText = "Try again ";
  }
  strike.innerText = "strike :" + strikeCount;
  ball.innerText = "ball :" + ballCount;
}

function handleRetry(event) {
  event.preventDefault();
  firstValue.innerText = "";
  secondValue.innerText = "";
  thirdValue.innerText = "";
  consequence.innerText = "";
  firstValue.textContent = "";
  secondValue.textContent = "";
  thirdValue.textContent = "";
  strike.innerText = "strike :0";
  ball.innerText = "ball :0";
  clicks = 0;
  strikeCount = 0;
  ballCount = 0;
  /*const image = new Image();
  image.src = `blackboard.png`;
  image.classList.add("blackboard");
  firstValue.appendChild(image);
  secondValue.appendChild(image);
  thirdValue.appendChild(image);*/
}

function handleClicks(number) {
  if (clicks % 3 === 1) {
    printFirstNumber(number);
  } else if (clicks % 3 === 2) {
    printSecondNumber(number);
  } else if (clicks % 3 === 0) {
    printThirdNumber(number);
  }
  function printFirstNumber(number) {
    firstValue.innerText = number;
  }

  function printSecondNumber(number) {
    secondValue.innerText = number;
  }

  function printThirdNumber(number) {
    thirdValue.innerText = number;
  }

  button.addEventListener("submit", handleStart);
}

function inputNumber(event) {
  event.preventDefault();
  const target = event.target;
  const number = target.querySelector("input").value;
  console.log(number);
  handleClicks(number);
  handleNumber();
}

/*
function one(event) {
  event.preventDefault();
  console.log("1");
}
function two(event) {
  event.preventDefault();
  console.log("2");
}*/

function handleNumber() {
  firstNumber.addEventListener("submit", inputNumber);
  secondNumber.addEventListener("submit", inputNumber);
  thirdNumber.addEventListener("submit", inputNumber);

  /*One.addEventListener("submit", inputNumber);
  Two.addEventListener("submit", inputNumber);
  Three.addEventListener("submit", inputNumber);
  Four.addEventListener("submit", inputNumber);
  Five.addEventListener("submit", inputNumber);
  Six.addEventListener("submit", inputNumber);
  Seven.addEventListener("submit", inputNumber);
  Eight.addEventListener("submit", inputNumber);
  Nine.addEventListener("submit", inputNumber);*/
}

function handleMath() {
  min = Math.ceil(10);
  max = Math.floor(1);
  const firstNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  const secondNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  const thirdNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  defaultNumber.push(firstNumber, secondNumber, thirdNumber);
  console.log(defaultNumber);
}

function init() {
  handleMath();
  handleNumber();
  retry.addEventListener("submit", handleRetry);
}
init();
