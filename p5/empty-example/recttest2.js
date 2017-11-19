function setup() {
	createCanvas(400,400);
	background(0);

	for(var y = 0; y < height; y = y + 30){

		var breite = random (40,70);
		print(breite);
		rect(0,y,breite, 30);
	} 

}

function draw() {
    

}