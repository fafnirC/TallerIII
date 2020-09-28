let ancho = 100;
let alto = 100;
let x = 100;
let y = 100;

function setup() 
{
  createCanvas(640, 480);

  background(200,146,75);
}

function draw() 
{
  fill(255);
  

	if (mouseIsPressed) 
  {
    botonOprimido(x,y,ancho,alto);
  } 
  
  rect(x,y,ancho,alto);
}

function botonOprimido(posX, posY, anch, alt)
{
  if ( mouseX >= posX && mouseX <= (posX + anch) && mouseY >= posY && mouseY <= (posY + alt)) 
  {
       fill(0);
       console.log("oprimido"); 
  }

     
}