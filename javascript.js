//Pseudocode - create 16 rows of 16 divs. each row wrapped in a div with display:flex//
const container = document.querySelector('.container')
const row = document.createElement('div')
row.classList.add('row')
row.style.display = 'flex'
const div = document.createElement('div')

function makeGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        container.appendChild(row)
        for (let j = 0; j < gridSize; j++) {
            row.appendChild(div)
        }
    }
}

window.onload = function() {
    makeGrid(16)
}