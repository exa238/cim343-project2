"use strict";
// change the name when a person enters their own
window.onload = function (){
    const greeting =  document.getElementById("greeting");

    let name = prompt("Who are you?")

    if(name && name.trim() !== ""){
        greeting.textContent = "Welcome, " + name.trim();
    } 
    else{
        greeting.textContent = "Welcome, Employee";
    }

}

const nightBtn = document.getElementById("nightModeBtn");

// save even though it loads
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    nightBtn.textContent = "Deactivate MDR Mode";
}

nightBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        nightBtn.textContent = "Deactivate MDR Mode";
    } else {
        localStorage.setItem("darkMode", "disabled");
        nightBtn.textContent = "Activate MDR Mode";
    }
});



