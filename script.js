let size;
function generateGrid(size = 16) {
  if (size < 100) {
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
  } else {
    alert("Size must be lower than 100!");
    size = prompt("Enter a different value!");
    generateGrid(size);
  }
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
      element.style.opacity = increaseOpacity(element);
    });
  });
  q = 0;
}

function increaseOpacity(element) {
  const css = window.getComputedStyle(element);
  let opacity = css.opacity;
  opacity += 10;
  return opacity;
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
/*TODO: Find a method to increase opacity of the blocks..*/
