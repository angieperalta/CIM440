//waves https://pixabay.com/vectors/blue-water-pattern-sea-tide-waves-309761/
// clouds https://pixabay.com/illustrations/cloud-white-no-background-paint-2837230/

var sunX = 0;
var sunY = 0;

hitSize = [25];
var hitX = [575];
var hitY = [575];
var wavesX = 0;
var wavesMove = true;
var waveStart = false;
var waves;
//waves
hittreeSize = [25];
var hittreeX = [575];
var hittreeY = [475];
var treeX = 0;
var treeY = 0;
var treeMove = true;
var treeStart = false;
var tree;
// tree
hitdolphinSize = [25];
var hitdolphinX = [575];
var hitdolphinY = [275];
var dolphinsX = 0;
var dolphinsY = 0;
var dolphinsMove = true;
var dolphins;
var dolphinStart = false;
// dolphin
hitcloudSize = [25];
var hitcloudX = [575];
var hitcloudY = [375];
var cloudsY = 0;
var cloudsMove = true;
var clouds;
var cloudStart = false;

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
  image(clouds, cloudsY - 10, 15);
  ellipse(sunX,sunY,width,height);
  image(dolphins, dolphinsX - -250,300, dolphins.width/4, dolphins.height/4);
  image(tree, treeY - -450, 200, tree.width/2, tree.height/2);
  image(waves, wavesX - 30,400);

fill("blue");
stroke("blue")
rect(hitX[0],hitY[0], hitSize, hitSize);
// wavessss
fill("green");
stroke("green");
rect(hittreeX[0], hittreeY[0], hittreeSize, hittreeSize);
// treeeee
fill("grey");
stroke("grey");
rect(hitcloudX[0], hitcloudY[0], hitcloudSize, hitcloudSize);
// clouds
fill("yellow");
stroke("yellow");
rect(hitdolphinX[0], hitdolphinY[0],hitdolphinSize, hitdolphinSize);
  if(sunY > 500){
      sunY = sunY - 4;
  }
  fill("orange");
  stroke("red");
//cloud code
if(cloudStart == true){
  if(cloudsMove == true){
    cloudsY++;
  }else{
    cloudsY--;
  }
}
if(cloudsY > 50){
  cloudsMove = false;
}

if(cloudsY < 0){
  cloudsMove = true;
}
//waves code
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
// tree code
if(treeStart == true){
  if(treeMove == true){
    treeX++;
  }else{
    treeX--;
  }
if(treeX > 20){
  treeMove = false;
}
if(treeX < 0){
  treeMove = true;
}
  }
// dolphin code
if(dolphinStart == false){
  if(dolphinsMove == true){
    dolphinsY--;
  }else{
    dolphinsY++;
  }
}
if(dolphinsY > 25){
  dolphinsMove = true;
}
if(dolphinsY < 20){
  dolphinsMove = false;
}
  }

// mouse pressed code
function mousePressed(){
  if(mouseX > hitX[0] && mouseX < hitX[0] + hitSize && mouseY > hitY[0] && mouseY < hitY[0] + hitSize){
    console.log("Click Waves");
    waveStart = true;
  }
if(mouseX > hitX[0] && mouseX < hittreeX[0] + hittreeSize && mouseY > hittreeY[0] && mouseY < hittreeY + hittreeSize){
    console.log("Click Tree");
    treeStart = true;
    cloudStart = true;
  }
if(mouseX > hitX[0] && mouseX < hitdolphinX[0] + hitdolphinSize && mouseY > hitdolphinY[0] && mouseY < hitdolphinY + hitdolphinSize){
    console.log("Click Dolphin");
    dolphinStart = true;
    treeStart = true;
  }
if(mouseX > hitcloudX[0] && mouseX < hitcloudX[0] + hitcloudSize && mouseY > [0] && mouseY < hitcloudXY + hitdolphinSize){
    console.log("Click Cloud");
    //cloudStart = true;
}

}

// end of DRAW
