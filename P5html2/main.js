let cnv;

//se crean  botones
let btn1;
var arreglo  = [];

var visualizarSketch = 0;


function setup() 
{
  cnv = createCanvas(640, 480);

  //se crean botones
  btn1 = createImg('assets/js/data/mod1.png','p1');
  
  //se determina la función de cada botón cuado se oprime
  btn1.mousePressed(btnPressed1);
  
  btn1.parent(P5ejemplo);
  
   cnv.parent(P5ejemplo);

   background(0);

  
}

function draw() 
{

	//no se usa mousePressed sino mouseIsPressed
  if (visualizarSketch == 1) 
  {
    background(0);

    //crea 6 particulas y las adiciona en el arreglo
    for (let i = 0; i < 5; i++) 
    {
      //crea una particula 
      let p = new boceto6();
      //adiciona la particula en el arreglo
      arreglo.push(p);
    }
    
    for (let i = arreglo.length - 1; i >= 0; i--) 
    {

      
      console.log(arreglo[i].vx);
      arreglo[i].update();
      arreglo[i].show();
      
      //Es true cuando el alpha es igual a 0
      if (arreglo[i].finished()==true) 
      {
        // remove this particle
        arreglo.splice(i, 1);
      }
    }
  }
  
   
 
}

//cuando se oprime el botón btn
function btnPressed1() 
{
  visualizarSketch = 1; 
}
