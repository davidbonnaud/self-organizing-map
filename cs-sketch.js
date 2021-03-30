// Make global g_canvas JS 'object': a key-value 'dictionary'.
var g_canvas = { cell_size:10, wid:80, hgt:75 }; // JS Global var, w canvas size info.
var g_frame_cnt = 0; // Setup a P5 display-frame counter, to do anim
var g_frame_mod = 10; // Update ever 'mod' frames.

let active = true;

// array of all the different inputs for the algorithm to use
const sampleInputs = ["05CA62A7BC2B6F03", "065DE66B71F040BA", "0684FB89C3D5754E", "07C9A2D18D3E4B65", "09F48E7862ED2616", "1FAB3D47905FC286", "286E1AD0342D7859",  "30E530BC4786AF21", "328DE47C65C10BA9", "34F2756FD18E90BA", "90BA34F07E56F180", "D7859286E2FD0342"]
// randomly selected sample input string
let randomInput = sampleInputs[Math.floor(Math.random() * sampleInputs.length)];
// array of the algo names
const algoNames = ["   Quicksort    ", "    Mergesort   ", "  Selection Sort ", " Gold's Pore Sort "]

function setup() // P5 Setup Fcn
{
    let sz = g_canvas.cell_size;
    let width = sz * g_canvas.wid;  // Our 'canvas' uses cells of given size, not 1x1 pixels.
    let height = sz * g_canvas.hgt;
    createCanvas( width, height );  // Make a P5 canvas.
    drawAlgoNames(algoNames);
    let qsAlgo = new Quicksort(randomInput.split(''));
    let qsAlgoTest = new Quicksort(randomInput.split(''));
    let qsAlgoTest2 = new Quicksort(randomInput.split(''));
    let qsAlgoTest3 = new Quicksort(randomInput.split(''));
    for(let i = 0; i < 20; i++){
        drawAlgoChars(qsAlgo.iterate(), qsAlgo.curStep, 0);
        //drawAlgoChars(qsAlgoTest.iterate(), qsAlgoTest.curStep, 175);
        //drawAlgoChars(qsAlgoTest2.iterate(), qsAlgoTest2.curStep, 375);
        //drawAlgoChars(qsAlgoTest3.iterate(), qsAlgoTest3.curStep, 590);
    }
    
}

// specifically write the corresponding algorithm names at the top of the canvas via drawAlgoNameLetters
function drawAlgoNames(algoNames){
    for(let i = 0; i < algoNames.length; ++i){
        drawAlgoNameLetters(algoNames[i], 0, (1 + i * (1 + algoNames[i].length)));
    }
}

// specifically separate each letter of the algo names to be displayed on the canvas via drawalgoletter
function drawAlgoNameLetters(letters, row, col){
    for(let i = 0; i < letters.length; ++i){
        drawAlgoLetter(letters[i], row, col + i, 0);
    }
}

// display each letter of the current algo iteration via drawalgoletter
function drawAlgoChars(chars, row, colStart){
    for(let i = 0; i < chars.length; ++i){
        drawAlgoLetter(chars[i], row, (i * (chars[i].length)), colStart);
    }
}

// display the letters instructed to be printed to the corresponding part of the canvas
function drawAlgoLetter(letter, row, col, colStart){
    textSize(g_canvas.cell_size);
    textAlign(CENTER);
    fill("FFFFFF");
    text(letter, colStart + col * g_canvas.cell_size, row * g_canvas.cell_size, g_canvas.cell_size, g_canvas.cell_size);
}


function draw()  // P5 Frame Re-draw Fcn, Called for Every Frame.
{
    if(!active){
        return true;
    }
    
}












