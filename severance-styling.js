"use strict";
window.onload = function (){
    const greeting =  document.getElementById("greeting");

    let name = prompt("Who are you?")

    if(name && name.trim() !== ""){
        greeting.textContent = "Welcome, " + name.trim();
    } else{
        greeting.textContent = "Welcome, Employee";
    }

}


