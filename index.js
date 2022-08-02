"use strict";

// console.log("Hello World!");

//function counterPrinter (userInput){
//    for(let i = 0; i < userInput; i++){
//        console.log(`My new favorite number is ${i}.`);
//    }    
//}

//counterPrinter(parseInt(prompt("Please enter a whole number between 1 and 1000! 🤡"))); 


// function below
//function ageIsGreater(userInput){
   // if(userInput > 26){
  //      return true;
 //   }
   //     return false
//}
//     //invocation
//let isAgeGreater = ageIsGreater(
   // parseInt(
   //     prompt("Let's see if you are older than I am!\nPlease enter your age (in whole numners)."
//        )
 //   )
//);

//if (isAgeGreater) {
//    alert("Congrats! You're old!")
//}else{
//    alert("Ha! I am older than you!")
//}

// Collection of objects

let driverArray = [
    {
        name: "Mario",
        engineClass: 100,
        favoriteTrack: "Piranha Plant Slide",
        colorPalette: "red blue",
    },
    {
        name: "Luigi",
        engineClass: 100,
        favoriteTrack: "Super Bell Subway",
        colorPalette: "green blue",
    },
    {
        name: "Yoshi",
        engineClass: 50,
        favoriteTrack: "Shy Guy Falls",
        colorPalette: "green white",
    },
    {
        name: "Toad",
        engineClass: 50,
        favoriteTrack: "Toad Harbor",
        colorPalette: "red white",
    },
    {
        name: "Bowser",
        engineClass: 150,
        favoriteTrack: "Neo Bowser City",
        colorPalette: "yellow green",
    },
    {
        name: "Wario",
        engineClass: 150,
        favoriteTrack: "Mount Wario",
        colorPalette: "yellow purple",
    },
    {
        name: "Waluigi",
        engineClass: 100,
        favoriteTrack: "Electrodome",
        colorPalette: "purple black",
    },
    {
        name: "DK",
        engineClass: 150,
        favoriteTrack: "Cloudtop Cruise",
        colorPalette: "brown red",
    },
];


function searchByColorPalette(array){
    let userInput = prompt("Please enter a color to search by: ");
    let foundDrivers = array.filter(function(driverElement){
        if (driverElement.colorPalette.includes(userInput)) {
            return true;
        }
    });
    return foundDrivers;
}


function searchUserDefinedProp (array){
    let userInputProp = prompt("Enter the property that you would like to search by: ");
    let userInoutVal = prompt("Enter the value of that property: ");
    let foundItems = array.filter(function(element){
        try {
            if(element[userInputProp].includes(userInoutVal)){
                return true;    
            }
        } catch (error) {
            console.log(error);
        }
        finally {
            if(element[userInputProp]===parseInt(userInoutVal)){
                return true;
            }
        }
    });
    return foundItems;
}
let driverPrinter = searchUserDefinedProp(driverArray).map(function(element){
    return `${element.name} likes to driver their ${element.engineClass}cc kart around their favorite track, ${element.favoriteTrack}!`
});

console.log(driverPrinter);