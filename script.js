// ================= ATM DATA =================
let balance = 1000;
let enteredAmount = 0;
let isLoggedIn = false;

// 5 valid PINs
const passwords = ["1234", "1111", "2222", "3333", "9999"];

// ================= ELEMENTS =================
const screen = document.getElementById("input");
const pinInput = document.getElementById("input2");
const buttons = document.querySelectorAll("button");

// ================= SCREEN MESSAGE FUNCTION =================
function showMessage(msg) {
  screen.value += msg + "\n";
  screen.scrollTop = screen.scrollHeight;
}

// Initial message
showMessage("Enter PIN");

// ================= BUTTON EVENTS =================
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.innerText;

    if (value === "Enter") enterPin();
    else if (value === "+100") addAmount(100);
    else if (value === "+200") addAmount(200);
    else if (value === "+500") addAmount(500);
    else if (value === "Deposit") deposit();
    else if (value === "WithDraw") withdraw();
    else if (value === "Close") closeATM();
  });
});

// ================= FUNCTIONS =================

function enterPin() {
  screen.disabled = false;

  if (passwords.includes(pinInput.value)) {
    isLoggedIn = true;
    showMessage("Access Granted ✔ Balance ₹" + balance);
  } else {
    showMessage("Wrong PIN ❌");
  }
  pinInput.value = "";
}

function addAmount(amount) {
  if (!isLoggedIn) {
    showMessage("Please Enter PIN First");
    return;
  }
  enteredAmount += amount;
  showMessage("Amount Selected ₹" + enteredAmount);
}

function deposit() {
  if (!isLoggedIn || enteredAmount === 0) {
    showMessage("Select Amount First");
    return;
  }
  balance += enteredAmount;
  showMessage("Deposited ₹" + enteredAmount + " | Balance ₹" + balance);
  enteredAmount = 0;
}

function withdraw() {
  if (!isLoggedIn || enteredAmount === 0) {
    showMessage("Select Amount First");
    return;
  }
  if (enteredAmount > balance) {
    showMessage("Insufficient Balance ❌");
  } else {
    balance -= enteredAmount;
    showMessage("Withdrawn ₹" + enteredAmount + " | Balance ₹" + balance);
  }
  enteredAmount = 0;
}

function closeATM() {
  isLoggedIn = false;
  enteredAmount = 0;
  showMessage("ATM Closed 🔒");
  pinInput.value = "";
}
function closeATM() {
  isLoggedIn = false;
  enteredAmount = 0;

  // clear and close screen
  screen.value = "";
  screen.disabled = true;

  pinInput.value = "";
}
