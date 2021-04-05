Intro

  This project runs the algorithms Quicksort, Mergesort, Selection Sort, and Gold's Pore Sort and is a way
  to visualize the differences in each of the passes for the corresponding algorithms as well as to see which
  end up being faster.

  P5 provides sutomated animation (via a user-built "draw" function),
  and GUI manipulation functions that are simpler than JS.

Zip Contents

  File readme.txt.  This file.

  File .  A snapshot of the project webpage.

  File index.html. Drag and drop this into a browser to
    run the project.

  File p5.js. This is the P5 package.  It is loaded inside the html.

  File cs-sketch.js; This contains several P5 user-defined linkage functions
  (setup, draw), as well as example support functions.  P5's setup() is run 
  once before page display. P5's draw() is run once per display frame, 
  so you can do animation.

  File assets/styles.css.  This is an extra-small example of controlling
    webpage styling.  // Loaded inside the html.

  File assets/draw-stuff.js. This is an example to show loading a JS
    script file from a folder other than the index HTML file's
    folder location.  It also includes the utility draw_grid function
    written in P5+JS. // Loaded inside the html.

Installation & Running

  1. Extract the .zip file into a folder.

  2. Drag the index HTML file, index.html, into a browser
    window.  The example P5 program should start immediately.  You
    should see 4 columns of sets of 16 character strings that show the steps of each pass in
    the algorithms.

Known Bugs

  o- Mergesort does not print complete 16 character strings.
     Timer does not delay output and has been temporarily removed until solved.
     Gold's Pore Sort is still in progress.

Warnings


Testing

  o- Following installation instruction, above, watch it run.

Credits

  Some code was borrowed and modified from Stuart's book.  
    Introducing JavaScript Game Development: Build a 2D Game from the
    Ground Up, by Graeme Stuart, 2018, 209 pages.

  And, of course, thanks to the HTML and P5.js developers.
