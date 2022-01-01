let productInput = document.getElementById("product-name");
let charsRemain = document.getElementById("remaining-chars");

const spanElement = document.getElementById("remaining-chars"); // classes

function keyPresses(event) {
  let enteredText = event.target.value;
  /*   console.log(enteredText); */
  let enteredTextLength =
    enteredText.length; /* display the current length of chars */
  /*   console.log(enteredTextLength); */

  let maxAllowedChars =
    productInput.maxLength; /* does not autocomplete but recognizes as String */ /* L in Length in UC */
  /*   console.log(maxAllowedChars); */

  let remainChars =
    maxAllowedChars -
    enteredTextLength; /* maxlength in form - current entered text */
  /*   console.log(remainChars);  */

  charsRemain.textContent =
    remainChars; /* set text content with remainChars value */

  if (remainChars <= 10) {
    spanElement.classList.remove("lit");
    spanElement.classList.add("warning"); // wrapped in a String
  } else {
    spanElement.classList.remove("warning"); // wrapped in a String
    spanElement.classList.add("lit");
  } // try adding 0 and 10 above conditions as well as change bg color of productInput
}

productInput.addEventListener("input", keyPresses);
