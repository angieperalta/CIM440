var questions = ["Is Iceland always covered in ice?","What ocean lies east of the US?"];
var options = ["1) true","2) false", "1) pacific 2) eastern 3) indian 4) atlantic" ];
var answers = [1,3];

var buttons = [];

var currentOption = -1;// refers to what button the user has pressed

var currentQuestion = 0;

var answerText = "";

var startTimer = false;

var interval = 5000;

var prevMillis = 0;




function setup(){
// put setup code here
  createCanvas(400,400);

  buttons[0] = createButton("1");
  buttons[0].position(10,300);
  buttons[0].mousePressed(function(){
    currentOption = 0;
  });// end of mousePressed

  buttons[1] = createButton("2");
  buttons[1].position(50,300);
  buttons[1].mousePressed(function(){
    currentOption = 1;
  });// end of mousePressed


  buttons[2] = createButton("3");
  buttons[2].position(100,300);
  buttons[2].mousePressed(function(){
    currentOption = 2;
  });// end of mousePressed


  buttons[3] = createButton("4");
  buttons[3].position(150,300);
  buttons[3].mousePressed(function(){
    currentOption = 3;
  });// end of mousePressed


}// end of setup

function draw(){
// put drawing code here
background(255);
text(questions[currentQuestion], 20, 100);
text(options[currentQuestion], 20, 150);

if(startTimer == true){
  text(answerText, 20, 200);
if(millis()-prevMillis > interval){
  prevMillis = millis();
  startTimer = false;
  console.log("Timer ended");

  //do something
}// end of timer
}

//if currentOption is not equal to -1
if(currentOption != -1){
// do something if currentOption is not equal -1
// check for currentOption since it has a value
  console.log("currentOption" + currentOption);
  if(currentOption == answers[currentQuestion]){
    console.log("correct");
    answerText = "correct";

    currentQuestion = currentQuestion + 1;
// array.length counts how many items are in the array
// if currentQuestion == 2
    if(currentQuestion == questions.length){
      currentQuestion = 0;

    }



  }else{
    console.log("incorrect");
    answerText = "incorrect";
  }// end of checking if answer is correct or incorrect

  //reset to inactive state
  currentOption = -1;
  startTimer = true;
  prevMillis = millis; // ensure when the person presses the button from that point on (time ex 30) its gonna start counting 30 seconds

}// end of currentOption = 1









}// end of draw loop
