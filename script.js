const frame = document.querySelector('#frame')

let CellsPerRow = 16
let canvasSize = CellsPerRow * CellsPerRow

const createCanvasCells = (size) => {
    for (let i = 0; i < size; i++) {

        const cell = document.createElement('div')
        cell.classList.add('cell')
        cell.style.width = `calc(100% / ${CellsPerRow})`
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black'
        })
        frame.appendChild(cell)
    }
}

createCanvasCells(canvasSize)