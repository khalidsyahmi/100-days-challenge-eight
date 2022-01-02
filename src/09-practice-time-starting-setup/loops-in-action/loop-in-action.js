// sum button

const calculateSumBtn = document.querySelector("#calculator button"); // you always forget Queryselector

function calculateSum() {
  const numberInputElement = document.getElementById("user-number");
  const enteredNumber = numberInputElement.value; //auto complete is shit

  let sumUptoNumber = 0;

  for (i = 0; i <= enteredNumber; i++) {
    sumUptoNumber = sumUptoNumber + i; //i here equals the current number of the index
  }

  const outputResultElement = document.getElementById("calculated-sum");
  outputResultElement.textContent = sumUptoNumber;
  outputResultElement.style.display = "block"; //CSS property wrapped in a quotation
}

calculateSumBtn.addEventListener("click", calculateSum);

//highlight button //for of //variables

const highlightLinksBtn = document.querySelector("#highlight-links button");

function linkHighlighter() {
  const anchorElements = document.querySelectorAll("#highlight-links a");

  for (const anchorElement of anchorElements) {
    anchorElement.classList.add("highlight");
  }
}

highlightLinksBtn.addEventListener("click", linkHighlighter);

//display user data //for in // objects

const dummyData = {
  firstName: "Klowe",
  lastName: "So-Bin",
  age: 26,
};

const displayUserData = document.querySelector("#user-data button");

function showUserInfo() {
  const outputDataElement = document.getElementById("output-user-data");

  outputDataElement.innerHTML = ""; // will dump the memory before creating

  for (const key in dummyData) {
    const createNewLi = document.createElement("li");
    const outputText = key.toUpperCase() + ": " + dummyData[key]; // bind propertyName and the propertyName value
    createNewLi.textContent = outputText; // extend to list textcontent //transform data to String

    outputDataElement.append(createNewLi); // attach the String next to the lists
  }
}

displayUserData.addEventListener("click", showUserInfo);

//Statistics //A classic dice roll // how many rolls until the die lands the entered number

const diceBtn = document.querySelector("#statistics button");

//f1
function rollDice() {
  return Math.floor(Math.random() * 6) + 1; // +1 begin 1 to 6 instead of zero
}

//f2
function deriveNumberOfRolls() {
  const targetNumberInput = document.getElementById("user-target-number"); //input DOM
  const rollsList = document.getElementById("dice-rolls"); // output DOM

  const enteredNumber = targetNumberInput.value; // i forgor

  rollsList.innerHTML = "";

  let hasRolled = false; // not rolled yet
  let numberOfRolls = 0; // use let since the value is transformed

  //loop
  while (!hasRolled) {
    const rolledNumber = rollDice(); // assign into new variable everytime rollDice() calculation is performed //random
    /*   if (rolled==enteredNumber){
      hasRolled =true;
    } */
    numberOfRolls++; //increment 1 each loop
    const newRollList = document.createElement("li");
    //create structure and element first before logic
    const enteredText = "Roll" + numberOfRolls + ":" + rolledNumber;
    newRollList.textContent = enteredText;
    hasRolled = rolledNumber == enteredNumber; // == operator will return a boolean so it loop until it is true
    rollsList.append(newRollList);
  }

  const totalRolls = document.getElementById("output-total-rolls");
  const targetNumber = document.getElementById("output-target-number");

  /* output here respectively */
  totalRolls.textContent = numberOfRolls;
  targetNumber.textContent = enteredNumber;
}

diceBtn.addEventListener("click", deriveNumberOfRolls);
