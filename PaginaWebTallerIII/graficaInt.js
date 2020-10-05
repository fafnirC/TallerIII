let table1; 

var vel = 0;

var vel2 = 0;

var vel3 = 0;

var vel4 = 0;

let cnv1;

let checkboxx;

let mostrarSexos = false;

let checkboxx2;

let mostrarEdades = false;

let checkboxx3;

let mostrarOcupacion = false;

let checkboxx4;

let mostrarEstudios = false;


//se crea un arreglo
let barras = []; 

let linea1;
let linea2;

//numero de filas en el archivo
let rowCount1;

// Put any asynchronous data loading in preload to complete before "setup" is run
function preload() 
{
  //carga el archivo y tiene en cuenta el titulo de las columnas
  table1 = loadTable("assets/data_1.csv", "header");
}

function setup() 
{
  cnv1 = createCanvas(1440, 760);

  cnv1.parent(P5Int);
  //cuando se selecciona una opción llama a la funcion changeFill
  
  
  //numero de filas en el archivo
  rowCount1 = table1.getRowCount();

  //creamos un objeto que guarda la información de las filas de la tabla
  const row = table1.getRows();  

  for (let i = 0; i < rowCount1; i++) 
  {
    //guardamos la información de la fila "x" en una constante
    const x = row[i].getNum("x");

    //guardamos la información de la fila "y" en una constante
    const y = row[i].getNum("y");

    //guardamos la información de la fila "diameter" en una constante
    const width = row[i].getNum("width");


    const height = row[i].getNum("height");

 
    const name = row[i].getString("name");

    //Adiciono al arreglo un objeto de tipo Bubble, donde inicializo el objeto creando la Burbuja
    barras.push(new Barra(x, y, width, height, name));
    //se crean la cantidad de burbujas acorde a la cantidad de datos
  }

  checkboxx = createCheckbox('Sexo'); 
  checkboxx.parent(P5Int);
  checkboxx.changed(MostrarS);

  checkboxx2 = createCheckbox('Edades'); 
  checkboxx2.parent(P5Int);
  checkboxx2.changed(MostrarE);

  checkboxx3 = createCheckbox('Ocupación'); 
  checkboxx3.parent(P5Int);
  checkboxx3.changed(MostrarO);

  checkboxx4 = createCheckbox('Educación'); 
  checkboxx4.parent(P5Int);
  checkboxx4.changed(MostrarEs);



}

 function MostrarS() 
{
  //si el boton esta activo
  if (checkboxx.checked()) 
  {
    //coloque la variable mostrarCirculo en true
    mostrarSexos = true;
  } 
  //si el boton esta desactivado 
  else 
  {
    //coloque la variable mostrarCirculo en false
    mostrarSexos = false;
  }
}

 function MostrarE() 
{
  //si el boton esta activo
  if (checkboxx2.checked()) 
  {
    //coloque la variable mostrarCirculo en true
    mostrarEdades = true;
  } 
  //si el boton esta desactivado 
  else 
  {
    //coloque la variable mostrarCirculo en false
    mostrarEdades = false;
  }
}

 function MostrarO() 
{
  //si el boton esta activo
  if (checkboxx3.checked()) 
  {
    //coloque la variable mostrarCirculo en true
    mostrarOcupacion = true;
  } 
  //si el boton esta desactivado 
  else 
  {
    //coloque la variable mostrarCirculo en false
    mostrarOcupacion = false;
  }
}

function MostrarEs() 
{
  //si el boton esta activo
  if (checkboxx4.checked()) 
  {
    //coloque la variable mostrarCirculo en true
    mostrarEstudios = true;
  } 
  //si el boton esta desactivado 
  else 
  {
    //coloque la variable mostrarCirculo en false
    mostrarEstudios = false;
  }
}



  function draw() 
{
  cnv1.background('#FFA10A');

  noStroke();
  textSize(22);
  text("Gráfica Perfil del Usuario",500,35);
	
	textSize(12);	
  text("5%",150,655);
  	
  textSize(20);
  text("10%",120,605);

  textSize(12);	
  text("15%",150,555);

  textSize(20);
  text("20%",120,505);

  textSize(12);	
  text("25%",150,455);

  textSize(20);
  text("30%",120,405);

  textSize(12);	
  text("35%",150,355);

  textSize(20);
  text("40%",120,305);

  textSize(12);	
  text("45%",150,255);

  textSize(20);
  text("50%",120,205);

  textSize(12);	
  text("55%",150,155);

  textSize(20);
  text("60%",120,105);

  textSize(20);
  text("Porcentaje",150,65);


 for (let i = 1; i <= 6; i++) 
  {
 	stroke(3);
  strokeWeight(2);
 	 line(190,100*i,200,100*i);
 	
}

for (let i = 3; i <= 13; i++) 
  {
  stroke(3);
 	strokeWeight(2);
 	line(190,50*i,200,50*i);
 	
}

  stroke(3);
  strokeWeight(5);

  linea1 = line(200,100,200,700);
  linea2 = line(200,700,1100,700);


 
  if(mostrarSexos == true)
  {
    vel = vel+1;
    fill(255,0,0);
    strokeWeight(0.8);

  for (let i = 0; i <= 2; i++) 
  {      

      if(vel >= barras[i].height){
        rect(barras[i].x, barras[i].y, barras[i].witdh, barras[i].height);
      }
      else{
        rect(barras[i].x, barras[i].y, barras[i].witdh, vel);
      }

  }


    /*barras[0].dibujar();
    barras[1].dibujar();
    barras[2].dibujar();*/

    fill(0);
    noStroke();
    textSize(10);
    text("Hombre",245,730);
    text("Mujer",320,730);
    text("Intersexuales",375,730);
  }

  if(mostrarEdades == true)
  {

    vel2 = vel2+1;
  	fill(255);
    strokeWeight(0.8);

    for (let i = 3; i <= 5  ; i++) 
  {      

      if(vel2 >= barras[i].height){
        rect(barras[i].x, barras[i].y, barras[i].witdh, barras[i].height);
      }
      else{
        rect(barras[i].x, barras[i].y, barras[i].witdh, vel2);
      }

  }




    /*barras[3].dibujar();
    barras[4].dibujar();
    barras[5].dibujar();*/

     fill(0);
    textSize(10);
    noStroke();
    text("20 a 30",920,730);
    text("30 a 40",980,730);
    text("40 a 60",1030,730);


  }


  if(mostrarOcupacion == true)
  {

    vel3 = vel3+1;
  	fill('#BC3810');    
  	strokeWeight(0.8);


    for (let i = 6; i <= 8  ; i++) 
  {      

      if(vel3 >= barras[i].height){
        rect(barras[i].x, barras[i].y, barras[i].witdh, barras[i].height);
      }
      else{
        rect(barras[i].x, barras[i].y, barras[i].witdh, vel3);
      }

  }

  /*
    barras[6].dibujar();
    barras[7].dibujar();
    barras[8].dibujar();*/

    fill(0);
    noStroke();
    textSize(10);
    text("Tiempo Completo",650,750);
    text("Freelancers",570,730);
    text("Estudiantes",470,730);
  }

  if(mostrarEstudios == true)
  {

   vel4 = vel4+1; 
    fill('#4D2319');
    strokeWeight(0.8);


     for (let i = 9; i <= 11  ; i++) 
  {      

      if(vel4 >= barras[i].height){
        rect(barras[i].x, barras[i].y, barras[i].witdh, barras[i].height);
      }
      else{
        rect(barras[i].x, barras[i].y, barras[i].witdh, vel4);
      }

  }

  /*
    barras[9].dibujar();
    barras[10].dibujar();
    barras[11].dibujar();*/

    fill(0);
    noStroke();
    textSize(10);
    text("Universitaria",720,730);
    text("Técnica",800,730);
    text("Secundaria",850,730);
  }


}

class Barra 
{
  //se determinan los variables del objeto
  constructor(x, y, witdh, height, name) 
  {
    this.x = x;
    this.y = y;
    this.witdh = witdh;
    this.height = height;
    this.name = name;

  }

/*dibujar() 
  {
    stroke(0);
    //dibuja la burbuja segun los datos obtenidos del archivo en el setup
    rect(this.x, this.y, this.witdh, this.height);
    console.log(this.name);

    //si la variable over es igual a true, es decir, si esta cerca a la burbuja  
    
    }*/





}
