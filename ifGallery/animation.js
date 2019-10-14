// https://openclipart.org/image/300px/svg_to_png/257622/1470680735.png

var seasonsSelect;
var seasonsType = "";


var sunX = 0;
var sunY = 0;

var snowX = [];
var snowY = [];
snowAmount = 100;

var leafX = [];
var leafY = [];
var leafAmount = 100;
var leafImage;


function preload(){
  leafImage  = loadImage("https://openclipart.org/image/300px/svg_to_png/257622/1470680735.png");

}

function setup () {
// put setup code here
  createCanvas(600,600);
  seasonsSelect = createSelect();
  seasonsSelect.position(10,10);
  seasonsSelect.option("");
  seasonsSelect.option("fall");
  seasonsSelect.option("winter");
  seasonsSelect.option("spring");
  seasonsSelect.option("summer");
  seasonsSelect.changed(function(){

    seasonsType = seasonsSelect.value();

  });

  sunX = width/2;
  sunY = height * 2;

  // var i = 0; start variable
  // i <100; is going to set our limit
  // i++ is our iterator i++ is the same as i = i + 1

  for(var i = 0; i<snowAmount; i++){
    snowX[i] = random(0,width);// chose a number from 0 to width-1 or 399
    snowY[i] = random(0,-700); // chose


  }

  console.log("snowX" + snowX);
  console.log("snowY" + snowY);





}// KEEP EVERYTHING LOWERCASE
function draw(){
//put drawing code here
  background("255");

if(seasonsType == "fall"){
  console.log("fall");
  background("orange");

  for(var l = 0; l<leafAmount; l++){
    image(leafImage,leafX[l], leafY[l],20,20);

    if(leafY[l]<height-20){
    leafY[l]++;
    leafX[l] = leafX[l] + sin(radians(frameCount));
    }
  }

console.log("sin(radians(frameCount))" + sin(radians(frameCount)));



}else if(seasonsType =="winter"){
  console.log("winter");
  background("white");

  for(var x = 0; x<snowAmount;x++){
    snowY[x]++; // snowY[i] = snowY[i] + 1;
    ellipse(snowX[x],snowY[x],10,10);
    // checks for snow hitting bottom of the screen
    if(snowY[x] > height){
      //snowX[0] = 0;
      snowY[x] = snowX[x] + 5;
      snowY[x] = random(0,-700);
      snowX[x] = random(0,width);

//var i gets destroyed after the loop is done, so you can use it again
  for(var i = 0; i < leafAmount; i++){
    leafY[i] = random(0, -700);
    }




  }
}

}else if(seasonsType =="spring"){
  console.log("spring");
}else if(seasonsType == "summer"){
  console.log("summer");
    background("yellow");
  ellipse(sunX,sunY,width,height);

  if(sunY > height){
      sunY = sunY - 1;
  }


  fill("orange");
  stroke("red");

}else{
  console.log("blank");
  text("Make a selection", 100,25);

}










}
//end of draw
