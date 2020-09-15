"use strict";

const buttonElement = document.getElementById("btn");
const forestImage = document.getElementById("forestImage");

buttonElement.addEventListener("click", buttonClickHandler);
buttonElement.addEventListener("click", changeButtonNameOnClick);

forestImage.addEventListener("mouseover", (event) => {
  event.currentTarget.setAttribute("src", "./assets/image/forest.jpg");
});

forestImage.addEventListener("mouseout", (event) => {
  event.currentTarget.setAttribute("src", "./assets/image/smoked_forest.jpg");
});

function buttonClickHandler() {
  let input = document.getElementById("mainInput").value;
  if (input.length === 0) {
    console.log("Your input is empty!");
  } else {
    console.log(input);
  }
}

function changeButtonNameOnClick() {
  if (buttonElement.textContent === "Press me") {
    buttonElement.textContent = "Some text";
  } else {
    buttonElement.textContent = "Press me";
  }
}
