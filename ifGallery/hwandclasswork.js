// Sloth image "IMG_3883" by JohnHedtke is licensed under CC BY-NC-SA 2.0 https://search.creativecommons.org/photos/217faedd-d06a-48ba-91f7-f4d4c6dafa04
// Puppy image "puppies" by www.petian.net is licensed under CC BY-NC-ND 2.0  https://search.creativecommons.org/photos/4f271583-e45d-4faf-bfc8-7291c7c1e3c3
// dinosaur "Rupenhorn Dinosaur #4" by Kristian_Laban is licensed under CC BY-NC 2.0 https://search.creativecommons.org/photos/96213ba5-e9b6-4f2f-91e4-da28b9fcad22
// horse "Horses in the Smokies" by coffey67 is licensed under CC BY-NC-ND 2.0 https://search.creativecommons.org/photos/0e25425a-a41c-49b0-9125-f0fa24c29fb4
// cat "Cats @ $HOME" by Amayita is licensed under CC BY-NC-ND 2.0 https://search.creativecommons.org/photos/1ef8e2e5-6171-419f-b99e-f3c6c341720c
// rabbit "Rabbits / Kaninchen" by Robobobobo is licensed under CC BY-SA 2.0 https://search.creativecommons.org/photos/4f5362c8-a6b2-42dd-a999-37e242094e37
// bird "seagull bird" by watts_photos is licensed under CC BY 2.0 https://search.creativecommons.org/photos/7c8d1e08-e6f2-49f5-80ee-4ab53ffb3289

var puppy, dinosaur, sloth, cat, horse, rabbit, bird;
var pButton, dButton, sButton, cButton, hButton, rButton, bButton;

var currentImage = 0;


function preload(){
//load media
puppy = loadImage("images/puppy.jpg");
dinosaur = loadImage("images/dinosaur.jpg");
sloth = loadImage("images/sloth.jpg");
cat = loadImage("images/cats.jpg");
horse = loadImage("images/horse.jpg");
rabbit = loadImage("images/rabbit.jpg");
bird = loadImage("images/bird.jpg");
}

function setup() {
  // put setup code here

  createCanvas(400,400);
pButton = createButton("Puppy");
pButton.mousePressed(function(){
  currentImage = 0;

});

dButton = createButton("Dinosaur");
dButton.mousePressed(function(){
  currentImage = 1;

});

sButton = createButton("Sloth");
sButton.mousePressed(function(){
  currentImage = 2;
});

cButton = createButton("Cat");
cButton.mousePressed(function(){
  currentImage = 3;
});

hButton = createButton("Horse");
hButton.mousePressed(function(){
  currentImage = 4;
});

rButton = createButton("Rabbit");
rButton.mousePressed(function(){
  currentImage = 5;
});

bButton = createButton("Bird");
bButton.mousePressed(function(){
  currentImage = 6;
});

}

function draw() {
  // put drawing code here
  background(255);
console.log("currentImage" + currentImage);
if(currentImage== 0){
  //show puppy
  image(puppy,0,0,puppy.width/4, puppy.height/4);
}else if(currentImage== 1){

//show dinosaur
  image(dinosaur,0,0,dinosaur.width/4, dinosaur.height/4);
}else if(currentImage== 2){

  //show sloth
  image(sloth,0,0,sloth.width/4, sloth.height/4);
}else if(currentImage== 3){

  //show cat
  image(cat,0,0,cat.width/4, cat.height/4);
}else if(currentImage==4){

  //show horse
  image(horse,0,0,horse.width/4,horse.height/4);
}else if (currentImage== 5){

  // show Rabbit
  image(rabbit,0,0,rabbit.width/4,rabbit.height/4);
}else if (currentImage== 6){

  // show Bird
  image(bird,0,0,bird.width/4,bird.height/4);
}else if (currentImage== 7){
}
}
