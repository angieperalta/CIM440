//"Sunset" by freefotouk is licensed under CC BY-NC 2.0 https://search.creativecommons.org/photos/60edfde5-0063-4c4a-856a-fb4589fc22d6
var sunX = 0;
var sunY = 0;

var sunset;
var currentImage = 0;

function preload(){
sunset = loadImage("images/sunset.jpg");
}

function setup () {
// put setup code here
  createCanvas(600,600);

  sunX = width/2;
  sunY = height * 2;

}// KEEP EVERYTHING LOWERCASE
function draw(){
  background("loadImage");
//put drawing code here
  ellipse(sunX,sunY,width,height);

  if(sunY > height){
      sunY = sunY + 1;
  }

  fill("orange");
  stroke("red");


}


//end of draw
