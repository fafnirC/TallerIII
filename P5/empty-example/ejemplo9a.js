
//se crea un arreglo
let rectangulos = []; 

let cnv;
                  

let grados = 0;                  

function setup() 
{
  cnv = createCanvas(400, 400);
  cnv.position(100,100);

  angleMode(DEGREES);

  for (let i = 0; i < 10; i++) 
  {        
   // rectangulos.push(new Rectangle("rect número "+i, 0, 0, 20, 10,45)); 
  
    //rectangulos.push(new Rectangle("rect número "+i, random(0, 50), random(0, 50), 20, 10,45));

    rectangulos.push(new Rectangle("rect número "+i, random(0, 50), random(0, 50), 20, 10,random(0, 360)));
  }


}

function draw() 
{
  background(150);

 console.log (rectangulos.length);

  for (let i = 0; i < rectangulos.length; i++) 
  {
      rectangulos[i].mostrar();
    

    //text (rectangulos[i].name, 20,350+(i*20));
  }



 grados++;
/*
 push();
  translate(200,200);
rotate(grados);

 // rotate(45);

  fill(255,0,0);
  rect(0,0,100,50);
pop();
  fill(0,0,255);
  rect(150,150,20,20)

 // pop();
  

  //fill(0,0,255);
  //rect(150,150,20,20)

*/
}




class Rectangle 
{
  constructor(name, posX, posY, height, width, angulo) 
  {
    this.nombre = name;
    this.x = posX;
    this.y = posY;
    this.alto = height;
    this.ancho = width;
    this.ang = angulo;
  }

  mostrar()
  {
    push();
    translate(200,200);
    rotate(this.ang++);
    stroke(0);
    strokeWeight(0.8);
    fill(255);
    rect(this.x,this.y,this.ancho,this.alto);
    pop();
  }
}
