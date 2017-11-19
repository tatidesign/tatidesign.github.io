var b,h;
var rectWidth, rectHeight;
//var rSlider, gSlider, bSlider, aSlider;
// var = b;
// var = h;

function setup() {
	createCanvas(1000,1000);

	/*rSlider = createSlider(0, 255, 200);//range and starting value of slider
rSlider.position(20, height - rSlider.height + 20);//position sliders

gSlider = createSlider(0, 255, 200);
gSlider.position(gSlider.width + 30, height - gSlider.height + 20);

bSlider = createSlider(0, 255, 180);
bSlider.position(bSlider.width + 180, height - bSlider.height + 20);

}*/

	background(0);

	b = 10;
	h = 10;


rectWidth = width/b;
rectHeight= height/h;

	ellipseMode(CORNER);

	for(var y = 0; y < h; y++){
		for(var x = 0; x < b; x++){
	//for(var y = 0; y < height; y = y + 30){
		//for(var x = 0; x < width; x = x + 30){
		    //hier wird das raster gezeichnet
		    var zufall = random(3);
		    print(zufall);
		    	//0-1
		    	if(zufall < 1){
		    		raster1(x,y,rectWidth,rectHeight);
		    	}

		    	//1-2

		    	else if (zufall > 1 && zufall < 2){
		    		raster2(x,y,rectWidth,rectHeight);
		    	}
		    	// 2 - 3
		    	else{
		    		raster3(x,y,rectWidth,rectHeight);

		    	}

		    /*if(zufall > 1 && zufall < 2){ 

		    raster1(x,y,rectWidth,rectHeight);

		}else{
            raster3(x,y,rectWidth,rectHeight);

		    /*rect(x,y,30,30);
		    //ellipse(x,y,30,30);

		    */
		}
		}
	} 



function draw() { 

}

function raster1( x, y, x2, y2){
	//var x = 0;
	//var y = 0;
            fill(10,200,218)
		    rect(x*x2,y*rectHeight,x2,y2);
		    fill(random(100,255),50,140)
		    ellipse(x*x2,y*y2,x2,y2);
}

function raster2( x, y, x2,y2 ){
	//var x = 0;
	//var y = 0;
            fill(30,50,218)
		    rect(x*x2,y*y2,x2,y2);
		    fill(random(100,255),10,40)
		    line(x*x2,y*y2,x*x2+x2,y*y2+y2);
}


/*
function draw() {

	for(var y = 0; y < height; y = y + 30){
		for(var x = 0; x < width; x = x + 30){

			fill(30,50,218)
			rect(x,y,30,30);
			fill(random(100,255),34,140)
			ellipse(x,y,30,30);

			line(x,y,mouseX,mouseY);
		}
	}

}
 */

