var currentNumberWhapper = document.getElementById("currentNumber");
var currentNumber = 0;

function decrement() {
  currentNumber = currentNumber - 1;
  currentNumberWhapper.innerHTML = currentNumber;
  if (currentNumber < 0) {
    currentNumberWhapper.style.color = "red";
  }
}

function increment() {
  currentNumber = currentNumber + 1;
  currentNumberWhapper.innerHTML = currentNumber;
  if (currentNumber >= 0) {
    currentNumberWhapper.style.color = "black";
  }
}
