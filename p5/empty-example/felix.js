var maxWidth = 100;
var maxHeight = 150;
var distance = 0;

function setup() {
  	createCanvas(800, 600);
	background(110);
	var positionX = 0;
	var positionY = -50;

	while(positionY < height){
		positionX = random(-maxWidth);
		while(positionX < width){
			houseWidth = random(maxWidth*0.5,maxWidth);
			houseHeight = random(maxHeight*0.75,maxHeight);

			push();
			translate(positionX,positionY+150-houseHeight);
			fill(255);
			rect(0,0,houseWidth,houseHeight);

			// roof
			if(random(10)> 4){
				if(random(10)> 8){
					if(random(10)> 5){
						fill(186,155,106);
					}
					arc(houseWidth/2,0,houseWidth,houseWidth,PI,0);
					fill(255);
				}else{
					triangle(0,0,houseWidth/2,-random(50),houseWidth,0);
				}
			}

			//facade

			if(random(10)> 4){
					for(var x = 10; x < houseWidth-10; x += random(16,20)){
						fill(50);
						rect(x, 10, 10, 50);
					}
			}

			pop();

			positionX += houseWidth+ distance;
		}
		positionY += random(50,100);
	}
}