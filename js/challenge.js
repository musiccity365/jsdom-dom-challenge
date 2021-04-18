// 1. As a user, I should see the timer increment every second once the page has
// loaded.
const counter = document.getElementById('counter');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const heartButton = document.getElementById('heart');
const numberLikes = document.getElementById('.likes');
const likedNumbers = {};

function
incrementTimer() {
    let currentNumber = counter.innerText;
    counter.innerText = parseInt(currentNumber) + 1;
}

function decrementTimer() {
    let currentNumber = counter.innerText;
    counter.innerText = parseInt(currentNumber) - 1;
}

function autoIncrement() {
    setInterval(incrementTimer, 1000);
}

function likeNumber() {
    //currentNumber has been liked x times
    const currentNumber = counter.innerText;
    if (likedNumbers[counter.innerHTML]) {
        likedNumbers[counter.innerHTML] += 1;
        document.getElementById(currentNumber).innerText = `${currentNumber} has been liked
        ${likedNumbers[currentNumber]} times`;
    } else {
        likedNumbers[counter.innerHTML] = 1;
        numberLikes.innerHTML += `${counter.innerText} has been liked
        ${likedNumbers[currentNumber]} times`;
    }
}

// 2. As a user, I can manually increment and decrement the counter using the plus
// and minus buttons.
plusButton.addEventListener('click', incrementTimer);
minusButton.addEventListener('click', decrementTimer);

// 3. As a user, I can 'like'
// an individual number of the counter.I should see the
// count of the number of 'likes'
// associated with that number displayed.
heartButton.addEventListener('click', likeNumber);

// 4. As a user, I can pause the counter, which should:

//     *
//     pause the counter *
//     disable all buttons except the pause button *
//     switch the label on the button from "pause"
// to "resume"

// 5. As a user, I should be able to click the "restart"
// button to restart the
// counter and re - enable the buttons.
// 6. As a user, I can leave comments on my gameplay, such as: "Wow, what a fun
// game this is.
// "