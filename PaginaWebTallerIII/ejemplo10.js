let table2; 
let bubbles = []; 
let rowCount2;
let img;
var button;
var button1;
var button2;
var button3;
var button4;
var sonido;
var sonido1;
var sonido2;
var sonido3;
var playing = false;
var crecimiento = 0;
var verificar;
let cnv2;

function preload() 
{
  
  table2 = loadTable("assets/genero.csv", "header");

  /*sonido = loadSound('assets/rock.mp3');
  sonido1 = loadSound('assets/regueton.mp3');
  sonido2 = loadSound('assets/salsa.mp3');
  sonido3 = loadSound('assets/Popular.mp3');*/

}


function setup() 
{
  cnv2 = createCanvas(1440, 500);

  cnv2.parent(P5Gen);

  cnv2.background(77,35,25);

  fill(255,250,255)
  stroke(188,56,16);
  textSize(30);
  text("32%",548,50);
  text("26%",728,50);
  text("19%",295,50);
  text("23%",105,50);
  textSize(20);
  text("Al darle a Cargar nos mostrara un crecimiento de ", 900,200); 
  text("el genero musical con su respectiva audiencia ", 900,230);
  text("a la hora de presentarse en conciertos.", 900,260);



  
  /*sonido.setVolume(0.1);
  sonido1.setVolume(0.1);
  sonido2.setVolume(0.1);
  sonido3.setVolume(0.1);*/

  button1 = createButton('Rock');
  button1.mousePressed(toggleVid2); 
  button1.position(548,165);
  button1.size(70,50); 
  button1.parent(P5Gen);

  button2 = createButton('Regueton');
  button2.mousePressed(toggleVid3); 
  button2.position(728,165);
  button2.size(90,50); 
  button2.parent(P5Gen);

  button3 = createButton('Salsa');
  button3.mousePressed(toggleVid4); 
  button3.position(295,165);
  button3.size(70,50); 
  button3.parent(P5Gen);

  button4 = createButton('Popular');
  button4.mousePressed(toggleVid5); 
  button4.position(105,165);
  button4.size(80,50); 
  button4.parent(P5Gen);
  
  

  rowCount2 = table2.getRowCount();

  
  const row = table2.getRows();  

  for (let i = 0; i < rowCount2; i++) 
  {
    
    const x = row[i].getNum("x");  
    const y = row[i].getNum("y"); 
    const diameter = row[i].getNum("diameter");
    const name = row[i].getString("name");

    
    bubbles.push(new Bubble(x, y, diameter, name));
    
  }

  button = createButton('Cargar');
  button.mousePressed(toggleVid); 
  button.position(400,400);
  button.size(100,50);
  button.parent(P5Gen);
}

function toggleVid() 
{
  verificar = 1;
  
}

function toggleVid2() 
{
  
  if (playing == true) 
  {
    sonido.pause();
    button1.html('Rock');
  } 
  
  else 
  {
    sonido.loop();
    button1.html('Parar');
  }
  playing = !playing;
}


function toggleVid3() 
{
  
  if (playing == true) 
  {
    sonido1.pause();
    button2.html('Regueton');
  } 
  
  else 
  {
    sonido1.loop();
    button2.html('Parar');
  }
  playing = !playing;
}

function toggleVid4() 
{
  
  if (playing == true) 
  {
    sonido2.pause();
    button3.html('Salsa');
  } 
  
  else 
  {
    sonido2.loop();
    button3.html('Parar');
  }
  playing = !playing;
}

function toggleVid5() 
{
  
  if (playing == true) 
  {
    sonido3.pause();
    button4.html('Popular');
  } 
  
  else 
  {
    sonido3.loop();
    button4.html('Parar');
  }
  playing = !playing;
}

function draw() 
{
  if(verificar == 1){
     crecimiento = crecimiento+1;
  }
  
  
  
  //for (let i = 0; i < bubbles.length; i++)
  for (let i = 0; i < rowCount2; i++) 
  {
  	//recorre cada burbuja y llama a la función dibujar para mostrarla
    //bubbles[i].dibujar();
    //ellipse(bubbles[i].x,bubbles[i].y,bubbles[i].diameter,bubbles[i].diameter.);
    //ellipse(bubbles[i].x,bubbles[i].y,20+crecimiento,20+crecimiento);
    if(crecimiento>=bubbles[i].diameter){

      fill(188,56,16);
      stroke(256,161,10);
      strokeWeight(3);
      ellipse(bubbles[i].x,bubbles[i].y,bubbles[i].diameter,bubbles[i].diameter);
      

       }
       else{
        ellipse(bubbles[i].x,bubbles[i].y,10+crecimiento,10+crecimiento);
       }
           //recorre cada burbuja y llama a la función mouseOver para mostrar  la información
    bubbles[i].mouseOver(mouseX, mouseY);
    
  } 

}

class Bubble 
{
  
  constructor(x, y, diameter, name) 
  {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.name = name;
    this.on = true;

    this.over = false;
  }

  
  mouseOver(px, py) 
  {
  	//distancia que hay entre la posición del mouse y la burbuja
    let distancia = dist(px, py, this.x, this.y);

    //si la distancia entre el mouse y la burbuja es cercana
    if(distancia < 20)
    {
    	// entonces la variable over pongala en true
    	this.over = true;	
    }
    //si la distancia entre el mouse y la burbuja es lejana
    else
    {   
    	// entonces la variable over pongala en false
    	this.over = false;
    }
  }


  //muestra la burbuja
  dibujar() 
  {
    
    strokeWeight(0.8);
    noFill();
    //dibuja la burbuja segun los datos obtenidos del archivo en el setup
    ellipse(this.x, this.y, this.diameter, this.diameter);

    //si la variable over es igual a true, es decir, si esta cerca a la burbuja  
    if (this.over == true) 
    {
      fill(0);
      textAlign(CENTER);
      //coloca el texto del dato mas abajo de la burbuja
      text(this.name, this.x+50, this.y);
    }
  }
}
