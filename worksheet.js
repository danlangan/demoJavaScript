"use strict";

// var dayOfWeek = "Monday";

// var dayOfWeek = "Friday";

//console.log(`I can't wait for ${dayOfWeek}!`);

//let animalInput = prompt("What is your favorite animal?")

//let colorInput = prompt("what is your favorite color?")

//console.log(`I've never seen a ${colorInput} ${animalInput}!`)

// fav breakfast is eggs and bacon, fav lunch is a peanut butter and jelly sandwhich, and my fav dinner is pizza

//let timeOfDay = prompt("What time is it?");
//let foodOption = ""

//if (timeOfDay < 1200) {
//    foodOption = "Eggs and Bacon";
//} else if (timeOfDay > 1200 && timeOfDay < 1700) {
//    foodOption = "Peanut Butter and Jelly Sandwhich";
//} else if (timeOfDay > 1700) {
//    foodOption = "Pizza";
//}

//console.log(foodOption)

let randomNumber = Math.floor(Math.random()* 11);
let bandName = ''

if (randomNumber < 3) {
    bandName = "Beatles";
} else if (randomNumber < 6 && randomNumber > 2) {
    bandName = "Stones";
} else if (randomNumber > 5 && randomNumber < 9) {
    bandName = "Floyd";
} else if (randomNumber === 9 || 10) {
    bandName = "Hendrix";
}

console.log(bandName)