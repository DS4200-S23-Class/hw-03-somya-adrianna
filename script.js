function clickHandler() {
  // setting random RGB values for the button to be set to when clicked
  let randomRed = Math.random() * 255;
  let randomGreen = Math.random() * 255;
  let randomBlue = Math.random() * 255;

  // changing the background color of the button
  document.getElementById(
    "button"
  ).style.backgroundColor = `rgb(${randomRed},${randomGreen},${randomBlue})`;

  // hardcoding three messages that the button will display when clicked
  let hi = "Hi! Click on me again!";
  let whoa = "Whoa how did I change again?";
  let origin = "Button";

  let strArr = [hi, whoa, origin];

  // randomly choosing an index to choose from the array
  document.getElementById("button").innerHTML =
    strArr[Math.floor(Math.random() * 3)];
}
