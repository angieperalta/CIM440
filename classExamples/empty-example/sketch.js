var pointX = 0;
var pointY = 0;

var point2; //variable undefined


var Eyesize = 40;

var faceColor = 'white'

function setup () {
// put setup code here
createCanvas(500,500);
pointX = width/2;
pointY = width/2;



console.log("pointX " + pointX + "pointY " + pointY);// don't forget to add the space within the quotation marks
console.log(point2);

}
function draw() {
//put drawing code here
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
//arc(pointX,pointY + 10,50,50,0,PI);
}
//end of draw
