var particles = [];
var mass;

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

function mousePressed() {
particles.push(new Particle(mouseX, mouseY, mass));
}

function keyPressed() {
if (key == ' ') {
particles.splice(0, 1);
}
}



function draw() {
background(51);
background("black");




var randomForce = createVector(random(-0.01, 0.01), random(-0.01, 0.01));
for (var i = 0; i < particles.length; i++) {
if (mouseIsPressed) {
particles[i].applyForce(randomForce);
}
particles[i].display(); //places the object on canvas
particles[i].update(); // updates object properties
particles[i].checkEdges(); //check the obejct is within canvas
//check if they particles are intersecting
for (var j = 0; j < particles.length; j++) {
if (i != j && particles[i].intersects(particles[j])) {
print("intersects");
}
} //end of loop j
} //end of loop i
}

//Particle constructor
function Particle(x, y) {
//OBJECT PROPERTIES
this.x = x;
this.y = y;
this.history = []; //store the position history of each particle
this.pos = createVector(x, y); //create a vector object to store coordinate componenents
this.vel = createVector(0, 0);
this.acc = createVector(0, 0);
this.r = random(5, 10);
this.radius = this.r;
this.mass = this.r * 0.01;

//OBJECT METHODS
this.applyForce = function(force) {
//MAKE A DUPLICATE OF THE FORCE, SO ITS ORIGINAL VALUE GETS PASSED TO ALL THE OBJECTS
f = force.copy();
f.div(this.mass); // acc = force/mass
this.acc = f; // newton's 2nd law of motion
}
this.update = function() {
this.vel.add(this.acc);
this.pos.add(this.vel);

// trailing update
for (i = 0; i < this.history.length; i++) { //add easing var easing = 0.2; var diffX = mouseX - this.history[i].x; var diffY = mouseY - this.history[i].y; //this.history[i].x += random(-1,1); //this.history[i].y+=random(-1,1); //this.history[i].x += diffX*easing; // this.history[i].y+=diffY*easing; this.history[i].x += random(diffX * easing); this.history[i].y += random(diffY * easing); } //store the current position into history[] var v = createVector(this.pos.x, this.pos.y); this.history.push(v); if (this.history.length > 100) {
this.history.splice(0, 1);
}
}
this.display = function() {
strokeWeight(2);
stroke("black");
fill(255);
ellipse(this.pos.x, this.pos.y, this.radius * 2, this.radius * 2);
//draw trailing
beginShape();
strokeWeight(0.5);
stroke("white");
noFill();
for (i = 0; i < this.history.length; i++) {
var pos = this.history[i];
vertex(pos.x, pos.y);
}
endShape();
}


this.checkEdges = function() {
if (this.pos.y > height) {
this.vel.y *= -0.9; // A little dampening when hitting the bottom
this.pos.y = height;
}
if (this.pos.y < 0) {
this.vel.y *= -0.9; // A little dampening when hitting the top
this.pos.y = 0; // at the border
}
if (this.pos.x < 0) { this.vel.x *= -0.9; // A little dampening when hitting the left this.pos.x = 0; // at the border } if (this.pos.x > width) {
this.vel.x *= -0.9; // A little dampening when hitting the right
this.pos.x = width; // at the border
}
}


this.intersects = function(other) {
var d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
if (d < this.radius + other.radius) {
this.vel.x *= -1;
other.vel.x *= -1;
return true;
} else {
return false;
}
}
}






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