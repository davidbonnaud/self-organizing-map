Intro

  This project runs a SOM visualization where given points in a 3D plane from a training set,
  it will color the squares on the page with corresponding RGB values.

  P5 provides sutomated animation (via a user-built "draw" function),
  and GUI manipulation functions that are simpler than JS.

Zip Contents

  File readme.txt.  This file.

  File .  A snapshot of the project webpage.

  File index.html. Drag and drop this into a browser to
    run the project.

  File p5.min.js. This is the P5 package.  It is loaded inside the html.

  File SOM.js; This contains several P5 user-defined linkage functions
  (setup, draw), as well as the self organizing map code.  P5's setup() is run 
  once before page display. P5's draw() is run once per display frame, 
  so you can do animation.

  File assets/styles.css.  This is an extra-small example of controlling
    webpage styling.  // Loaded inside the html.

Installation & Running

  1. Extract the .zip file into a folder.

  2. Drag the index HTML file, index.html, into a browser
    window.  The example P5 program should start immediately.  You
    should see a grey box in the center with colored squares appearing.

Known Bugs

  o- Could not implement SOM itself, not sure how to code it/include it...

Warnings


Testing


Credits

  Thanks to Justin for the assistance in getting this far.

  And, of course, thanks to the HTML and P5.js developers.
