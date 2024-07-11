let size;
function generateGrid(size = 16) {
  const grd = document.querySelector("#Grid");
  for (let i = 0; i <= size; i++) {
    const columndiv = document.createElement("div");
    columndiv.classList.add("vdivs");
    for (let j = 0; j <= size; j++) {
      const subdiv = document.createElement("div");
      let side = calculateDimensions(size);
      subdiv.style.width = side;
      subdiv.style.height = side;
      subdiv.style.borderColor = "black";
      subdiv.classList.add("hdivs");
      columndiv.appendChild(subdiv);
    }
    grd.appendChild(columndiv);
  }
  activateTiles();
}
function calculateDimensions(size) {
  return Math.sqrt((900 * 900) / (size * size));
}

function activateTiles() {
  let block = document.querySelectorAll(".hdivs");

  block.forEach((element) => {
    element.addEventListener("mouseover", () => {
      element.style.backgroundColor = "black";
    });
  });
}

function destroyGrid() {
  const grd = document.querySelector("#Grid");
}
generateGrid();
const btn = document.querySelector("#buttons");
btn.addEventListener("click", () => {
  size = document.getElementById("gridsize").value;
  destroyGrid();
  generateGrid(size);
});
/*TODO: Add a function that destroys grid before creating next grid.*/
