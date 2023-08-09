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
const rainbow = document.querySelector('rainbow');


let colorPicked = "black";//default value

colorMode.addEventListener('click', () =>{
    colorPicker.addEventListener('input', () => colorPicked = colorPicker.value);
});

sketchArea.addEventListener('mouseover', (e) =>{
    e.target.style.backgroundColor = `${colorPicked}`;
});















