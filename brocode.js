// Number guessing game

const min = 1;
const maxno = 100;
const ans = Math.floor(Math.random() * (maxno - min + 1)) + min;

let attempt = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt(`Guess a number between ${min} and ${maxno}`);
    guess = Number(guess);

    if (isNaN(guess)) {
        window.alert("Please enter a valid number.");
    }
    
    else if (guess < min || guess > maxno) {
        window.alert(`Please guess a number between ${min} and ${maxno}.`);
    } 
    else {
        attempt++;

        if (guess < ans) 
        {
            window.alert("Too low.");
        }
         else if (guess > ans) {
            window.alert("Too high.");
        } 
        else {
            window.alert(`Correct! It took you ${attempt} attempts. The answer is ${ans}.`);
            running = false; // Exit the loop when the guess is correct
        }
    }
}
