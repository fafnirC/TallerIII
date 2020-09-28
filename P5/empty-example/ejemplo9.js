
//se crea un arreglo
let rectangulos = []; 

function setup() 
{
  createCanvas(400, 1400);

  for (let i = 0; i < 8; i++) 
  {                                          //(name, posX, posY, height, width) 
    rectangulos.push(new Rectangle("rect número "+i, random(0, 400), random(200, 400), 20, 10));


  }

}

function draw() 
{
  background(150);


  for (let i = 0; i < 8; i++) 
  {
    rectangulos[i].mostrar();

    text (rectangulos[i].name, 20,350+(i*20));
  }


}




class Rectangle 
{
  constructor(name, posX, posY, height, width) 
  {
  	this.name = name;
    this.x = posX;
  	this.y = posY;
    this.height = height;
    this.width = width;
  }

  mostrar()
  {
  	stroke(0);
    strokeWeight(0.8);
  	rect(this.x,this.y,this.width,this.height);
  }
}