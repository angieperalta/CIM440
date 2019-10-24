var sunX = 0;
var sunY = 0;
//
hitSize = [25];
var hitX = [575];
var hitY = [575];
var waves;
var wavesX = 0;
var wavesMove = true;
var waveStart = false;
//waves

hitcloudsSize = [25];
var hitcloudsX = [575];
var hitcloudsY = [475];
var clouds;
var cloudsY = 0;
var cloudsMove = true;
var cloudStart = false;
// clouds
hitdolphinsSize = [25];
var hitdolphinsX = [575];
var hitdolphinsY = [375];
var dolphins;
var dolphinsX = 0;
var dolphinsY = 0;
var dolphinsMove = true;
var dolphinStart = false;
// dolphins

function preload(){
  waves = loadImage("waves.png");
  clouds = loadImage("clouds.png");
  dolphins = loadImage("dolphins.png");
  tree = loadImage("coconuttree.png")
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
  image(dolphins, dolphinsX - -250,300, dolphins.width/4, dolphins.height/4);
  image(waves, wavesX - 30,400);


fill("blue");
stroke("blue")
rect(hitX[0],hitY[0], hitSize, hitSize);
// wavessss


fill("grey");
stroke("grey");
rect(hitcloudsX[0], hitcloudsY[0], hitcloudsSize, hitcloudsSize);
// clouds

fill("yellow");
stroke("yellow");
rect(hitdolphinsX[0], hitdolphinsY[0],hitdolphinsSize, hitdolphinsSize);

  if(sunY > 500){
      sunY = sunY - 4;
  }

  fill("orange");
  stroke("red");

// next code

if(waveStart == true){
  if(wavesMove == true){
    wavesX++;
  }else{
    wavesX--;
  }
}
if(wavesX > 25){
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
if(cloudsY > 25){
  cloudsMove = false;
}
if(cloudsY < 0){
  cloudsMove = true;
}


//waves https://pixabay.com/vectors/blue-water-pattern-sea-tide-waves-309761/
// clouds https://pixabay.com/illustrations/cloud-white-no-background-paint-2837230/

function mousePressed(){
  if(mouseX > hitX[0] && mouseX < hitX[0] + hitSize && mouseY > hitY[0] && mouseY < hitY[0] + hitSize){
    console.log("Click Waves");
    wavesStart = true;
  /// end of waves
  }
}
  // end of treesss

  if(mouseX > hitcloudsX[0] && mouseX < hitcloudsX[0] + hitcloudsSize && mouseY > hitcloudsY[0] && mouseY < hitcloudsY + hitcloudsSize){
    console.log("Click Clouds");
    cloudsStart = true;
  }
}

  if(mouseX > hitdolphinsX[0] && mouseX < hitdolphinsX[0] + hitdolphinsSize && mouseY > hitdolphinsY[0] && mouseY < hitdolphinsY + hitdolphinsSize){
    console.log("Click Dolphin");
    dolphinsStart = true;
  }
}
// end of DRAW
}
