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
  lastName: "Sobin",
  age: 26,
};

const displayUserData = document.querySelector("#user-data button");

function showUserInfo() {
  const outputDataElement = document.getElementById("output-user-data");

  for (const key in dummyData) {
    const createNewLi = document.createElement("li");
    const outputText = key.toUpperCase() + ": " + dummyData[key]; // bind propertyName and the propertyName value
    createNewLi.textContent = outputText; // extend to list textcontent

    outputDataElement.append(createNewLi);
  }
}

displayUserData.addEventListener("click", showUserInfo);
