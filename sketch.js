var balloon;
var database;
var position;
var height;
var readPosition; 


function setup() {
  database = firebase.database();
  console.log(database);
  background()
  createCanvas(500,500);
  balloon = createSprite(400, 200, 50, 50);


  var balloonPosition= database.ref('balloon/height');
    balloonPosition.on("value", readPosition, showError);


}

function draw() {
  background(255,255,255);  
  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x-10;
  }
  else if (keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x+10;
  }
  else if (keyDown(UP_ARROW)){
    balloon.y = balloon.y-10;
  }
  else if (keyDown(DOWN_ARROW)){
    balloon.y = balloon.y+10; 
  }
// text data
  textSize(10); 
  fill("green");
  strokeWeight(2);


  drawSprites();
}


function preload(){
  //getBackgroundImage();


}
function updateHeight(x,y){
database.ref('balloon/height').set({
  'x': height.x + x , 
  'y':height.y + y 
 })
if(keyDown(UP_ARROW)){
  updateHeight(0,-10);
  ballooon.addAnimation("hotAirBalloon",balloonImaages2);
  balloon.scale=balloon.scale - 1.01;
}
if(keyDown(DOWN_ARROW)){
  updateHeight(0,10);
  ballooon.addAnimation("hotAirBalloon",balloonImaages2);
  balloon.scale=balloon.scale + 1.01;
}
}

function readHeight(){
  console.log(data);
  height = data.val();
  console.log(position.x);
  balloon.x = height.x;
  balloon.y = height.y;
}

function showError(){
    
  console.log("Error in writing to the database.");
}
