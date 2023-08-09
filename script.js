//to acces anytime anywhere!
let size;
const sketchArea = document.querySelector('.sketch-area');
let base;

//Creation of divs logic AS DEFAULT OF 16
function changeSize() {
    size = parseInt(rangeSlider.value);//since it returns string and once u multiply int with string, its not the SAME value!! {try to remove parseInt to see :>}
    base = (600/size);//formula to get a equal sizes for each cells

    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
            const cells = document.createElement('div');
            cells.classList.add('cell');
            cells.setAttribute('style', `flex: 1 0 ${base}px`);
            sketchArea.appendChild(cells);
        }
    }
}

//Printing of range number
const rangeNumber = document.querySelector('#range-number');
const rangeSlider = document.querySelector('.slider');
rangeNumber.textContent = rangeSlider.value;//just to display the default value
rangeSlider.addEventListener('input', () => {
    rangeNumber.textContent = rangeSlider.value;
});


changeSize();
const applyBtn = document.querySelector('#apply-btn');
applyBtn.addEventListener('click', () => {
    for(let i = 0; i < (size*size);i++){
        sketchArea.removeChild(sketchArea.lastElementChild);//to access the nodelist, childnodes is needed to be used
    }
    
    changeSize();
});

//to select the color u want
const colorPicker = document.querySelector('#color-picker');
const colorMode = document.querySelector('#color-mode');
const random = document.querySelector('#random');
const cat = document.querySelector('#cat');
const eraser = document.querySelector('#eraser');
const clear = document.querySelector('#clear');

let colorPicked = "black";//default value
//to pick a color and change
colorPicker.addEventListener('input', () =>{
    colorMode.addEventListener('click', () => {
        colorPicked = colorPicker.value;
        colorMode.setAttribute('style',`background-color:${colorPicked}`);
    });
});
//random mode
random.addEventListener('click', () => {
    const rBowList = ["red","orange","yellow","green","blue", "indigo", "violet"];
    rBowList.forEach(colors => {
        colorPicked = colors;
    });
});

//eraser mode
eraser.addEventListener('click', () => colorPicked = "white");


//clear mode
clear.addEventListener('click', () => {
    //when this is outside, the cells that are queried arent being updated
    //so by means of putting this inside, every clear, it selects all the relevant cells
    const allCells = document.querySelectorAll('.cell')
    allCells.forEach((cell) => {
        cell.style.backgroundColor = "white";
        console.log('works')
    });
});

//background changer
sketchArea.addEventListener('mouseover', (e) =>{
    e.target.style.backgroundColor = `${colorPicked}`;
});















