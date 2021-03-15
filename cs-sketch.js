// Make global g_canvas JS 'object': a key-value 'dictionary'.
var g_canvas = { cell_size:15, wid:60, hgt:40 }; // JS Global var, w canvas size info.
var g_frame_cnt = 0; // Setup a P5 display-frame counter, to do anim
var g_frame_mod = 10; // Update ever 'mod' frames.
var g_stop = 0; // Go by default.

//array of all the different inputs for the algorithm to use
const sampleInputs = ["05CA62A7BC2B6F03", "065DE66B71F040BA", "0684FB89C3D5754E", "07C9A2D18D3E4B65", "09F48E7862ED2616", "1FAB3D47905FC286", "286E1AD0342D7859",  "30E530BC4786AF21", "328DE47C65C10BA9", "34F2756FD18E90BA", "90BA34F07E56F180", "D7859286E2FD0342"]

function setup() // P5 Setup Fcn
{
    let sz = g_canvas.cell_size;
    let width = sz * g_canvas.wid;  // Our 'canvas' uses cells of given size, not 1x1 pixels.
    let height = sz * g_canvas.hgt;
    createCanvas( width, height );  // Make a P5 canvas.
}

function algoLoop(){ //main algo loop that calculates each pass of every algorithm

}

var g_box = { t:1, hgt:40, l:1, wid:60 }; 

const randomInput = sampleInputs[Math.floor(Math.random() * sampleInputs.length)];
algoLoop(randomInput);

function draw_update()  // Update our display.
{
  //console.log( "g_frame_cnt = " + g_frame_cnt );
  //start the ant and render the square changes
  //ant.draw();
}

function draw()  // P5 Frame Re-draw Fcn, Called for Every Frame.
{
    // ++g_frame_cnt;
    // if (0 == g_frame_cnt % g_frame_mod)
    // {
    //     if (!g_stop) draw_update();
    // }
}

function keyPressed( )
{
    g_stop = ! g_stop;
}

/*function mousePressed( )
{
    let x = mouseX;
    let y = mouseY;
    //console.log( "mouse x,y = " + x + "," + y );
    let sz = g_canvas.cell_size;
    let gridx = round( (x-0.5) / sz );
    let gridy = round( (y-0.5) / sz );
    //console.log( "grid x,y = " + gridx + "," + gridy );
    //console.log( "box wid,hgt = " + g_box.wid + "," + g_box.hgt );
    g_bot.x = gridx + g_box.wid; // Ensure its positive.
    //console.log( "bot x = " + g_bot.x );
    g_bot.x %= g_box.wid; // Wrap to fit box.
    g_bot.y = gridy + g_box.hgt;
    //console.log( "bot y = " + g_bot.y );
    g_bot.y %= g_box.hgt;
    //console.log( "bot x,y = " + g_bot.x + "," + g_bot.y );
    draw_bot( );
}*/
