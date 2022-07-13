const gridContainer = document.querySelector(".grid-container");
const gridButton = document.querySelector(".grid-size");
const eraseButton = document.querySelector(".erase");
const colorButton = document.querySelector(".color");
const resetButton = document.querySelector(".reset");
const buttons = document.querySelectorAll("button");
const sizeDisplay = document.querySelector(".size");


let color = "#000000";
let mousedown = false;
const GS = {
    small: 16,
    medium: 24,
    large: 36,
    xlarge: 64,
    default: 24,
};
let gridSize = GS.medium;

gridButton.onclick = () => {
  if (gridSize == GS.medium) {
    gridSize = GS.large;
    console.log(gridSize);
    sizeDisplay.textContent = "Large";
    return resetGrid();
  }
  if (gridSize == GS.large) {
    gridSize = GS.xlarge;
    sizeDisplay.textContent = "X-Large";
    return resetGrid();
  }
  if (gridSize == GS.xlarge) {
    gridSize = GS.small;
    sizeDisplay.textContent = "Small";
    return resetGrid();
  }
  if (gridSize == GS.small) {
    gridSize = GS.medium;
    sizeDisplay.textContent = "Medium";
    return resetGrid();
  }
};
eraseButton.onclick = () => {
  if (!eraseButton.classList.contains("clicked")) {
    eraseButton.classList.add("clicked");
    setColor("#FFFFFF");
  } else {
    eraseButton.classList.remove("clicked");
    setColor(colorButton.value);
  }
};
    

colorButton.addEventListener('input',setValue);
function setValue() {
        color = colorButton.value;
        setColor(color)
    }

setColor = (value) => {
    color = value;
};

resetButton.onclick = () => resetGrid();

resetGrid = () => {
  gridContainer.innerHTML = "";
  createGrid(gridSize, gridSize);
};

gridContainer.onmouseup = () => (mousedown = false);
gridContainer.onmousedown = () => (mousedown = true);

createGrid = (row, col) => {
  gridContainer.style.setProperty("--grid-rows", row);
  gridContainer.style.setProperty("--grid-cols", col);
  for (r = 0; r < row * row; r++) {
    const newCell = document.createElement("div");
    gridContainer.appendChild(newCell).classList.add("grid-cell");
    newCell.addEventListener("click", function () {
      newCell.style.backgroundColor = color;
    });
    newCell.addEventListener("mouseover", function () {
      if (mousedown) newCell.style.backgroundColor = color;
    });
  }
};

createGrid(gridSize, gridSize);
