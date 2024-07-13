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
let q = 0;
function activateTiles() {
  let block = document.querySelectorAll(".hdivs");

  block.forEach((element) => {
    element.addEventListener("mouseover", () => {
      element.style.backgroundColor = randomColorGenerator();
    });
  });
  q = 0;
}

function randomColorGenerator() {
  var o = Math.round;
  var r = Math.random;
  var s = 255;
  return "rgba(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + ")";
}

function destroyGrid() {
  const grd = document.querySelectorAll(".vdivs");
  grd.forEach((element) => {
    element.parentNode.removeChild(element);
  });
}
generateGrid();
const btn = document.querySelector("#buttons");
btn.addEventListener("click", () => {
  size = document.getElementById("gridsize").value;
  destroyGrid();
  generateGrid(size);
});
/*TODO: To make the opacity of each div increase gradually.*/
