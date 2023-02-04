let newGrid = document.querySelector('.newGrid')
let blackButton = document.querySelector('.black')
let rainbowButton = document.querySelector('.rainbow')
let container = document.querySelector('.grid-container')
let range = document.querySelector('#range')
let rangeValue = document.querySelector('.range-value')
let gridSize = 16
pen = false

let currentMode = 'black'

blackButton.onclick = () => {
  changeMode('black')
  blackButton.style.backgroundColor = "#636769"
  blackButton.style.color = 'white'
  rainbowButton.style.backgroundColor = 'white'
  rainbowButton.style.color = 'black'
}


rainbowButton.onclick = () => {
  changeMode('rainbow')
  rainbowButton.style.backgroundColor = "#636769"
  rainbowButton.style.color = 'white'
  blackButton.style.backgroundColor = 'white'
  blackButton.style.color = 'black'
}

function changeMode(Mode){
  currentMode = Mode

}

range.addEventListener("input", function() {
  rangeValue.innerHTML = range.value + ' x ' + range.value;
  container.style.gridTemplateColumns = `repeat(${range.value}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${range.value}, 1fr)`;
  container.innerHTML = "";
  gridSize = range.value
  createGrid()
});

function createGrid(){
  for (let i=0; i < gridSize ** 2; i++){
    let gridItem = document.createElement('div');
    gridItem.className = 'grid-item'
    container.appendChild(gridItem);
};
}


container.addEventListener('click', function(){
  if (pen == false){
    pen = true
  }
  else pen = false
})


container.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("grid-item") && currentMode == 'rainbow' && pen == true) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
     e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
      }
  else if (e.target.classList.contains("grid-item") && currentMode == 'black' && pen == true){
    e.target.style.backgroundColor = 'black'
  }
});


newGrid.addEventListener('click', function() {
  container.innerHTML = "";
  createGrid()
  });


  window.onload = () => {
    createGrid()
  }