let rectangulo1;
let rectangulo2;
let rectangulo3;


function setup() 
{
  createCanvas(400, 400);

  //creamos los rectangulos inicializando la clase
  rectangulo1 = new Rectangle('primero', 0, 50, 100, 100, 50, 0, 0, 0, "assets/mundo.jpg");
  rectangulo2 = new Rectangle('segundo', 50, 100, 200, 120, 10, 255, 0, 0, "assets/pato.jpg");
  rectangulo3 = new Rectangle('tercero', 150, 250, 60, 180, 170, 0,0,255, "assets/mundo.jpg");

  rectangulo1.inicial();
  rectangulo2.inicial();
  rectangulo3.inicial();
}

function draw() 
{
  background(150);

  rectangulo1.mostrar();
  rectangulo2.mostrar();
  rectangulo3.mostrar();

  //print(rectangulo1.name);
  //console.log(rectangulo1.name);

  text (rectangulo1.nombre, 20,350);
  text (rectangulo2.nombre, 20,365);
  text (rectangulo3.nombre, 20,380);
}




class Rectangle 
{
  constructor(name, posX, posY, height, width, angulo, r, g, b, ubicacion) 
  {
  	this.nombre = name;
    this.x = posX;
  	this.y = posY;
    this.alto = height;
    this.ancho = width;
    this.rot = angulo;
    this.rojo = r;
    this.verde = g;
    this.azul = b;
    this.ub = ubicacion
  }

  inicial()
  {
    this.img = loadImage(this.ub);
  }

  mostrar()
  {
  	stroke(0);
    strokeWeight(0.8);4

    //rotateX(radians(this.rot));
    //fill(this.rojo,this.verde,this.azul)
  	//rect(this.x,this.y,this.ancho,this.alto);
    image(this.img,this.x,this.y); 
  }
}