

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

  ///circleColor(xpos, ypos, r,g,b);
  circleColor(random(width), random(height), random(255), random(255), random(255));xw
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
  ellipse(xpos,ypos,10,10);



}
