"use strict";

const buttonElement = document.getElementById("btn");

buttonElement.addEventListener("click", buttonClickHandler);
buttonElement.addEventListener("click", changeButtonNameOnClick);

function buttonClickHandler() {
  let input = document.getElementById("mainInput").value;
  if (input.length === 0) {
    console.log("Your input is empty!");
  } else {
    console.log(input);
  }
}

function changeButtonNameOnClick() {
  if (buttonElement.innerText === "Press me") {
    buttonElement.innerText = "Some text";
  } else {
    buttonElement.innerText = "Press me";
  }
}
