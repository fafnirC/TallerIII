var x = 1050;
var y = 200;
var sz = 160;

var x1 = 100;
var y1 = 350;
var sz1 = 140;

var x2 = 100;
var y2 = 200;
var sz2 = 120;

var x3 = 1050;
var y3 = 350;
var sz3 = 100;

var sonido;
var sonido1;
var sonido2;
var sonido3;
var button1;
var button2;
var button3;
var button4;
var playing = false;
let rowCount;
let table;
let img;
let cnv3;

function preload() 
{
  
  table = loadTable("assets/genero.csv", "header");
  img = loadImage('assets/genero2.png');
  /*sonido = loadSound('assets/rock.mp3');
  sonido1 = loadSound('assets/regueton.mp3');
  sonido2 = loadSound('assets/salsa.mp3');
  sonido3 = loadSound('assets/Popular.mp3');*/


  }

function setup(){

cnv3 = createCanvas(1440,700);
cnv3.parent(P5Gen2);



  /*button1 = createButton('Mas escuchado');
  button1.mousePressed(toggleVid2); 
  button1.position(300,640);
  button1.size(130,50);
  button1.parent(P5Gen2);

  button2 = createButton('Segundo mas escuchado');
  button2.mousePressed(toggleVid3); 
  button2.position(450,640);
  button2.size(100,50); 
  button2.parent(P5Gen2);

  button3 = createButton('Tercero mas escuchado');
  button3.mousePressed(toggleVid4); 
  button3.position(410,640);
  button3.size(100,50); 

  button4 = createButton('Cuarto mas escuchado');
  button4.mousePressed(toggleVid5); 
  button4.position(510,640);
  button4.size(100,50); */


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

function draw (){

cnv3.background (0);



rectMode(RADIUS);
fill(255,161,10);
rect(600,230,300,500);


if(dist(x,y, mouseX,mouseY)<sz1/2){
cursor(HAND);
fill(0,0,255);

if(mouseIsPressed){
x = mouseX;
y = mouseY;

strokeWeight(5);
}else{
strokeWeight(2);
}
fill(77,35,25);
stroke(0);

}else{
cursor(ARROW);
noStroke();
fill(255);
}
ellipse(x,y,sz,sz);
    
    if(x<850 && x>700 && y<300 && y>200){ 
    
    x = 1050;
    y = 200;
    sz = 160;
	}
	
	if(x<580 && x>400 && y<300 && y>200){

	x = 1050;
    y = 200;
    sz = 160;
	}

	if(x<580 && x>400 && y<650 && y>540){

	  x = 1050;
    y = 200;
    sz = 160;
	}
	


if(dist(x1,y1, mouseX,mouseY)<sz1/2){
cursor(HAND);
fill(0,0,255);

if(mouseIsPressed){
x1 = mouseX;
y1 = mouseY;

strokeWeight(5);
}else{
strokeWeight(2);
}
fill(77,35,25);
stroke(0);

}else{
cursor(ARROW);
noStroke();
fill(255);
}

ellipse(x1,y1,sz1,sz1);

if(x1<680 && x1>600 && y1<300 && y1>200){ 
    
    x1 = 100;
    y1 = 500;
    sz1 = 140;
	}
	
	if(x1<880 && x1>700 && y1<300 && y1>200){

	  x1 = 100;
    y1 = 500;
    sz1 = 140;
	}

	if(x1<850 && x1>700 && y1<650 && y1>540){

	x1 = 100;
    y1 = 500;
    sz1 = 140;
	}


if(dist(x2,y2, mouseX,mouseY)<sz2/2){
cursor(HAND);
fill(0,255,0);

if(mouseIsPressed){
x2 = mouseX;
y2 = mouseY;

strokeWeight(5);
}else{
strokeWeight(2);
}
fill(188,56,16);
stroke(0);

}else{
cursor(ARROW);
noStroke();
fill(255);
}
ellipse(x2,y2,sz2,sz2);

if(x2<580 && x2>400 && y2<650 && y2>540){ 
    
    x2 = 100;
    y2 = 200;
    sz2 = 120;
	}
	
	if(x2<880 && x2>700 && y2<300 && y2>200){

	  x2 = 100;
    y2 = 200;
    sz2 = 120;
	}

	if(x2<850 && x2>700 && y2<650 && y2>540){

	  x2 = 100;
    y2 = 200;
    sz2 = 120;
	}
if(dist(x3,y3, mouseX,mouseY)<sz3/2){
cursor(HAND);
fill(0,255,0);

if(mouseIsPressed){
x3 = mouseX;
y3 = mouseY;

strokeWeight(5);
}else{
strokeWeight(2);
}
fill(188,56,16);
stroke(0);

}else{
cursor(ARROW);
noStroke();
fill(255);
}
ellipse(x3,y3,sz3,sz3);

if(x3<580 && x3>400 && y3<650 && y3>540){ 
    
    x3 = 1050;
    y3 = 400;
    sz3 = 100;
	}
	
	if(x3<580 && x3>400 && y3<300 && y3>200){

	x3 = 1050;
    y3 = 400;
    sz3 = 100;
	}

	if(x3<850 && x3>700 && y3<650 && y3>540){

	  x3 = 1050;
    y3 = 400;
    sz3 = 100;
	}



fill(255,250,255);
  //stroke(188,56,16);
  textSize(30);
  text("32%",750,450);
  text("26%",380,450);
  text("19%",380,210);
  text("23%",750,210);


 
  //stroke(188,56,16);
  textSize(20);
  fill(188,56,16);
  text("Rock",750,560);
  text("Regueton",380,560);

  fill(77,35,25);
  text("Salsa",750,300);
  text("Popular",380,300);

  image(img, 415, 10,370,70);

  fill(255,250,255);
  text("Mueva los circulos al lugar correspondiente",410,100);
  
  
}
