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

function colorCells(colorPicked) {
    sketchArea.addEventListener('mouseover', (e) =>{
        e.target.style.backgroundColor = `${colorPicked}`;
        e.target.style.backgroundImage = '';//Added this so that the existing bgimage wont override the bgcolor :>
    });
}

//Printing of range number
const rangeNumber = document.querySelector('#range-number');
const rangeSlider = document.querySelector('.slider');
rangeNumber.textContent = `${rangeSlider.value} x ${rangeSlider.value}`;//just to display the default value
rangeSlider.addEventListener('input', () => {
    rangeNumber.textContent = `${rangeSlider.value} x ${rangeSlider.value}`;
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
const rainbow = document.querySelector('#rainbow');
const cat = document.querySelector('#cat');
const eraser = document.querySelector('#eraser');
const clear = document.querySelector('#clear');

let colorPicked = "black";//default value,var used by eraser and cpicker
let colorInput; //var used by colorMode ONLY
//to pick a color and change
colorPicker.addEventListener('input', () => {
    colorInput = colorPicker.value;// for cMode ONLY
    colorPicked = colorPicker.value;// for eraser
    console.log(colorPicked)
    colorMode.setAttribute('style',`background-color:${colorPicked}`);
    colorCells(colorPicked);
});
colorMode.addEventListener('click', () => {
    colorCells(colorInput);
});
//rainbow mode
rainbow.addEventListener('click', () => {
    const rBowList = ["red","orange","yellow","green","blue", "indigo", "violet"];
    let i = 0;
    sketchArea.addEventListener('mouseover', (e) =>{
        e.target.style.backgroundColor = rBowList[i];
        e.target.style.backgroundImage = '';//Added this so that the existing bgimage wont override the bgcolor :>
        i++;
        if(i == 7){//whenever i reaches the last array, it goes back to the start index 0
            i = 0;
        }  
    });
});

//cat mode
cat.addEventListener('click', () => {
    const catGallery = ["c1.jpg", "c2.jpg", "c3.jpg","c4.jpg"];
    let i = 0;
    sketchArea.addEventListener('mouseover', (e) => {
        e.target.style.backgroundImage = `url(${catGallery[i]})`;
        e.target.style.backgroundSize = "cover";
        e.target.style.backgroundRepeat = "no-repeat";
        //e.target.style.backgroundColor = '';//I can add this but since image > color, its not needed
        i++;
        if(i == 4){
            i = 0;
        }
    });
});

//random mode
random.addEventListener('click', () =>  {
    let r,g,b;
    sketchArea.addEventListener('mouseover', (e) => {
        r = Math.floor(Math.random() * 256);//Will return 0-255, math.floor rounds it down alr
        g = Math.floor(Math.random() * 256);//Since math random returns floating numbers 0-1
        b = Math.floor(Math.random() * 256);//Multiplying it by n will return 0 -> n-1
        e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
        console.log(r,g,b)
        e.target.style.backgroundImage = '';//Added this so that the existing bgimage wont override the bgcolor :>
    });
});


//eraser mode
eraser.addEventListener('click', () => {
    colorPicked = "white"
    colorCells(colorPicked);
});


//clear mode
clear.addEventListener('click', () => {
    //when this is outside, the cells that are queried arent being updated
    //so by means of putting this inside, every clear, it selects all the relevant cells
    const allCells = document.querySelectorAll('.cell')
    allCells.forEach((cell) => {
        cell.style.backgroundColor = "white";
        cell.style.backgroundImage = '';
    });
});

//bydefault
colorCells("black");

















