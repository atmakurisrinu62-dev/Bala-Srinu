alert("Welcome To My Wishes");

const display = document.getElementById("display");

function getElements(value) {
  display.value += value;
}

function clearScreen() {
  display.value = "";
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "ERROR";
  }
}
