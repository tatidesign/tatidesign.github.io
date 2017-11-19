function setup() {
	createCanvas(1024,768);
}

function draw() {
    background(100);
    strokeWeight(30)
//1 rect
    fill(255,30,0);
	rect(0,0,300,300);
    
    stroke(250)
	fill(100);
	rect(150,150,300,300);

	fill(200,100);
	noStroke();
    rect(100,100,300,300);

//2 rect
   strokeWeight(10)
   fill(255,30,0);
	rect(300,300,200,200);
    
    stroke(250)
	noFill();
	rect(450,450,200,200);

	fill(200,100);
	noStroke();
    rect(350,350,200,200);

	
 /*background(200,10,10);
	ellipse(50,50,100,100);
	rect(10,10,90,90);
	rect(20,20,70,70);
	strokeWeight(10);
	line(0,150,300,300); */
}