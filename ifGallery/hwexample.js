// Sloth image "IMG_3883" by JohnHedtke is licensed under CC BY-NC-SA 2.0 https://search.creativecommons.org/photos/217faedd-d06a-48ba-91f7-f4d4c6dafa04
// Puppy image "puppies" by www.petian.net is licensed under CC BY-NC-ND 2.0  https://search.creativecommons.org/photos/4f271583-e45d-4faf-bfc8-7291c7c1e3c3
// dinosaur "Rupenhorn Dinosaur #4" by Kristian_Laban is licensed under CC BY-NC 2.0 https://search.creativecommons.org/photos/96213ba5-e9b6-4f2f-91e4-da28b9fcad22
// horse "Horses in the Smokies" by coffey67 is licensed under CC BY-NC-ND 2.0 https://search.creativecommons.org/photos/0e25425a-a41c-49b0-9125-f0fa24c29fb4
// cat "Cats @ $HOME" by Amayita is licensed under CC BY-NC-ND 2.0 https://search.creativecommons.org/photos/1ef8e2e5-6171-419f-b99e-f3c6c341720c



var currentImage = 0;

var currentAnimal;

var imageArray = [];


function preload(){
//load media
imageArray[0] = loadImage("images/puppy.jpg");
imageArray[1] = loadImage("images/dinosaur.jpg");
imageArray[2] = loadImage("images/sloth.jpg");
imageArray[3] = loadImage("images/cats.jpg");
imageArray[4] = loadImage("images/horse.jpg");
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

}

function draw() {
  // put drawing code here
  background(255);
console.log("currentImage" + currentImage);
image(imageArray[currentImage],0,0,imageArray[currentImage].width/4,imageArray[currentImage].height/4);







}
