let newGrid = document.querySelector('.newGrid')
let container = document.querySelector('.grid-container')
let gridItems = document.querySelectorAll('.grid-item')
let gridSize = 16


for (let i=0; i < gridSize ** 2; i++){
    let gridItem = document.createElement('div');
    gridItem.className = 'grid-item'
    container.appendChild(gridItem);
};

container.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("grid-item")) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
        }
 });

gridItems.forEach(item => {
    item.addEventListener("mouseover", function() {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
 });


newGrid.addEventListener('click', function() {
    let newGridSize = prompt("Enter the number of squares per side (max 100)");
    if (newGridSize <= 100) {
        container.innerHTML = "";
        container.style.gridTemplateColumns = `repeat(${newGridSize}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${newGridSize}, 1fr)`;
        gridSize = newGridSize;
        for (let i = 0; i < gridSize ** 2; i++) {
          let gridItem = document.createElement("div");
          gridItem.classList.add("grid-item");
          container.appendChild(gridItem);
        }
      } else {
        alert("Enter a number between 1 and 100");
      }
  });
