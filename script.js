"use strict";
// API from humorAPI.com
const button = document.getElementById("joke-button");
const jokeText = document.getElementById("joke");


const jokeButton = document.getElementById("joke-button");
if (jokeButton) {
    jokeButton.addEventListener('click', getJoke);
}


function getJoke() { // I used zybooks as reference for this function to get the joke from the API
    let startPoint = "https://api.humorapi.com/jokes/random";
    let apiKey = "f89c6a5b7e7a42be9b6c39a36fe72c50";
    let endPoint = "?api-key="
    let url = `${startPoint}${endPoint}${apiKey}`
    const xhr = new XMLHttpRequest(); // create new  xhr request
   
    xhr.addEventListener("load", responseReceivedHandler); //when finished loading, append the html content by calling the response handler function
    xhr.responseType = "json";
    xhr.open("GET", url);
    xhr.send();
}
function responseReceivedHandler() {
    let html = "<p>";
    html += this.response.joke;
    html += "</p>";
    document.querySelector("#joke").innerHTML = html;
}

// accordion widget
$("#services").accordion({
    collapsible: true //enables collapsible rows
});

// carousel
$(".carousel-container").slick();

// web storage
const target = document.getElementById("background"); // target the <main>
const themeButton = document.getElementById("light-mode"); // the css light mode class
const currentTheme = localStorage.getItem("currentTheme");

if (currentTheme != null) {
    target.classList.toggle("light-mode"); //if not in the storage, toggle light mode
}

function toggleTheme () {
    let currentTheme = localStorage.getItem("currentTheme");
    if(currentTheme != null) {
        localStorage.removeItem("currentTheme");
    } else {
        localStorage.setItem("currentTheme", "light-mode");
    }
    target.classList.toggle("light-mode"); // enables/disables the css theme
}
themeButton.addEventListener("click", toggleTheme);

$("#submit").click(function() {
    let name = document.getElementById("name").value;
    alert(`Thank you ${name}, we'll be in contact soon!`); //lets the user know I'll be in touch soon
})