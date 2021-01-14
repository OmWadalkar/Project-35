var dog,happyDog;
var foods,foodstock;
var dogIMg,dogIMg2;
var database;

function preload()
{
  dogIMg = loadImage("dog(1).png");
  dogIMg2 = loadImage("happydog(1).png");
}

function setup() {
	createCanvas(500,500);
  database = firebase.database();

  dog = createSprite(200,300,20,20);
  dog.addImage("dog",dogIMg);

  foodstock = database.ref('Food');
  foodstock.on("value",readstock);
}


function draw() {  
 background(46,139,87);
  //add styles here
  if (keyWentDown(UP_ARROW)) {
    writestock(foods);
    dog.addImage("dog",dogIMg2);
  }
  drawSprites();
  textSize(15);
  text("FoodStock: "+foodstock,200,250);
}
function readstock()
{
  foods=data.val();
}
function writestock(x)
{
  database.ref('/').update({
  Food:x
  })
}