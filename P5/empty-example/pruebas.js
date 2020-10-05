var mass = [];
var estadoDeX = [];
var estadoDeY = [];
var velcidadDelX = [];
var velocityY = [];
let mesDeCadaLocalidad = []; 
let tablaDeCadaLocalidad; 
let contadorParaVerCadaLocalidad = 0;
let contador1 = 1;
var fuente;
var enero;
var enero1;
var enero2;
var enero3;
var enero3;

/////////////////////////////////////////////////////////////////////////////////////////////////////
function preload() 
{
  //carga el archivo y tiene en cuenta el titulo de las columnas
  tablaDeCadaLocalidad = loadTable("assets/datosMes.csv", "header");
  fuente = loadFont('assets/TheFrontman.ttf');
  img = loadImage('assets/rock.png');
}
function setup() {
	rowCount = tablaDeCadaLocalidad.getRowCount();
	//creamos un objeto que guarda la información de las filas de la tabla
  const row = tablaDeCadaLocalidad.getRows();  
  textFont(fuente);

	createCanvas(1000, 700);
  noStroke();
  /*
  enero = createElement('h5', 'Suba =Rojo ');
  enero.position(1100,20);

  enero = createElement('h5', 'Teusaquillo =Rojo ');
  enero.position(1100,150);
	*/

	for (let i = 0; i < 12; i++) 
  {
    const Month = row[i].getString("Month");
    //guardamos la información de la fila "y" en una constante
    const SUBA = row[i].getNum("SUBA");
    const CHAPINERO = row[i].getNum("CHAPINERO");
    const TEUSAQUILLO = row[i].getNum("TEUSAQUILLO");
    const BARRIOSUNIDOS = row[i].getNum("BARRIOS UNIDOS");
    const USAQUEN = row[i].getNum("USAQUEN");
    const PUENTEARANDA = row[i].getNum("PUENTE ARANDA");
	const TUNJUELITO = row[i].getNum("TUNJUELITO");
	console.log(row[i].getNum("SUBA"));
    //const ENGATIVA = row[i].getNum("ENGATIVA");
    //console.log(""+row[i].getString("Month"));
    //Adiciono al arreglo un objeto de tipo Bubble, donde inicializo el objeto creando la Burbuja
    mesDeCadaLocalidad.push(new Meses(Month,SUBA,CHAPINERO,TEUSAQUILLO, BARRIOSUNIDOS,USAQUEN,PUENTEARANDA,TUNJUELITO));
    //se crean la cantidad de burbujas acorde a la cantidad de datos
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

function draw() {
  background(0);


  
  //textSize(5);
  //text('Haz click varias veces para ver mas circulos', (windowWidth/2)-200, windowHeight-50);
	if(contadorParaVerCadaLocalidad==0){
    fill(250);
    textSize(30);
    text('La Rockola', 400, windowHeight/10);

    
    textSize(15);
   text('Que localidades se residen la influencia en conciertos  ', 250, 300);

   fill("#BC3810");
   text(' Haz click para comenzar la interracion ', 300, 400);
  

   image(img,450,550,100,100); 

  }else{

    if(contadorParaVerCadaLocalidad<=4){
      textSize(20);
      fill("#BC3810");
       text(' Haz varias veces click para mover los circulos ', 250, 650);
  
    }
    fill("#BC3810");
    textSize(8);
    text('Tesuaquillo \n \n Suba \n \n Chapinero\n \n Puente Aranda\n \n Barrios Unidos\n \n Usaquen', 100, windowHeight/10);
    fill("#BC3810");
    rect (200,60,20,20);
    fill(250);
    rect (200,80,20,20);
    fill("#F7E50B");
    rect (200,100,20,20);
    fill("#48F80B");
    rect (200,120,20,20);
    fill("#CD0BF8");
    rect (200,140,20,20);
    fill("#463434");
    rect (200,160,20,20);


    fill(250);
    
    
    for (var particleA = 0; particleA < mass.length; particleA++) {
			var accelerationX = 0, accelerationY = 0;
			
			for (var particleB = 0; particleB < mass.length; particleB++) {
				if (particleA != particleB) {
					var distanceX = estadoDeX[particleB] - estadoDeX[particleA];
					var distanceY = estadoDeY[particleB] - estadoDeY[particleA];
	
					var distance = sqrt(distanceX * distanceX + distanceY * distanceY);
					if (distance < 1) distance = 1;
	
					var force = (distance - 20) * mass[particleB] / distance;
					accelerationX += force * distanceX;
					accelerationY += force * distanceY;
				}
			}
			
			velcidadDelX[particleA] = velcidadDelX[particleA] * 0.99 + accelerationX * mass[particleA];
			velocityY[particleA] = velocityY[particleA] * 0.99 + accelerationY * mass[particleA];
		}
		

		for (var particle = 0; particle < mass.length; particle++) {
			estadoDeX[particle] += velcidadDelX[particle];
			estadoDeY[particle] += velocityY[particle];

        for(let i = 0; i < mesDeCadaLocalidad.length; i++){
          numeroTotal=mesDeCadaLocalidad[i].SUBA;
          numeroTotal1=mesDeCadaLocalidad[i].TEUSAQUILLO;
          numeroTotal2=mesDeCadaLocalidad[i].USAQUEN;
          numeroTotal3=mesDeCadaLocalidad[i].CHAPINERO;
          numeroTotal4=mesDeCadaLocalidad[i].PUENTEARANDA;
          numeroTotal5=mesDeCadaLocalidad[i].BARRIOSUNIDOS;

       
          fill(250);
          ellipse(estadoDeX[particle]+50, estadoDeY[particle]+50, mass[particle] * mesDeCadaLocalidad[i].SUBA/20, mass[particle] * mesDeCadaLocalidad[i].SUBA/20);
          fill("#BC3810");
          ellipse(estadoDeX[particle]-50, estadoDeY[particle]+10, mass[particle] * mesDeCadaLocalidad[i].TEUSAQUILLO/80, mass[particle] * mesDeCadaLocalidad[i].TEUSAQUILLO/80);
          fill("#F7E50B");
          ellipse(estadoDeX[particle]+15, estadoDeY[particle]+200, mass[particle] * mesDeCadaLocalidad[i].CHAPINERO/10, mass[particle] * mesDeCadaLocalidad[i].CHAPINERO/10);
          fill("#48F80B");
          ellipse(estadoDeX[particle]+50, estadoDeY[particle]+150, mass[particle] * mesDeCadaLocalidad[i].PUENTEARANDA/20, mass[particle] * mesDeCadaLocalidad[i].PUENTEARANDA/20);
          fill("#CD0BF8");
          ellipse(estadoDeX[particle]-100, estadoDeY[particle]+200, mass[particle] * mesDeCadaLocalidad[i].BARRIOSUNIDOS/20, mass[particle] * mesDeCadaLocalidad[i].BARRIOSUNIDOS/20);
          fill("#463434");
          ellipse(estadoDeX[particle]-150, estadoDeY[particle]+100, mass[particle] * mesDeCadaLocalidad[i].USAQUEN/20, mass[particle] * mesDeCadaLocalidad[i].USAQUEN/20);
          contador1++;

          
         
      }
      //console.log(numeroTotal);



  /*
          fill("#BC3810");
          ellipse(estadoDeX[particle], estadoDeY[particle], mass[particle] * numeroTotal1/2, mass[particle] * numeroTotal1/2);
          fill(250);
          ellipse(estadoDeX[particle], estadoDeY[particle]+50, mass[particle] * numeroTotal/2, mass[particle] * numeroTotal/2);
          fill(250);
          ellipse(estadoDeX[particle], estadoDeY[particle]+50, mass[particle] * numeroTotal/2, mass[particle] * numeroTotal/2);
      */  
      }
      /*]
      if(contador<20){
        mass.push(random(0.003, 0.03));
      estadoDeX.push(mouseX);
      estadoDeY.push(mouseY);
      velcidadDelX.push(0);
      velocityY.push(0);
      contador++;

      }
      */

      
    
  }
	
			
		
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

function addNewParticle() {
  if(mouseX<=1000 && mouseY <=700){
  mass.push(random(0.003, 0.03));
  estadoDeX.push(mouseX);
	estadoDeY.push(mouseY);
	velcidadDelX.push(0);
  velocityY.push(0);
  contadorParaVerCadaLocalidad++;
  }
  
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

function mouseClicked() {
	addNewParticle();
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

function mouseDragged() {
	addNewParticle();
}

class Meses 
{
  //se determinan los variables del objeto
  constructor(Month,SUBA,CHAPINERO,TEUSAQUILLO, BARRIOSUNIDOS,USAQUEN,PUENTEARANDA,TUNJUELITO) 
  {
    this.Month = Month;
    this.SUBA = SUBA;
    this.CHAPINERO = CHAPINERO;
    this.TEUSAQUILLO = TEUSAQUILLO;
    this.BARRIOSUNIDOS = BARRIOSUNIDOS;
    this.USAQUEN = USAQUEN;
    this.PUENTEARANDA = PUENTEARANDA;
    this.TUNJUELITO = TUNJUELITO;

    this.Total=SUBA+CHAPINERO+TEUSAQUILLO+BARRIOSUNIDOS+USAQUEN+PUENTEARANDA+TUNJUELITO;
    this.over = false;
    /*
    const SUBA = row[i].getNum("SUBA");
    const CHAPINERO = row[i].getNum("CHAPINERO");
    const TEUSAQUILLO = row[i].getNum("TEUSAQUILLO");
    const BARRIOSUNIDOS = row[i].getNum("BARRIOS UNIDOS");
    const USAQUEN = row[i].getNum("USAQUEN");
    const PUENTEARANDA = row[i].getNum("PUENTE ARANDA");
    const TUNJUELITO = row[i].getNum("TUNJUELITO");
    const ENGATIVA = row[i].getNum("ENGATIVA");
    console.log(""+row[i].getNum("ENGATIVA"));
    */
  }
 
}