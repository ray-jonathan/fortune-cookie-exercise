// Initializing js
jokesFortunes = [
    "When Chuck Norris goes to donate blood, he declines the syringe, and instead requests a hand gun and a bucket.",
    "In an average living room there are 1,242 objects Chuck Norris could use to kill you, including the room itself.",
    "Chuck Norris can hit you so hard that he can actually alter your DNA. Decades from now your descendants will occasionally clutch their heads and yell 'What The Hell was That?'.",
    "Chuck Norris once shot down a German fighter plane with his finger. By yelling 'Bang!'",
    "If you spell Chuck Norris in Scrabble, you win. Forever.",
    "A lie in time saves nine.",
    "work, n.:\n\tThe blessed respite from screaming kids and\n\tsoap operas for which you actually get paid.",
    "You can't cheat the phone company.",
    "You must realize that the computer has it in for you.  The irrefutable\nproof of this is that the computer always does what you tell it to do.",
    "Beauty:\n\tWhat's in your eye when you have a bee in your hand."
];

const buttonForward = document.querySelector('[data-inputForward');
const buttonBackward = document.querySelector('[data-inputBackward');
const buttonRandom = document.querySelector('[data-inputRandom');
const output = document.querySelector('[data-output');

buttonForward.addEventListener("click", advanceJoke);
buttonBackward.addEventListener("click", backJoke);
buttonRandom.addEventListener("click", randomJoke);

let count = 0;
console.log(count);

// Looping forward buttonForward
function advanceJoke(){
    count +=1;
    if (count > jokesFortunes.length - 1){
        count = 0;
        output.textContent = jokesFortunes[count];
    }
    else{
        output.textContent = jokesFortunes[count];
    }
    console.log(count);
}
// Looping backward buttonBackward
function backJoke(){
    count -=1;
    if (count < 0){
        count = jokesFortunes.length -1;
        output.textContent = jokesFortunes[count];
    }
    else{
        output.textContent = jokesFortunes[count];
    }
    console.log(count);
}
// Create a random count
function randomJoke(){
    count = Math.floor(Math.random() * 10);
    output.textContent = jokesFortunes[count];
    console.log(count);
}

// Default joke on page
output.textContent = jokesFortunes[0];
