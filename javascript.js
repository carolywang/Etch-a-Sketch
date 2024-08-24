// create container
const container = document.querySelector(".container");
let containerHeight = 960;
let containerWidth = 960;
container.style.height = containerHeight + "px";
container.style.width = containerWidth + "px";

// functions to create grid and hover effect
function creatGrid(size) {
  // create grid
  for (let i = 0; i < size ** 2; i++) {
    const square = document.createElement("div");
    square.className = "square";
    square.style.height = containerHeight / size + "px";
    square.style.width = containerWidth / size + "px";
    container.appendChild(square);
  }
}

function createWhiteHoveringEffect() {
  // hover effect on grid
  const grid = document.querySelectorAll(".square");
  for (const square of grid) {
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "white";
    });
  }
}

function createMultiColorHoveringEffect() {
  // hover effect on grid
  const grid = document.querySelectorAll(".square");
  for (const square of grid) {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = `rgb(${R},${G},${B})`;
    });
  }
}

// initial grid with size 16 and white hovering effect
let size = 16;
creatGrid(size);
createWhiteHoveringEffect();

//add button to create new grid
const btn = document.querySelector(".btn1");
btn.addEventListener("click", () => {
  //prompt to get new grid size
  let newSize = parseInt(
    prompt("Input a number between 1 and 100 to get a new grid of that size:")
  );
  while (Number.isNaN(newSize) || newSize > 100 || newSize <= 0) {
    newSize = parseInt(prompt("Please input a number between 1 and 100!"));
  }
  //clear existing grid
  container.textContent = "";
  // create new grid and hover effect
  creatGrid(newSize);
  createWhiteHoveringEffect();
  size = newSize;
});

//add button to create multicolor hovering effect
const btnColor = document.querySelector(".btn2");
btnColor.addEventListener("click", () => {
  //clear existing grid
  container.textContent = "";
  // create new grid and hover effect
  creatGrid(size);
  createMultiColorHoveringEffect();
});

//add button to create white hovering effect
const btnWhite = document.querySelector(".btn3");
btnWhite.addEventListener("click", () => {
  //clear existing grid
  container.textContent = "";
  // create new grid and hover effect
  creatGrid(size);
  createWhiteHoveringEffect();
});
