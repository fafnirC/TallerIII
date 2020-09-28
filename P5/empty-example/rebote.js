var sonido;// sonido entorno al juego
let rad = 15; // El ancho de la forma
let xpos, ypos; // Posición inicial de la forma

let xspeed; // La velocidad de la forma
let yspeed; // La velocidad de la forma

let xdirection = 1; // Izquierda o derecha
let ydirection = 1; // De arriba a abajo
let contador; // Contador del juego
let videoVid; // PrimerVideo
let velocidmetro;
let siono;



function preload() 
{
  soundFormats('ogg', 'mp3');
  sonido = loadSound('assets/jingle.mp3');
  

}

function setup() {
  createCanvas(800, 500);
  noStroke();
  videoVid = createVideo(['assets/doIT.mp4']);
  videoVid.hide();
  videoVid1 = createVideo(['assets/xD.mp4']);
  videoVid1.hide();
  frameRate(30);
  ellipseMode(RADIUS);
  // Establecer la posición de partida de la forma
  xpos = width / 2;
  ypos = height /2 ;
  xspeed = 20;
  yspeed =5;

  button1 = createButton('Rebote en la aire');
  button1.position((width/2)-80, height+30);
  
  button2 = createButton('Jugar de nuevo');


  sonido.setVolume(0.5);
  sonido.loop();
  contador=0;
  velocidmetro=0;

  textSize(30);
  siono=1;
  

}

function draw() {
  
  background(150);
  button2.mousePressed(jugar);
  button1.mousePressed(rebotes);
  // Actualizar la posición de la forma


  if(ypos > (height - rad)-50){

  
    button1.mousePressed(ponLaMusica);
    sonido.stop();
    contador=0;
    xspeed = 20;
    yspeed =5;
    videoVid.stop();
  
  } else{
    
    rebote();
  }
    
    if (xpos > (width - rad) || xpos < rad) {
        xdirection *= -1;
        contador++;
        xspeed++;
        yspeed++;
        

      }
    
      if(ypos < (rad+50)){
        ydirection *= -1;
        contador++;
        xspeed++;
        yspeed++;
        
      }
    

  // Prueba para ver si la forma excede los límites de la pantalla
   
 if(contador < 30){
  siono=0;
  fill(0);
  ellipse(xpos, ypos, rad, rad);

  fill(255,0,0);
  
  rect (0,height-50, width, height);
  text('Contador: '+contador, 300, 80);
  fill(0);
  rect (0,0, width,50);

  fill(250);
  text('No caigas a la lava', height/2, 490);
  //rect ((width/2),100,50,50);
  

  fill(250);
  text('Objetivo: Conseguir 30 rebotes contra la pared', 0, 40);
  if(contador >=5){
   videoVid.size(12);
   image(videoVid, 100,100,100,100);
    videoVid.play(); 
  }
  if(contador >=10){
    videoVid.size(12);
    image(videoVid, 500,200,100,100);
     videoVid.play(); 
   }
   if(contador >=15){
    videoVid.size(12);
    image(videoVid, 200,300,100,100);
     videoVid.play(); 
   }
   if(contador >=20){
    videoVid.size(12);
    image(videoVid,650,300,100,100);
     videoVid.play(); 
   }
 } else{
  videoVid.stop();
  sonido.stop();
  xspeed=0;
  yspeed=0;
  text('Que pro',  300, 80);
  image(videoVid1, 275,150,200,200);
  videoVid1.loop();
  
 }
}
function ponLaMusica(){
    rebote();
    ypos = ypos-20;
    ydirection *= -1;
    sonido.loop();
    
}
function ponLaMusica2(){
    rebote();
    ypos = ypos+20;
    ydirection *= -1;
    sonido.loop();
    
}
function rebote(){
    xpos = xpos + xspeed * (xdirection);
    ypos = ypos + yspeed * (ydirection);
         
}

function rebotes(){
    rebote();
    ypos = ypos-20;
    ydirection *= -1;
         
}

function jugar(){

  if(siono==0){
    sonido.loop();
  }
  contador=0;
  xpos = width / 2;
  ypos = height /2 ;
  xspeed = 20;
  yspeed =5;
  videoVid1.stop();

   
}