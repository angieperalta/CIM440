var pointX = 0;
var pointY = 0;
var faceColor = "purple";

var colorButton;
colorButton.position(20,20);
colorButton.mousePressed(function(){

faceColor = "purple";

});

function setup()
// put setup code here

createCanvas(400,400);
pointX = width/2;
pointY = height/2;
console.log("pointX" + pointX + "pointY" + pointY);

console.log(point2);

colorButton = createButton("Click to turn purple");// function that is part of p5.dom library, It generates on html button;


var message = "Hello";// the scope of this variable is only available inside of the setup function. If used in draw or any other function, you will recieve and error
console.log(message);
console.log(drawMessage);// error: draw Message is not defined, drawMessage was declared only in the draw
var drawMessage = "This message is in the draw loop";



function draw();
// put setup code here
}
var drawMessage = "this message is in the draw loop";
console.log(drawMessage);


//Use an if statement to change background colorButton
// what is going to be our condition

if(mouseX < width/2){
//do something
console.log("left hand side");
background(255);

}

if(mouseX > width/2){
console.log("right hand side");
background("grey")
}


background('pink');
//pointX = 200;
//pointY = 200;
fill('yellow');
ellipse(50,50,150,150);

fill('yellow');
ellipse(450,450,150,150)

fill('orange');
circle(250,250,300,300);

strokeWeight(3);


fill('white');
ellipse(270,200,Eyesize,Eyesize);// left Eyesize
ellipse(230,200,Eyesize,Eyesize);// right Eyesize

fill('black');
ellipse(270,200,15,15);// left Eyesize
ellipse(230,200,15,15);// right Eyesize

fill('pink');
ellipse(pointX, pointY, 10,10);

fill('pink');
ellipse(pointX + 20, pointY + 20,30,30);
ellipse(pointX - 20,point - 20,30,30);
//ellipse(point2, pointY,20,20);


//arc(x,y,width,height,start,end);
fill('orange');
arc(pointX,pointY,50,50,0,PI);


//ellipse(point2,point2,10,10);



}// end of draw

function mousePressed(){
// faceColor = "blue";
}

function mousePressed(){
//faceColor = "red";
}

function keyPressed(){
//faceColor = "white";
}

console.log("key" + key);
console.log("keyCode" + keyCode);

// conditional: if condition = true, then do what is inside curly braces.
// == means one side equals the other

if(key == "w"){}
// what you want to happen goes in here
faceColor = "white";

}

if(key == "r");
faceColor = "red";
}


}//end of keyPressed






//end of document
