var imagen;

function preload() 
{
  imagen = loadImage('assets/mundo.jpg');
  
}

function setup() 
{
  lienzo= createCanvas(720, 320);
  lienzo.position(250,250);
}

function draw() 
{
  image(imagen, mouseX, mouseY);
}