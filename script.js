const grd = document.querySelector("#Grid");
let size = 16;
for (let i = 0; i <= size; i++) {
  const columndiv = document.createElement("div");
  columndiv.classList.add("vdivs");
  for (let j = 0; j <= size; j++) {
    const subdiv = document.createElement("div");
    subdiv.style.width = calculateDimensions(size);
    subdiv.style.height = calculateDimensions(size);
    subdiv.classList.add("hdivs");
    columndiv.appendChild(subdiv);
  }
  grd.appendChild(columndiv);
}
function calculateDimensions(size) {
  let area = (900 * 900) / (size * size);
  let dimensions = Math.sqrt(area);
  console.log(dimensions);
  return dimensions;
}
/*TODO:  Add event listener to each div.*/
