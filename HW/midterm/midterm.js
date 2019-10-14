var sunX = 0;
var sunY = 0;

var wavesX = 0;
var wavesMove = true;

var waves;

var cloudsY = 0;
var cloudsMove = true;

var clouds;

var cloudStart = false;

function preload(){
  waves = loadImage("waves.png");
  clouds = loadImage("clouds.png");
}

function setup () {
// put setup code here
  createCanvas(600,600);

  sunX = width/2;
  sunY = height * 2;

}// KEEP EVERYTHING LOWERCASE
function draw(){
  background("black");
//put drawing code here
  image(clouds, cloudsY - 10, 15);
  ellipse(sunX,sunY,width,height);


  if(sunY > 500){
      sunY = sunY - 3;
  }

  fill("orange");
  stroke("red");

//

  image(waves, wavesX - 30,400);

  if(wavesMove == true){
    wavesX++;
  }else{
    wavesX--;
  }

  if(wavesX > 20){
    wavesMove = false;
  }

  if(wavesX < 0){
    wavesMove = true;
  }



if(cloudStart == true){
  if(cloudsMove == true){
    cloudsY++;
  }else{
    cloudsY--;
  }
}


  if(cloudsY > 30){
    cloudsMove = false;
  }

  if(cloudsY < 0){
    cloudsMove = true;
  }
    // cloudsY = cloudsY - 3;
}




//end of draw

//waves https://pixabay.com/vectors/blue-water-pattern-sea-tide-waves-309761/
// clouds https://pixabay.com/illustrations/cloud-white-no-background-paint-2837230/
