"use strict";

// console.log("Hello World!");

//function counterPrinter (userInput){
//    for(let i = 0; i < userInput; i++){
//        console.log(`My new favorite number is ${i}.`);
//    }    
//}

//counterPrinter(parseInt(prompt("Please enter a whole number between 1 and 1000! 🤡"))); 


// function below
function ageIsGreater(userInput){
    if(userInput > 26){
        return true;
    }
        return false
}
//invocation
let isAgeGreater = ageIsGreater(
    parseInt(
        prompt("Let's see if you are older than I am!\nPlease enter your age (in whole numners)."
        )
    )
);

if (isAgeGreater) {
    alert("Congrats! You're old!")
}else{
    alert("Ha! I am older than you!")
}