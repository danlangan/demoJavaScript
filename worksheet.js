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

//let randomNumber = Math.floor(Math.random()* 11);
//let bandName = ''

//if (randomNumber < 3) {
    //bandName = "Beatles";
//} else if (randomNumber < 6 && randomNumber > 2) {
    //bandName = "Stones";
//} else if (randomNumber > 5 && randomNumber < 9) {
    //bandName = "Floyd";
//} else if (randomNumber === 9 || 10) {
    //bandName = "Hendrix";
//}

//console.log(bandName)

//for(let i = 0; i < 7; i++) {
    //if (i < 7) {
        //console.log("JavaScript is cool!")
    //}
//}

//for(let i = 0; i < 11; i++) {
    //if (i < 11) {
        //console.log(i)
   // }
//}

//let helloMessage = "hello";
//let goodbyeMessage = "goodbye";

//for(let i = 0; i < 10; i++) {
    //if (i % 2 === 0) {
      //  console.log(helloMessage);
    //} else if (i % 2 === 1) {
     //   console.log(goodbyeMessage);
    //}
//}
//let dansFavMovie = "Inception";
//console.log(dansFavMovie)

function usersFavBand () {
    let favBand = prompt("What is your favorite band or musical artist?: ");
    return favBand;
}
console.log(usersFavBand())

//let instructorIsAwesome = true;

//while(instructorIsAwesome) {
   // let studentsInstructorOpin = prompt("Do you think your instructor is awesome? Please answer with y/n: ")
   // if (studentsInstructorOpin === "y") {
    //    console.log("Awesome we're glad you like your instructor!")
  //      instructorIsAwesome = false
//    } else if (studentsInstructorOpin === "n") {
    //    console.log("Sorry to hear you dont like your instructor, please refresh and let us know if you like them")
  //  }
//}

function concertDisplay(musicalAct) {
    let myStreet = prompt("What street do you live on?")
    console.log(`It would be great if ${musicalAct} played a show on ${myStreet}!`)
}console.log(concertDisplay(favBand))