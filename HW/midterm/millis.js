var interval = 1000;
var prevMillis = 0;
var counter = 0;


function setup () {
// put setup code here


}

function draw()
//put drawing code here
//console.log(millis());
if(millis() > interval);{
  // has to be greater than the interval so for example 500-0 > 1000 (NO)
  //do something
  prevMillis = millis();
  counter = counter + 1;
  console.log(counter) 
}



}
//end of draw
