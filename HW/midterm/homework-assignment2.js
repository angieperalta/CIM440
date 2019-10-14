
var pointX = 0;
var pointY = 0;
var faceColor = "pink";

var faceButton;

function setup() {
  // put setup code here
  createCanvas(500,500);
  pointX = width/2;
  pointY = height/2;
  console.log("pointX " + pointX + " pointY " + pointY );

  faceButton = createButton("Click to turn green");
  faceButton.position(25,350);
  faceButton.mousePressed(function(){
    faceColor = "green";

  });

  faceButton = createButton("Click to turn red");
  faceButton.position(300,350);
  faceButton.mousePressed(function(){
    faceColor = "red"

  });
}

function draw() {
  // put drawing code here
  if(mouseX < width/2){
    console.log("left hand side");
      background("yellow");
  }
  if(mouseX > width/2){
    console.log("right hand side");
    background("pink");
  }

  if(mouseX == width/2){
    console.log("center");
    background("red");
  }

  pointX = mouseX;
  pointY = mouseY;

  fill(faceColor);
  rect(pointX-100,pointY-100,200,200);

  ellipse(pointX,pointY, 10,10);//nose

  ellipse(pointX + 20,pointY -20,30,30);// right eye
  ellipse(pointX - 20, pointY -20, 30,30);//left eye
  arc(pointX,pointY + 10,50,50,0,PI);


}
