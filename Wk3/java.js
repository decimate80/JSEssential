// const container = container.getElementById("container");
// const singleElement = container.querySelector(".myClass");
// const multipleElements = container.querySelectorAll(".myClass");


// console.log(singleElement.textContent);
// console.log(multipleElements[0].textContent);
// console.log(multipleElements[1].textContent);

const movieImgs = {
    'gone-with-the-wind': 'https://media.giphy.com/media/XLwrTpDlEGPe0/giphy.gif',
    avatar: 'https://media.giphy.com/media/AxhxIcTMEMqR2/giphy.gif',
    titanic: 'https://media.giphy.com/media/uTp9UJtBzWe5i/giphy.gif',
    'star-wars': 'https://media.giphy.com/media/vzX4OAfFKhpzG/giphy.gif',
    endgame: 'https://media.giphy.com/media/Z9QGyT1RQL00318Lzz/giphy.gif',
    'the-sound-of-music': 'https://media.giphy.com/media/oqyKi6VA1du8M/giphy.gif',
    et: 'https://media.giphy.com/media/14jRWmyHsokyOY/giphy.gif',
    'the-ten-commandments':
      'https://media.giphy.com/media/2mzOkV1gI3ynLGWgKZ/giphy.gif',
    'doctor-zhivago': undefined,
    'the-force-awakens': 'https://media.giphy.com/media/1ApqN5QrLUePu/giphy.gif',
  };

const button = document.getElementById("myButton");

button. style.backgroundColor = "C0C0C0";
button. style.color = "crimson";
button. style.fontSize = "24px";
button. style.padding = "10px 20px";
button. style.borderRadius = "5px";
button. style.border = "none";
button. style.cursor = "pointer";
button. style.outline = "none";
button. style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.2)";

button. addEventListener("click", () => {
  console.log("Button was clicked!");
});

console.log(button.textContent);

button. textContent = "Click me!";

console.log(button.textContent);

//Remove style from html
// const paragraph = document.getElementById("myParagraph");
// paragraph.style.removeProperty("font-size");

//set style supercede html
const paragraph = document.getElementById("myParagraph");
paragraph.setAttribute("style", "color:orange; font-size:18px;");

//set importance to style within 
// const paragraph = document.getElementById("myParagraph");
// paragraph.style.setProperty("color","purple","important");
const div = document.getElementById("myButton");
const output = document.getElementById("output");
div.onmouseover = function() {
    output.textContent = "Mouse over";
}
div.onmouseout = function() {
    output.textContent = "Mouse out";
}
