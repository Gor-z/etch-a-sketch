const frame = document.querySelector('#frame')
const sizeRage = document.querySelector('#canvas-size')
const sizeNumber = document.querySelector('#canvas-size-number')

let CellsPerRow = 16

const createCanvasCells = (size) => {
    frame.textContent = ''
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

sizeRage.addEventListener('change', () => {
    console.log(sizeRage.value);
    CellsPerRow = sizeRage.value
    sizeNumber.textContent = `${CellsPerRow} x ${CellsPerRow}`
    createCanvasCells(CellsPerRow * CellsPerRow)
})

createCanvasCells(CellsPerRow * CellsPerRow)



