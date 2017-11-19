//create some variables to store the sliders
var rSlider, gSlider, bSlider, aSlider;
var fillIt = true;
var dontfillIt = false;

function setup() {
createCanvas(windowWidth,windowHeight);
// initialize sliders
rSlider = createSlider(0, 255, 200);//range and starting value of slider
rSlider.position(20, height - rSlider.height + 20);//position sliders

gSlider = createSlider(0, 255, 200);
gSlider.position(gSlider.width + 30, height - gSlider.height + 20);

bSlider = createSlider(0, 255, 180);
bSlider.position(bSlider.width + 180, height - bSlider.height + 20);
}

function draw() {
var dimension = 100;
for (var i = 0; i < 1000; i = i + 200) {
for (var j = 0; j < 1000; j = j + 200) {
pattern(0, i, dimension);
pattern(200, i, dimension);
pattern(400, i, dimension);
pattern(600, i, dimension);

pattern2(0 + 100, j + 100, dimension);
pattern2(0 + 300, j + 100, dimension);
pattern2(0 + 500, j + 100, dimension);

}
}
}
function draw_vertex(dimension, x1_coord, y1_coord, x2_coord, y2_coord, x3_coord, y3_coord, fillIt, clr) {
// Set the points of the triangle
var x1 = dimension * x1_coord;
var y1 = dimension * y1_coord;
var x2 = dimension * x2_coord;
var y2 = dimension * y2_coord;
var x3 = dimension * x3_coord;
var y3 = dimension * y3_coord;
// //color variations
if (fillIt === true) {
fill(clr);
} else {
noFill();
}
beginShape();
vertex(x1, y1);
vertex(x2, y2);
vertex(x3, y3);
endShape();
}
//Draw the pattern
function pattern(x, y, dimension) {
//store the value of the sliders into a variable
var r = rSlider.value();
var g = gSlider.value();
var b = bSlider.value();
//now you control the color values from the slider component
var clr1 = color(r-50, g-50, b-50);
var clr2 = color(b-100, r-100, g-100);
push();
translate(x, y);
draw_vertex(dimension, 0, 1, 0, 0, 1, 0, fillIt, clr2);
draw_vertex(dimension, 0.5, 1, 1, 1, 1, 0.5, fillIt, clr1);
draw_vertex(dimension, 0, 0.5, 0.5, 0.5, 1, 1, dontfillIt, clr1);
pop();
}
//Draw the pattern with a variation for every other row
function pattern2(x, y, dimension) {
var r = rSlider.value();
var g = gSlider.value();
var b = bSlider.value();
var clr1 = color(r, g, b);
var clr2 = color(b, r, g);
push();
translate(x, y);
draw_vertex(dimension, 0, 1, 0, 0, 1, 0, fillIt, clr2);
draw_vertex(dimension, 0.5, 1, 1, 1, 1, 0.5, fillIt, clr1);
draw_vertex(dimension, 0, 0.5, 0.5, 0.5, 1, 1, dontfillIt, clr1);
pop();
}