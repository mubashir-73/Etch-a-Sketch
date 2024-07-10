const grd = document.querySelector("#Grid");
let size = 16;
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
function calculateDimensions(size) {
  return Math.sqrt((900 * 900) / (size * size));
}

let block = document.querySelectorAll(".hdivs");

block.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.style.backgroundColor = "black";
  });
});

/*TODO: Add Function to take size of grid from user.*/
