var sunX = 0;
var sunY = 0;

function setup () {
// put setup code here
  createCanvas(600,600);

  sunX = width/2;
  sunY = height * 2;

}// KEEP EVERYTHING LOWERCASE
function draw(){
  background("black");
//put drawing code here
  ellipse(sunX,sunY,width,height);

  if(sunY > height){
      sunY = sunY + 1;
  }

  fill("orange");
  stroke("red");


}


//end of draw
