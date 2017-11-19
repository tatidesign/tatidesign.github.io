/* var y = 100;
var d = 130;

function setup() {
	createCanvas (480, 120);
}

function draw() {
	background(204);

	line(0,0, width, height);
	line(width,0,0,height);
	ellipse (width/2, height/2, 60,60);

	ellipse(75,y,d,d); //left
    ellipse(175,y,d,d); //middle
    ellipse(275,y,d,d); //right
} */

/*var x = 25;
var h = 20;
var y = 25;

function setup() {
	createCanvas (480, 120);
}

function draw() {
	background(204);

	x = 20;
	rect(x,y,300,h);
	x=x+100;
	rect(x,y+h,300,h)
	x=x-250;
	rect(x,y+h*2,300,h);

}*/

var rSlider, gSlider, bSlider, aSlider;
var fillIt = true;
var dontfillIt = false;
var particles = [];
var mass;
var randomForce = createVector(random(-0.01,0.01), random(-0.01,0.01));


function setup() {
	createCanvas (900, 1300);
	strokeWeight(1);
	stroke(150);
rSlider = createSlider(0, 255, 200);//range and starting value of slider
rSlider.position(20, height - rSlider.height + 20);//position sliders

gSlider = createSlider(0, 255, 200);
gSlider.position(gSlider.width + 30, height - gSlider.height + 20);

bSlider = createSlider(0, 255, 180);
bSlider.position(bSlider.width + 180, height - bSlider.height + 20);
}



function mousePressed() {
particles.push(new Particle(mouseX, mouseY,mass));//add a new partice on mousePressed
}

function draw() {
	background(0);
    noFill();
    stroke(255, 102, 0);


	for (var i = 5; i < 700; i+= 5){
		line(i, 0, i, 30);
        line(i, 30, i+5, 60);
		line(i+5, 60, i+50, 100);
        line(i+50, 100, i+i/2, 200);
		line(i+i/2, 200, i*1.2, 180);
		
		

		line(i, 580, i+70, 680);
		line(i+70, 680, 0, 1300);


for (var i = 0; i < particles.length; i++) {
if(mouseIsPressed){
particles[i].applyForce(randomForce);
}
particles[i].display(); //places the object on canvas
particles[i].update(); // updates object properties
particles[i].checkEdges();//check the paticle is within canvas
//check if they particles are intersecting
for (var j = 0; j < particles.length; j++){
if(i!=j && particles[i].intersects(particles[j])){
//print("intersects");
}
}//end of loop j
}//end of loop i

//Particle constructor
function Particle(x, y) {
//OBJECT PROPERTIES
this.x = x;
this.y = y;
this.history = []; //we'll use this later to implement path trailing
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
}


this.display = function() {
strokeWeight(2);
stroke("black");
fill(255);
ellipse(this.pos.x, this.pos.y, this.radius * 2, this.radius * 2);
}
this.checkEdges = function() {
if (this.pos.y > height) {
this.vel.y *= -0.9; // A little dampening when hitting the bottom
this.pos.y = height;
}
if (this.pos.y < 0) {
this.vel.y *= -0.9;
this.pos.y = 0;
}
if (this.pos.x < 0) { this.vel.x *= -0.9; this.pos.x = 0; } if (this.pos.x > width) {
this.vel.x *= -0.9;
this.pos.x = width;
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




	}
}







/* function setup() {
	createCanvas (480, 120);
	noStroke();
}

function draw() {
	background(0);
	for (var y = 0; y <= height; y += 40) {
		for (var x = 0; x <= width; x += 40) {
		fill(255,140);
		ellipse(x,y,40,40);
	    }
	}
}
*/


/*function setup() {
	createCanvas (1000, 1000);
	fill(255);
    stroke(102);
}

function draw() {
	background(0);
	for (var y = 20; y <= height-20; y += 10) {
		for (var x = 20; x <= width-20; x += 10) {
		  ellipse(x,y,4,4);
		  //Draw line to the center of display
		  line(x,y, 500,500);
	    }
	}
} 
/*
function draw() {
	background(0);
	for (var y = 10; y <= height; y += 8) {
	 for(var x = 10; x <=width; x += 15) {
	 	ellipse(x + y,y, 16 -y/10.0, 16 - y/10.0)

}
}
for (var y = 10; y <= height; y += 8) {
	 for(var x = 10; x <=width; x += 15) {
	 	ellipse(x,x+y, 16 -y/10.0, 16 - y/10.0)

	 		/*for (var i = 20; i < 400; i+= 20){
		line(i, 0, i+i/2, 50);
		line(i+i/2, 50, i*1.2, 120);
	 }
	}
}
*/

