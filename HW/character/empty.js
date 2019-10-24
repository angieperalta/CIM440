

function setup () {
// put setup code here
createCanvas(400,400);

hello();
goodbye("angie");
goodbye("kat");
goodbye("anna");

}
function draw()
//put drawing code here
  background(255);
  //framerate(1)

  ///circleColor(xpos, ypos, r,g,b) order coresponds to parameter order
  circleColor(random(width), random(height), random(255), random(255), random(255), random(0,200)); // once a frame

  ///5000 times a frame// var i = 0; start , i <500; how many times; i++ is counter i+1
  for(var i = 0; i < 500; i++){
    circleColor(random(width), random(height), random(255), random(255), random(255), random(0,200));
  }
}
//end of draw


function hello(){
  console.log("Hello");

}
function goodbye(message){
  console.log("Goodbye + message);

}


function circleColor(xpos,ypos,r,g,b){
  fill(r,g,b);
  ellipse(xpos,ypos,cSize, cSize);




}
