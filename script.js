const frame = document.querySelector('#frame')
const sizeRage = document.querySelector('#canvas-size')
const sizeNumber = document.querySelector('#canvas-size-number')
const colorPicker = document.querySelector('#color-tool')
const menu = document.querySelectorAll('#menu button')

let tool = 'pencil-tool'
let color = 'black'
let CellsPerRow = 16

const createCanvasCells = (size) => {
    frame.textContent = ''
    for (let i = 0; i < size; i++) {
        const cell = document.createElement('div')
        cell.classList.add('cell')
        cell.style.width = `calc(100% / ${CellsPerRow})`
        cell.addEventListener('mouseover', () => {
            switch (tool) {
                case 'pencil-tool':
                    cell.style.backgroundColor = color
                    break;
                case 'rainbow-tool':
                    cell.style.backgroundColor = getRandomColor()
                    break;
            }
        })
        frame.appendChild(cell)
    }
}

const getRandomColor = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red}, ${green}, ${blue})`
}


sizeRage.addEventListener('change', () => {
    console.log(sizeRage.value);
    CellsPerRow = sizeRage.value
    sizeNumber.textContent = `${CellsPerRow} x ${CellsPerRow}`
    createCanvasCells(CellsPerRow * CellsPerRow)
})

colorPicker.addEventListener('change', () => {
    color = colorPicker.value
})

menu.forEach(item => {
    item.addEventListener('click', () =>{
        menu.forEach(btn => btn.classList.remove('active'))
        item.classList.add('active')
        tool = item.id
    })
});


createCanvasCells(CellsPerRow * CellsPerRow)



