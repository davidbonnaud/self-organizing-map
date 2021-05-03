//wild-space vector constraints
let range = [[-5,5], [-5,5], [-60,60]];
// canvas settings
WIDTH = 500;
HEIGHT = 500;

// defining a 2d matrix for neurons
let neurons = Array(21);
for(let x = 0; x < 21; ++x){
    neurons[x] = Array(21);
}
// Training data
let input_vector = [2, 4, -17.6];

// run at the start, create the canvas seen on the page
function setup(){
    createCanvas(WIDTH, HEIGHT);
}

// runs continuously, draw the specified details to the page
function draw(){
    background('GREY');
    fill('GREEN');
    rect(50, 50, 100, 100);
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

function createNeuronMatrix(matrix){
    for(let row = 0; row < matrix.length; ++row){
        for(let col = 0; col < matrix[row].length; ++col){
            matrix[row][col] = randomNum(range);
        }
    }
}

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

createNeuronMatrix(neurons);





















































