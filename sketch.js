var housewife;
var gameState="start";
var button,setReminder;
var form;
function preload(){
  housewife = loadImage("housewife_img.jpg");
}



function setup() {
  createCanvas(displayWidth,displayHeight);
  button = createButton("Let's continue")
  button.position(width/2-20,height/2+20)

  setReminder = createButton("Set Reminder");
  form = new Form();
  
}

function draw() {
  if (gameState==="start"){
  background(housewife);
 

  textSize(20)
  fill("#C70039")
  text("WELCOME TO Mumma's Menu, The Helping Hand",width/2-220, height/2);
  
  
  button.mousePressed(function () {
    button.hide();
    clear()
    gameState= "homepage"

  })
}
else if (gameState==="homepage"){
  clear ();
  setReminder.position(10,10)

 setReminder.mousePressed(function (){
   gameState= "showform"
 })
}
else if (gameState==="showform"){
  form.display();
}
  
  drawSprites();
}

