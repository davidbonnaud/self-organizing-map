// Make global g_canvas JS 'object': a key-value 'dictionary'.
var g_canvas = { cell_size:10, wid:72, hgt:75 }; // JS Global var, w canvas size info.
var g_frame_cnt = 0; // Setup a P5 display-frame counter, to do anim
var g_frame_mod = 10; // Update ever 'mod' frames.

let active = true;

//array of all the different inputs for the algorithm to use
const sampleInputs = ["05CA62A7BC2B6F03", "065DE66B71F040BA", "0684FB89C3D5754E", "07C9A2D18D3E4B65", "09F48E7862ED2616", "1FAB3D47905FC286", "286E1AD0342D7859",  "30E530BC4786AF21", "328DE47C65C10BA9", "34F2756FD18E90BA", "90BA34F07E56F180", "D7859286E2FD0342"]

function setup() // P5 Setup Fcn
{
    let sz = g_canvas.cell_size;
    let width = sz * g_canvas.wid;  // Our 'canvas' uses cells of given size, not 1x1 pixels.
    let height = sz * g_canvas.hgt;
    createCanvas( width, height );  // Make a P5 canvas.
    drawAlgoName();
}

function algoLoop(randomInput){ //main algo loop that calculates each pass of every algorithm
    //drawAlgoLetter();
}

function drawAlgoName(){
    drawAlgoLetter();
}

function drawAlgoLetter(){
    console.log("here");
    textSize(g_canvas.cell_size);
    textAlign(CENTER);
    fill("FFFFFF");
    text("a", 6, 4, false);
}

const randomInput = sampleInputs[Math.floor(Math.random() * sampleInputs.length)];
//algoLoop(randomInput);

function draw()  // P5 Frame Re-draw Fcn, Called for Every Frame.
{
    if(!active){
        return true;
    }
    //iterateAlgo();
}












