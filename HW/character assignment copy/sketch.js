var pointX = 0;
var pointY = 0;
var faceColor = "purple";

var colorButton;

function setup()
// put setup code here

createCanvas(400,400);
pointX = width/2;
pointY = height/2;
console.log("pointX" + pointX + "pointY" + pointY);

colorButton = createButton("Click to turn ");

var message = "Hello";// the scopre of this variable is only available inside of the setup function. If used in draw or any other function, you will recieve and error
console.log(message);
console.log(drawMessage);// error: draw Message is not defined, drawMessage was declared only in the draw
var drawMessage = "This message is in the draw loop";



function draw();
// put setup code here
}
var drawMessage = "this message is in the draw loop";
console.log(drawMessage);

background(255);
