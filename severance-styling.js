"use strict";
// change the name when a person enters their own
window.onload = function () {
    const greeting = document.getElementById("greeting");
    let savedName = localStorage.getItem("username");

    if (savedName) {
        greeting.textContent = "Welcome, " + savedName;
        return;
    }
    let name = prompt("Who are you?");

    if (name && name.trim() !== "") {
        name = name.trim();
        greeting.textContent = "Welcome, " + name;
        localStorage.setItem("username", name);
    }else{
        greeting.textContent = "Welcome, Employee";
        localStorage.setItem("username", "Employee");
    }
};

const nightBtn = document.getElementById("nightModeBtn");

// save even though it loads
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    nightBtn.textContent = "View in the eyes of man";
}
nightBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        nightBtn.textContent = "View in the eyes of man";
    } else {
        localStorage.setItem("darkMode", "disabled");
        nightBtn.textContent = "View in the eyes of Kier";
    }
});

let textButton = document.getElementById("text-button");

textButton.addEventListener("click", () =>{
    document.body.style.fontSize = "24px";
    text.innerHTML = "Text size increased!";
});

let revertButton = document.getElementById("revert-button");

revertButton.addEventListener("click", () =>{
    document.body.style.fontSize = "16px";
    text.innerHTML = "Text size reverted!";
});






