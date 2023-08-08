const sketchArea = document.querySelector('.sketch-area');
let size = 10;
const base = 600/size;//formula to get a equal sizes for each cells
const width = 600+size;//formula to allocate the gaps
sketchArea.setAttribute('style', `width:${width}px`);

for(let i = 0; i < size; i++){
    for(let j = 0; j < size; j++){
        const cells = document.createElement('div');
        cells.classList.add('cell')
        cells.setAttribute('style', `flex: 1 0 ${base}px`);
        sketchArea.appendChild(cells)
    }
}