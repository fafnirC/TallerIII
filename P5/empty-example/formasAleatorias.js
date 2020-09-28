//se crea un arreglo
let rectangulos = []; 
let rectangulos1 = []; 
let circulos= [];
let triangulos= [];
let arcos= [];
let quads= [];
let contador;
let p;
let n;

let o;

function preload() 
{
  soundFormats('ogg', 'mp3');
  sonido = loadSound('assets/wa.mp3');

  sonido1 = loadSound('assets/cs.mp3');
  

}

function setup() 
{
  createCanvas(500, 600);
  p="Comenzar";
  
  contador =3 ;
  button1 = createButton(''+p);
  button1.position((width/2)-180, height+30);
  button2 = createButton('Cambio de color');
  button2.position((width/2), height+30);
  button2.hide(); 
  button3 = createButton("Pausar");
  button3.position((width/2)-180, height+30);
  button3.hide(); 

  button4 = createButton("Volver");
  button4.position((width/2)-180, height+75);
  button4.hide(); 
  q=0;
  n=0;
  o=0;

  button5 = createButton('Volver de cero');
  button5.position((width/2), height+75);
  button5.hide(); 

}

function draw() 
{
 
  background(0);
  
  text('Numero de duplicados   '+q,100, (height/2)+280);
  if(contador == 3){
    fill(250);
    text('Advertencia \n Este ejercicio tiene contenido \n que puede causar epilepsia', (height/2)-150, (width/2));
   }
  button1.mousePressed(deNuevo);
  button2.mousePressed(otra);
  button3.mousePressed(pausa);
  button4.mousePressed(volver);
  button5.mousePressed(ove);
  if (contador == 0 ||contador == 4 ){
    for (let i = 0; i < 1; i++) 
    {                                          //(name, posX, posY, height, width) 
      
      rectangulos.push(new Rectangle(random(0, 450), random(0, 400), random(0,150),random(0, 100)));
  
      circulos.push(new Circulo(random(0, 450), random(0, 500), random(0, 100), random(0, 50)));
      arcos.push(new Arco(random(0, 450), random(0, 500), random(0, 100), random(0, 100)));
      triangulos.push(new Triangulo(random(0, 450), random(0, 450), random(0, 400),random(0, 500), random(0, 400), random(0, 500)));
      q++;
      quads.push(new Quad(random(0, 450), random(0, 450), random(0, 400),random(0, 500), random(0, 400), random(0, 500),random(0, 400),random(0, 400)));
    }
  }

  for (let i = 0; i < rectangulos.length; i++) 
    {
      rectangulos[i].mostrar();

       if(contador == 0){
        fill(random(255),random(255),random(255));
       }
      
      circulos[i].mostrar();
      if(contador == 0){
        fill(random(255),random(255),random(255));
       }
      
      triangulos[i].mostrar();
      if(contador == 0){
        fill(random(255),random(255),random(255));
       }

       quads[i].mostrar();
       if(contador == 0){
         fill(random(255),random(255),random(255));
        }
     
    }
    if(q>=10 ){
      if(n==0){
        sonido.setVolume(0.5);
        sonido.loop();
        n=1;
      }
    
    }

}
class Circulo
{
  constructor(posX, posY, height, width) 
  {
    this.x = posX;
  	this.y = posY;
    this.height = height;
    this.width = width;
  }
  
  mostrar()
  {
  	stroke(0);
    strokeWeight(0.8);
    ellipse(this.x,this.y,this.width,this.height);
  
  }

}

class Arco
{
  constructor(posX, posY, height, width) 
  {
    this.x = posX;
  	this.y = posY;
    this.height = height;
    this.width = width;
  }
  
  mostrar()
  {
  	stroke(0);
    strokeWeight(0.8);
    arc(this.x,this.y,this.width,this.height,PI, TWO_PI);
  
  }

}

class Quad
{
  constructor(x1, x2, x3, x4,x5, x6,x7,x8) 
  {
    this.x1 = x1;
  	this.x2 = x2;
    this.x3=  x3;
    this.x4 = x4;
    this.x5=  x5;
    this.x6= x6;
    this.x7=  x7;
    this.x8= x8;
    
  }
  
  mostrar()
  {
  	stroke(0);
    strokeWeight(0.8);
    quad(this.x1, this.x2, this.x3, this.x4, this.x5, this.x6, this.x7, this.x8);
  }
}

class Triangulo
{
  constructor(x1, y1, x2, y2,x3, y3) 
  {
    this.x1 = x1;
  	this.y1 = y1;
    this.x2=  x2;
    this.y2 = y2;
    this.x3=  x3;
    this.y3= y3;
    
  }
  
  mostrar()
  {
  	stroke(0);
    strokeWeight(0.8);
    triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3)
  }

}


class Rectangle 
{
  constructor(posX, posY, height, width) 
  {
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

function deNuevo(){

  if(contador==3||contador == 0){
    contador =0;
    //contador =1;
    //button2.show(); 
    button1.hide(); 
    button3.show(); 
  } 
}


function otra(){
  if(contador==1 ||contador == 0||contador == 4){
    sonido1.play();
    fill(random(255),random(255),random(255));
    contador=4;
  }

}
//

function pausa(){
  if(contador ==0 ||contador == 4){
    sonido.stop();
    contador =1;
    button2.show();
    button4.show();
    button5.show();
    
}
}

function volver(){
 
  contador=0;
  sonido.loop();
}
function ove(){
sonido1.play();
rectangulos = []; 
rectangulos1 = []; 
circulos= [];
triangulos= [];
arcos= [];
q=0;
}