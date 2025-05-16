// create bubble child of the body

const bubble = document.createElement("span");
bubble.classList.add("bubble");
document.body.appendChild(bubble);

// randomized bubble size between 100 and 200 px

const size = Math.random() * 200 + 100 + "px";

bubble.style.height = size;
bubble.style.width = size;


