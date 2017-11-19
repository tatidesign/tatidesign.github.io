function setup() {
	createCanvas(400,400);
	background(0);

 
    ellipseMode(CORNER);
	for(var y = 0; y < height; y = y + 30){
		for(var x = 0; x < width; x = x + 30){
		    //hier wird das raster gezeichnet
		    fill(30,50,218)
		    rect(x,y,30,30);
		    fill(random(100,255),200,40)
		    ellipse(x,y,30,30);

		    /*rect(x,y,30,30);
		    //ellipse(x,y,30,30);

		    */
	    }
	} 

}

function draw() {
    

}