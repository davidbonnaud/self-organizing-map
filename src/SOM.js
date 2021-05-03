//wild-space vector constraints
let range = [[-5,5], [-5,5], [-60,60]];
// canvas settings
const WIDTH = 500;
const HEIGHT = 500;
const CELL_SIZE = 20;

// defining a 2d matrix for neurons
let neurons = Array();

const ROWS = neurons.length;
const COLS = neurons.length;
const index = (row, col) => { return row * ROWS + col };

// Training data
let input_vectors = [
    [2,4,-17.6], [5,5,-53.5], [5,4,-18.8], [5,3,-6.9], [5,2,-15.6],
    [5,1,19.3], [5,0,0.0], [5,-1,-11.3], [5,-2,-0.4], [5,-3,-14.1],
    [5,-4,0.8], [5,-5, -12.5], [4,5,-22.0], [4,4,-14.2], [4,3,-7.8],
    // continue...
];

class Node{
    constructor(row, col){
        this.wilder = randomNum(range);
        this.color = [100, 100, 100];
        this.row = row;
        this.col = col;
        this.index = index(row, col);
    }
    
    draw(){
        fill(this.color);
        stroke(this.color);
        rect(this.row*CELL_SIZE, this.col*CELL_SIZE, CELL_SIZE, CELL_SIZE);
    }
}


function createNodes(){
    for(let row = 0; row < ROWS; ++row){
        for(let col = 0; col < COLS; ++col){
            neurons.push(new Node(row, col));
        }
    }
}

function drawNodes(){
    for(let i = 0; i < neurons.length; ++i){
        neurons[i].draw();
    }
}

// calculating the euclidean distance
function eDistance(first, second){
    if(first.length != second.length) {
        throw new Error("first and second are not equal");
    }

    let distance = 0;

    for(let num = 0; num < first.length; ++num){
        distance += Math.pow(first[num] - second[num], 2);
    }

    return Math.sqrt(distance);
}

function randomNum(range){
    let rangeLen = range.length;
    let randWilder = Array(rangeLen);
    for(let i = 0; i < rangeLen; ++i){
        [min, max] = range[i];
        randWilder[i] = Math.random() * (max - min) + min;
    }
    return randWilder;
}

/*function createNeuronMatrix(matrix){
    for(let row = 0; row < matrix.length; ++row){
        for(let col = 0; col < matrix[row].length; ++col){
            matrix[row][col] = randomNum(range);
        }
    }
}*/

// Finding BMU; closest neuron to input
function findBMU(input){
    let best = {
        distance: Number.MAX_SAFE_INTEGER,
        index: [-1,-1],
    }
    for(let row = 0; row < neurons.length; ++row){
        for(let col = 0; col < neurons[row].length; ++col){
            let d = eDistance(neurons[row][col], input);
            if(d < best.distance){
                best.distance = d;
                best.index = [row, col];
            }
        }
    }
    return best;
}


//createNeuronMatrix(neurons);

// run at the start, create the canvas seen on the page
function setup(){
    createCanvas(WIDTH, HEIGHT);
    createNodes();
    drawNodes();
}

// runs continuously, draw the specified details to the page
function draw(){
    background('GREY');
    fill('GREEN');
    rect(50, 50, 100, 100);
}




















































