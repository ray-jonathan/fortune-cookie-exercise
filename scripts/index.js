// Initializing js


let jokesFortunes = resultOfFor();

function resultOfFor(){
    let arrayOfFortunes = [];
    for (i = 0; i < 10; i++) { 
        fetch('https://my-little-cors-proxy.herokuapp.com/http://yerkee.com/api/fortune')
        .then(function (r) { 
            return r.json(); 
        }).then(function (fortune) { 
            arrayOfFortunes.push(fortune.fortune); 
        });
    }
    console.log(arrayOfFortunes);
    return arrayOfFortunes;
}


const buttonForward = document.querySelector('[data-inputForward]');
const buttonBackward = document.querySelector('[data-inputBackward]');
const buttonRandom = document.querySelector('[data-inputRandom]');
const output = document.querySelector('[data-output]');

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
output.textContent = "Beauty:\n\tWhat's in your eye when you have a bee in your hand."
