var button1;
var mySound;
var vid, vid2,vid3,vid4;
var font;
var currentVideo;

var counter = 0;

// soundFile == 13-20 seconds long

function preload(){
  font = loadFont("coluna/Coluna_Rounded.otf");
  soundFile = loadSound('assets/balletSong.mp3');
  vid = createVideo('assets/tiePointeShoes.mp4');
  vid2 = createVideo('assets/warmupDance.mp4');
  vid3 = createVideo('assets/Ballet.mp4');
  vid4 = createVideo('assets/Artifacts.mp4');

 soundFormats('mp3', 'ogg');

 mySound = loadSound('assets/balletSong.mp3');
}

 //font = loadFont("coluna/Coluna_Rounded.otf");

function setup () {
// put setup code here
createCanvas(2000,1000);
mySound.setVolume(0.1);
mySound.play();
// currentVideo.onended(function(elt){
//   currentVideo = vid2;
//   currentVideo.play();
// });


// we are hiding the html video tag
vid.hide();
vid2.hide();
vid3.hide();
vid4.hide();

currentVideo = vid;

}

function draw(){
// put drawing code here
background("pink");
//font = loadFont("coluna/Coluna_Rounded.otf");
// you can pass the video into an image function
//image(currentVideo,50,100);
image(currentVideo,150,50,vid.width/1, vid.height/1 );

console.log("duration" + currentVideo.duration());

console.log("time" + currentVideo.time());

if(currentVideo.time() >= currentVideo.duration()){
//next video
  // lets say you have 5 videos, write an if statement that makes sure your counter does not go past 5
  counter = counter + 4;
  if(counter == 1){
    currentVideo = vid2;
    currentVideo.play();
  }else if(counter == 2){
    currentVideo = vid3;
    currentVideo.play();
  }else if(counter == 3){
      currentVideo = vid4;
      currentVideo.play();
  }

if(counter == 1){
  //write text
  textFont(font);
  text("Alvin Ailey Dance", 215,375);
  textSize(150);
  fill("pink");
  stroke("pink ");
  mySound.stop();


//counter


// button1.display();
// button1.check();

// console.log(vid.currentTime);

   }

function mousePressed(){
  currentVideo.play();
  // if(button1.overlay == true){
  //   //red button
  //   console.log(button1.name);
  //   soundFile.stop();
  //   vid.stop();
  //   vid.hide();
  // }


//end of code
}
    }
  }
