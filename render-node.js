/**
 * Run this command to start the program:
 * node render.js
 *
 * Renders art server side as fast as possible.
 *
 * The npm packages `canvas` and `jsdom` must be installed
 * to run this example.
 */

// imports the node file system package
const fs = require('fs');

// imports q5 and p5play
require('q5');
require('p5play');

// to use q5.js global mode in node.js you'll need to assign
// user implemented q5 functions, like draw, to the global object
global.setup = setup;
global.draw = draw;

// the rest of your code can pretty much be written normally!
// no preload function is needed with q5 global mode
new Q5();

new Canvas(800, 800);
background('#444');

let tri = new Sprite(0, 0);
tri.image = loadImage('triangle.png');
tri.direction = 45;
tri.speed = 100;

// disable the default 60fps draw loop
noLoop();

function setup() {
	// redraw should not be called inside setup
	// so use setTimeout to call the start function after setup is done
	setTimeout(start);
}

function start() {
	// draw 12 frames as fast as possible! use redraw
	// to ensure that pre and post draw p5play hooks are called
	redraw(12);

	// save the canvas to a png image file
	const buffer = canvas.toBuffer('image/png');
	fs.writeFileSync(__dirname + '/out/test.png', buffer);

	// log the time it took to create the image
	const time = (performance.now() / 1000).toFixed(2);
	log('Created test.png! In ' + time + ' seconds');
}

function draw() {
	// empty for this example, which relies on p5play's automatic drawing
}
