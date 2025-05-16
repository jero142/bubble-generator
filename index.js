//  counter
const counterDisplay = document.querySelector('h3');

let counter = 0;

const bubbleMaker = () => {

// create bubble child of the body

const bubble = document.createElement("span");
bubble.classList.add("bubble");
document.body.appendChild(bubble);

// randomized bubble size between 100 and 200 px

const size = Math.random() * 200 + 100 + "px";

bubble.style.height = size;
bubble.style.width = size;

//  randomized bubble position

bubble.style.top = Math.random() * 100 + 50 + "%";
bubble.style.left = Math.random() * 100 + "%"

// bubbles animations more on the left with ternary
const plusMinus = Math.random() > 0.5 ? 1 : -1;


bubble.style.setProperty('--left', Math.random() * 100 * plusMinus + "%");

// counter bubbles
bubble.addEventListener("click", () => {
  counter++;
  counterDisplay.textContent = counter;
  bubble.remove();
  });


// bubbles life 
  setTimeout(() => {
    bubble.remove();
  }, 8000);
};

setInterval(bubbleMaker, 1000);