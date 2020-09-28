let videoVid;


let posx = 100;
let posy = 100;
let tamanoBoton = 100;

function setup() 
{
  createCanvas(710, 400);
  videoVid = createVideo(['assets/blancoNegro.mp4']);
  videoVid.hide(); // por defecto el video aparece en un elemento dom separado.
  // escóndelo y dibújalo en el lienzo en vez de eso.
}

function draw() {
  background(150);
  image(videoVid, 50, 50, 320,240); // dibuja el cuadro del video en el lienzo.
  
  fill(255,0,0);
  rect(posx,posy,tamanoBoton,tamanoBoton);
}
function mousePressed() 
{
	if(mouseX >= posx && mouseX <= posx+tamanoBoton)
	{
		if(mouseY >= posy && mouseY <= posy+tamanoBoton)
		{
			videoVid.loop(); // configurar el video para empezar a reproducirse en bucle
		} 		
	}
 
}
