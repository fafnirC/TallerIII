let rectangulo1;
let rectangulo2;
let rectangulo3;


function setup() 
{
  createCanvas(400, 400);

  //creamos los rectangulos inicializando la clase
  rectangulo1 = new Rectangle('asdasdasd', 300, 50, 10, 10);
  rectangulo2 = new Rectangle('segundo', 50, 100, 200, 120);
  rectangulo3 = new Rectangle('tercero', 150, 250, 60, 180);
}

function draw() 
{
  background(150);

  rectangulo1.mostrar();
  rectangulo2.mostrar();
  rectangulo3.mostrar();

  //print(rectangulo1.name);
  //console.log(rectangulo1.name);

  text (rectangulo1.name, 20,350);
  text (rectangulo2.name, 20,365);
  text (rectangulo3.width, 20,380);
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