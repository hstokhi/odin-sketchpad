//create 16 rows of 16 divs. each row wrapped in a div with display:flex//
const container = document.querySelector('.container')

function makeGrid(gridSize) {
    const size = (1/gridSize)*100
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div')
        row.classList.toggle('row')
        row.style.display = 'flex'
        container.appendChild(row)
        row.style.height = `${size}vh`
        for (let j = 0; j < gridSize; j++) {
            const div = document.createElement('div')
            div.classList.toggle('column')
            div.style.width = `${size}vw`
            div.addEventListener('mouseover', () => {
                div.classList.add('colored')
            })
            row.appendChild(div)
        }
    }
    
    
}

window.onload = function() {
    makeGrid(16)
};

/*const grid = document.querySelectorAll('.column');
grid.forEach((gridBlock) => {
    gridBlock.addEventListener('mouseover', () => {
        gridBlock.classList.toggle('colored')
    });
});*/