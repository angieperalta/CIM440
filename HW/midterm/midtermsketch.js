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




image(trees, treesY - -450, 200, trees.width/2, trees.height/2);



hittreeSize = [25];
var hittreesX = [575];
var hittreesY = [275];
var trees;
var treesY = 0;
var treesMove = true;
var treesMove = false;
// trees








hitcloudSize = [25];
var hitcloudsX = [575];
var hitcloudsY = [375];
var clouds;
var cloudsY = 0;
var cloudsMove = true;
var cloudStart = false;
// clouds
hitdolphinsSize = [25];
var hitdolphinsX = [575];
var hitdolphinsY = [275];
var dolphins;
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
  createCanvas(600,600);

  sunX = width/2;
  sunY = height * 2;

}

function draw(){
  background("black");

  image(clouds, cloudsY - 10, 15);
  ellipse(sunX,sunY,width,height);
  image(dolphins, dolphinsY - -250,300, dolphins.width/4, dolphins.height/4);
  image(waves, wavesX - 30,400);


  fill("blue");
  stroke("teal")
  rect(hitX[0],hitY[0], hitSize, hitSize);


  fill("yellow");
  stroke("yellow");
  rect(hitdolphinsX[0], hitdolphinsY[0],hitdolphinsSize, hitdolphinsSize);


  fill("grey");
  stroke("grey");
  rect(hitcloudsX[0], hitcloudsY[0], hitcloudSize, hitcloudSize);


  if(sunY > 500){
      sunY = sunY - 4;
}

  fill("orange");
  stroke("red");

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


function mousePressed(){
  if(mouseX > hitX[0] && mouseX < hitX[0] + hitSize && mouseY > hitY[0] && mouseY < hitY[0] + hitSize){
    console.log("Click Waves");
    waveStart = true;
  /// end of waves
  }
  function mousePressed(){
    if(mouseX > hitcloudX[0] && mouseX < hitcloudX[0] + hitcloudSize && mouseY > hitcloudY[0] && mouseY < hitcloudY[0] + hitcloudSize){
      console.log("Click Clouds");
      cloudStart = true;
    /// end of waves
  }

}
