let containerSize = 16;
const container = document.querySelector(".container");

for (let i = 0; i < containerSize ** 2; i++) {
  const square = document.createElement("div");
  square.className = "square";
  container.appendChild(square);
}

const grid = document.querySelectorAll(".square");
for (const square of grid) {
  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "white";
  });
}
