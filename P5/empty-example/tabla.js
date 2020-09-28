
//crea una tabla que guarda los datos del archivo .csv
let table; 
//se crea un arreglo
let mes = []; 
//numero de filas en el archivo
let rowCount;
let cnv;
let sel;
let sel1;
let opcion1;
let contador;
let opcion;
var numeroTotal =0;
let totalDePersonas;
let enero;
let febrero;
let marzo;
let abril;
let mayo;
let junio;
let julio;
let agosto;
let septiembre;
let octubre;
let noviembre;
let diciembre;
let titulo;
var velocidad=0;
var velocidadmenos=800;
var velocidad1=1;
var velocidadmenos1=800;
var velocidad2=1;
var velocidadmenos2=800;
var velocidad3=1;
var velocidadmenos3=800;
var velocidad4=1;
var velocidadmenos4=800;
var velocidad5=1;
var velocidadmenos5=800;
function preload() 
{
  //carga el archivo y tiene en cuenta el titulo de las columnas
  table = loadTable("assets/datosMes.csv", "header");
}

function setup() 
{
    sel = createSelect();
    sel.position(30, 140);
    sel.option('SUBA');
    sel.option('CHAPINERO');
    sel.option('TEUSAQUILLO');
    sel.option('BARRIOS UNIDOS');
    sel.option('USAQUEN');
    sel.option('TUNJUELITO');

    sel.changed(mySelectEvent);
    opcion="SUBA";

    sel1 = createSelect();
    sel1.position(1180, 140);
    sel1.option('SUBA');
    sel1.option('CHAPINERO');
    sel1.option('TEUSAQUILLO');
    sel1.option('BARRIOS UNIDOS');
    sel1.option('USAQUEN');
    sel1.option('TUNJUELITO');


    sel1.changed(mySelectEvent1);
    opcion1="SUBA";

    enero = createElement('h5', 'Enero');
    enero.position(230,620);
    
    febrero = createElement('h5', 'Febrero');
    febrero.position(230,570);

    marzo = createElement('h5', 'Marzo');
    marzo.position(230,520);

    abril = createElement('h5', 'Abril');
    abril.position(230,470);

    mayo = createElement('h5', 'Mayo');
    mayo.position(230,420);

    junio = createElement('h5', 'Junio');
    junio.position(230,370);

    julio = createElement('h5', 'Julio');
    julio.position(230,320);

    agosto = createElement('h5', 'Agosto');
    agosto.position(230,270);

    septiembre = createElement('h5', 'Septiembre');
    septiembre.position(230,220);

    octubre = createElement('h5', 'Octubre');
    octubre.position(230,170);

    noviembre = createElement('h5', 'Noviembre');
    noviembre.position(230,120);


    diciembre = createElement('h5', 'Diciembre');
    diciembre.position(230,70);

    titulo= createElement('h2', 'Gráfica - Número de espectadores por localidad');
    titulo.position(400,0);

    titulo= createElement('h6', 'Datos conseguidos de https://www.datos.gov.co/Seguridad-y-Defensa/SUGA/jae9-j5e6');
    titulo.position(500,680);



    
    
  cnv=createCanvas(800, 640);
  cnv.position(300, 60);
  contador=0;
  //numero de filas en el archivo
  rowCount = table.getRowCount();

  //creamos un objeto que guarda la información de las filas de la tabla
  const row = table.getRows();  

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
    //const ENGATIVA = row[i].getNum("ENGATIVA");
    //console.log(""+row[i].getString("Month"));
    //Adiciono al arreglo un objeto de tipo Bubble, donde inicializo el objeto creando la Burbuja
    mes.push(new Mes(Month,SUBA,CHAPINERO,TEUSAQUILLO, BARRIOSUNIDOS,USAQUEN,PUENTEARANDA,TUNJUELITO));
    //se crean la cantidad de burbujas acorde a la cantidad de datos
  }
//Month,SUBA,CHAPINERO,TEUSAQUILLO,BARRIOSUNIDOS,USAQUEN,PUENTEARANDA,SANTA FE,TUNJUELITO,LACANDELARIA,ENGATIVA
}


function draw() 
{
    background('#040F0F');

    if(opcion == "SUBA" || opcion1 == "SUBA" ){
        velocidad=velocidad+3;
        velocidadmenos=velocidadmenos-3;
        for(let i = 0; i < mes.length; i++){
            numeroTotal=mes[i].SUBA;
        }
    
        for(let i = 0; i < mes.length; i++){
            
            if(numeroTotal< mes[i].SUBA){
                numeroTotal=mes[i].SUBA;
            }
            console.log(numeroTotal);
            
            if(opcion1 == "SUBA"){
               
                fill("#FFA10A");
                if(velocidadmenos <= (50*(i+1)+70)){
                    ellipse((50*(i+1))+70, 590-(50*i),((mes[i].SUBA/numeroTotal)*50), ((mes[i].SUBA/numeroTotal)*50));
                } else{
                    ellipse(velocidadmenos, 590-(50*i),((mes[i].SUBA/numeroTotal)*50), ((mes[i].SUBA/numeroTotal)*50));
                }
                //
                //si la distancia entre el mouse y la burbuja es cercana
            }
            if(opcion == "SUBA"){
                
                fill("#BC3810");
                if(velocidad >= (50*(i+1))){
                    ellipse((50*(i+1)), 590-(50*i),((mes[i].SUBA/numeroTotal)*50), ((mes[i].SUBA/numeroTotal)*50));
                } else{
                    ellipse(0+velocidad, 590-(50*i),((mes[i].SUBA/numeroTotal)*50), ((mes[i].SUBA/numeroTotal)*50));
                }
               
    
                //ellipse((50*(i+1)), 590-(50*i),((mes[i].SUBA/numeroTotal)*50), ((mes[i].SUBA/numeroTotal)*50));
    
                let distancia = dist(mouseX, mouseY, (50*(i+1)), (590-(50*i))); 
    
              //si la distancia entre el mouse y la burbuja es cercana
                   if(distancia < 20)
                  {
                    // entonces la variable over pongala en true
                    mes[i].over = true;	
                }
                   //si la distancia entre el mouse y la burbuja es lejana
                else
                   {   
                // entonces la variable over pongala en false
                 mes[i].over = false;
                   }
                if (mes[i].over == true) 
                  {
                    fill('#FFFAFF');
                    textAlign(CENTER);
                    //coloca el texto del dato mas abajo de la burbuja
                    text(mes[i].Month+" Numero de personas "+mes[i].SUBA, (50*(i+1)+50), 590-(50*i));
                    pop();
                } 
                } 

            //50 =100 % 
        }
        numeroTotal=0;
    } else{
        velocidad=0;
        velocidadmenos=800;

    }


    if(opcion == "CHAPINERO" || opcion1 == "CHAPINERO"){
        velocidad1=velocidad1+3;
        velocidadmenos1=velocidadmenos1-3;
        for(let i = 0; i < mes.length; i++){
            numeroTotal=mes[i].CHAPINERO;
        }
    
        for(let i = 0; i < mes.length; i++){
            if(numeroTotal< mes[i].CHAPINERO){
                numeroTotal=mes[i].CHAPINERO;
            }
            console.log(numeroTotal);
            if(opcion1 == "CHAPINERO"){
                fill("#FFA10A");
                if(velocidadmenos1 <= (50*(i+1)+70)){
                    ellipse((50*(i+1))+70, 590-(50*i),((mes[i].CHAPINERO/numeroTotal)*50), ((mes[i].CHAPINERO/numeroTotal)*50));
                } else{
                    ellipse(velocidadmenos1, 590-(50*i),((mes[i].CHAPINERO/numeroTotal)*50), ((mes[i].CHAPINERO/numeroTotal)*50));
                }
                //
                //si la distancia entre el mouse y la burbuja es cercana
            }
                    if(opcion == "CHAPINERO"){
                        fill("#BC3810");
                   if(velocidad1 >= (50*(i+1))){
                    ellipse((50*(i+1)), 590-(50*i),((mes[i].CHAPINERO/numeroTotal)*50), ((mes[i].CHAPINERO/numeroTotal)*50));
                } else{
                    ellipse(0+velocidad1, 590-(50*i),((mes[i].CHAPINERO/numeroTotal)*50), ((mes[i].CHAPINERO/numeroTotal)*50));
                }
               
                        let distancia = dist(mouseX, mouseY, (50*(i+1)), (590-(50*i))); 
        
                        //si la distancia entre el mouse y la burbuja es cercana
                             if(distancia < 20)
                            {
                              // entonces la variable over pongala en true
                              mes[i].over = true;	
                          }
                             //si la distancia entre el mouse y la burbuja es lejana
                          else
                             {   
                          // entonces la variable over pongala en false
                           mes[i].over = false;
                             }
                          if (mes[i].over == true) 
                            {
                              fill('#FFFAFF');
                              textAlign(CENTER);
                              //coloca el texto del dato mas abajo de la burbuja
                              text(mes[i].Month+" Numero de personas "+mes[i].CHAPINERO, (50*(i+1)+50), 590-(50*i));
                              pop();
                          } 
                        } 
            //50 =100 % 
        
        }
        numeroTotal=0;

    } else{
        velocidad1=0;
        velocidadmenos1=800;
    }
    if(opcion == "TEUSAQUILLO"|| opcion1 == "TEUSAQUILLO"){
        velocidad2=velocidad2+3;
        velocidadmenos2=velocidadmenos2-3;
        for(let i = 0; i < mes.length; i++){
            numeroTotal=mes[i].TEUSAQUILLO;
        }
    
        for(let i = 0; i < mes.length; i++){
            if(numeroTotal< mes[i].TEUSAQUILLO){
                numeroTotal=mes[i].TEUSAQUILLO;
            }
            console.log(numeroTotal);
            
            if(opcion1 == "TEUSAQUILLO"){
                fill("#FFA10A");
                if(velocidadmenos2 <= (50*(i+1)+70)){
                    ellipse((50*(i+1))+70, 590-(50*i),((mes[i].TEUSAQUILLO/numeroTotal)*50), ((mes[i].TEUSAQUILLO/numeroTotal)*50));
                } else{
                    ellipse(velocidadmenos2, 590-(50*i),((mes[i].TEUSAQUILLO/numeroTotal)*50), ((mes[i].TEUSAQUILLO/numeroTotal)*50));
                }
                //
                //si la distancia entre el mouse y la burbuja es cercana
            }
            if(opcion == "TEUSAQUILLO"){
                fill("#BC3810");
           if(velocidad2 >= (50*(i+1))){
            ellipse((50*(i+1)), 590-(50*i),((mes[i].TEUSAQUILLO/numeroTotal)*50), ((mes[i].TEUSAQUILLO/numeroTotal)*50));
        } else{
            ellipse(0+velocidad2, 590-(50*i),((mes[i].TEUSAQUILLO/numeroTotal)*50), ((mes[i].TEUSAQUILLO/numeroTotal)*50));
        }
       
                let distancia = dist(mouseX, mouseY, (50*(i+1)), (590-(50*i))); 

                //si la distancia entre el mouse y la burbuja es cercana
                     if(distancia < 20)
                    {
                      // entonces la variable over pongala en true
                      mes[i].over = true;	
                  }
                     //si la distancia entre el mouse y la burbuja es lejana
                  else
                     {   
                  // entonces la variable over pongala en false
                   mes[i].over = false;
                     }
                  if (mes[i].over == true) 
                    {
                      fill('#FFFAFF');
                      textAlign(CENTER);
                      //coloca el texto del dato mas abajo de la burbuja
                      text(mes[i].Month+" Numero de personas "+mes[i].TEUSAQUILLO, (50*(i+1)+50), 590-(50*i));
                      pop();
                  } 
                } 
            //50 =100 % 
            
        }
        numeroTotal=0;

    } else{
        velocidad2=0;
        velocidadmenos2=800;
    }
    if(opcion == "BARRIOS UNIDOS" || opcion1 == "BARRIOS UNIDOS"){
        velocidad3=velocidad3+3;
        velocidadmenos3=velocidadmenos3-3;
        for(let i = 0; i < mes.length; i++){
            numeroTotal=mes[i].BARRIOSUNIDOS;
        }
    
        for(let i = 0; i < mes.length; i++){
            if(numeroTotal< mes[i].BARRIOSUNIDOS){
                numeroTotal=mes[i].BARRIOSUNIDOS;
            }
            console.log(numeroTotal);
            
            if(opcion1 == "BARRIOS UNIDOS"){
                fill("#FFA10A");
                if(velocidadmenos3 <= (50*(i+1)+70)){
                    ellipse((50*(i+1))+70, 590-(50*i),((mes[i].BARRIOSUNIDOS/numeroTotal)*50), ((mes[i].BARRIOSUNIDOS/numeroTotal)*50));
                } else{
                    ellipse(velocidadmenos3, 590-(50*i),((mes[i].BARRIOSUNIDOS/numeroTotal)*50), ((mes[i].BARRIOSUNIDOS/numeroTotal)*50));
                }
                //
                //si la distancia entre el mouse y la burbuja es cercana
            }

            if(opcion == "BARRIOS UNIDOS"){
                fill("#BC3810");
           if(velocidad3 >= (50*(i+1))){
            ellipse((50*(i+1)), 590-(50*i),((mes[i].BARRIOSUNIDOS/numeroTotal)*50), ((mes[i].BARRIOSUNIDOS/numeroTotal)*50));
        } else{
            ellipse(0+velocidad3, 590-(50*i),((mes[i].BARRIOSUNIDOS/numeroTotal)*50), ((mes[i].BARRIOSUNIDOS/numeroTotal)*50));
        }
       
                let distancia = dist(mouseX, mouseY, (50*(i+1)), (590-(50*i))); 

                //si la distancia entre el mouse y la burbuja es cercana
                     if(distancia < 20)
                    {
                      // entonces la variable over pongala en true
                      mes[i].over = true;	
                  }
                     //si la distancia entre el mouse y la burbuja es lejana
                  else
                     {   
                  // entonces la variable over pongala en false
                   mes[i].over = false;
                     }
                  if (mes[i].over == true) 
                    {
                      fill('#FFFAFF');
                      textAlign(CENTER);
                      //coloca el texto del dato mas abajo de la burbuja
                      text(mes[i].Month+" Numero de personas "+mes[i].BARRIOSUNIDOS, (50*(i+1)+50), 590-(50*i));
                      pop();
                  } 
                } 
            //50 =100 % 
            
        }
        numeroTotal=0;

    } else{
        velocidad3=0;
        velocidadmenos3=800;
    }
    if(opcion == "USAQUEN" || opcion1 == "USAQUEN"){
        velocidad4=velocidad4+3;
        velocidadmenos4=velocidadmenos4-3;
        for(let i = 0; i < mes.length; i++){
            numeroTotal=mes[i].USAQUEN;
        }
    
        for(let i = 0; i < mes.length; i++){
            if(numeroTotal< mes[i].USAQUEN){
                numeroTotal=mes[i].USAQUEN;
            }
            console.log(numeroTotal);
            
            if(opcion1 == "USAQUEN"){
                fill("#FFA10A");
                if(velocidadmenos4 <= (50*(i+1)+70)){
                    ellipse((50*(i+1))+70, 590-(50*i),((mes[i].USAQUEN/numeroTotal)*50), ((mes[i].USAQUEN/numeroTotal)*50));
                } else{
                    ellipse(velocidadmenos4, 590-(50*i),((mes[i].USAQUEN/numeroTotal)*50), ((mes[i].USAQUEN/numeroTotal)*50));
                }
                //
                //si la distancia entre el mouse y la burbuja es cercana
            }

            if(opcion == "USAQUEN"){
                fill("#BC3810");
           if(velocidad4 >= (50*(i+1))){
            ellipse((50*(i+1)), 590-(50*i),((mes[i].USAQUEN/numeroTotal)*50), ((mes[i].USAQUEN/numeroTotal)*50));
        } else{
            ellipse(0+velocidad4, 590-(50*i),((mes[i].USAQUEN/numeroTotal)*50), ((mes[i].USAQUEN/numeroTotal)*50));
        }
       
                let distancia = dist(mouseX, mouseY, (50*(i+1)), (590-(50*i))); 

                //si la distancia entre el mouse y la burbuja es cercana
                     if(distancia < 20)
                    {
                      // entonces la variable over pongala en true
                      mes[i].over = true;	
                  }
                     //si la distancia entre el mouse y la burbuja es lejana
                  else
                     {   
                  // entonces la variable over pongala en false
                   mes[i].over = false;
                     }
                  if (mes[i].over == true) 
                    {
                      fill('#FFFAFF');
                      textAlign(CENTER);
                      //coloca el texto del dato mas abajo de la burbuja
                      text(mes[i].Month+" Numero de personas "+mes[i].USAQUEN, (50*(i+1)+50), 590-(50*i));
                      pop();
                  } 
                }
            //50 =100 % 
            
        }
        numeroTotal=0;


    } else{
        velocidad4=0;
        velocidadmenos4=800;
    }
    /*
    if(opcion == "PUENTE ARANDA" || opcion1 == "PUENTE ARANDA" ){
        velocidad5=velocidad5+3;
        velocidadmenos5=velocidadmenos5-3;
        for(let i = 0; i < mes.length; i++){
            numeroTotal=mes[i].PUENTEARANDA;
        }
    
        for(let i = 0; i < mes.length; i++){
            if(numeroTotal< mes[i].PUENTEARANDA){
                numeroTotal=mes[i].PUENTEARANDA;
            }
            console.log(numeroTotal);
            
            if(opcion1 == "PUENTE ARANDA"){
                fill("#FFA10A");
                if(velocidadmenos5 <= (50*(i+1)+70)){
                    ellipse((50*(i+1))+70, 590-(50*i),((mes[i].PUENTEARANDA/numeroTotal)*50), ((mes[i].PUENTEARANDA/numeroTotal)*50));
                } else{
                    ellipse(velocidadmenos5, 590-(50*i),((mes[i].PUENTEARANDA/numeroTotal)*50), ((mes[i].PUENTEARANDA/numeroTotal)*50));
                }
                //
                //si la distancia entre el mouse y la burbuja es cercana
            }
            if(opcion == "PUENTE ARANDA"){
                fill("#BC3810");
           if(velocidad5 >= (50*(i+1))){
            ellipse((50*(i+1)), 590-(50*i),((mes[i].PUENTEARANDA/numeroTotal)*50), ((mes[i].PUENTEARANDA/numeroTotal)*50));
        } else{
            ellipse(0+velocidad5, 590-(50*i),((mes[i].PUENTEARANDA/numeroTotal)*50), ((mes[i].PUENTEARANDA/numeroTotal)*50));
        }
       
                let distancia = dist(mouseX, mouseY, (50*(i+1)), (590-(50*i))); 

                //si la distancia entre el mouse y la burbuja es cercana
                     if(distancia < 20)
                    {
                      // entonces la variable over pongala en true
                      mes[i].over = true;	
                  }
                     //si la distancia entre el mouse y la burbuja es lejana
                  else
                     {   
                  // entonces la variable over pongala en false
                   mes[i].over = false;
                     }
                  if (mes[i].over == true) 
                    {
                      fill('#FFFAFF');
                      textAlign(CENTER);
                      //coloca el texto del dato mas abajo de la burbuja
                      text(mes[i].Month+" Numero de personas "+mes[i].USAQUEN, (50*(i+1)+50), 590-(50*i));
                      pop();
                  } 
                }
            //50 =100 % 
            
        }
        numeroTotal=0;

    } else{
        velocidad5=0;
        velocidadmenos5=800;
    }
    */
    if(opcion == "TUNJUELITO" || opcion1 == "TUNJUELITO" ){
        velocidad6=velocidad6+3;
        velocidadmenos6=velocidadmenos6-3;
        for(let i = 0; i < mes.length; i++){
            numeroTotal=mes[i].TUNJUELITO;
        }
    
        for(let i = 0; i < mes.length; i++){
            if(numeroTotal< mes[i].TUNJUELITO){
                numeroTotal=mes[i].TUNJUELITO;
            }
            console.log(numeroTotal);
           
            if(opcion1 == "TUNJUELITO"){
               
                fill("#FFA10A");
                if(velocidadmenos6 <= (50*(i+1)+70)){
                    ellipse((50*(i+1))+70, 590-(50*i),((mes[i].TUNJUELITO/numeroTotal)*50), ((mes[i].TUNJUELITO/numeroTotal)*50));
                } else{
                    ellipse(velocidadmenos6, 590-(50*i),((mes[i].TUNJUELITO/numeroTotal)*50), ((mes[i].TUNJUELITO/numeroTotal)*50));
                }
                //
                //si la distancia entre el mouse y la burbuja es cercana
            }
            if(opcion == "TUNJUELITO"){
                fill("#BC3810");
           if(velocidad6 >= (50*(i+1))){
            ellipse((50*(i+1)), 590-(50*i),((mes[i].TUNJUELITO/numeroTotal)*50), ((mes[i].TUNJUELITO/numeroTotal)*50));
        } else{
            ellipse(0+velocidad6, 590-(50*i),((mes[i].TUNJUELITO/numeroTotal)*50), ((mes[i].TUNJUELITO/numeroTotal)*50));
        }
       
                let distancia = dist(mouseX, mouseY, (50*(i+1)), (590-(50*i))); 

                //si la distancia entre el mouse y la burbuja es cercana
                     if(distancia < 20)
                    {
                      // entonces la variable over pongala en true
                      mes[i].over = true;	
                  }
                     //si la distancia entre el mouse y la burbuja es lejana
                  else
                     {   
                  // entonces la variable over pongala en false
                   mes[i].over = false;
                     }
                  if (mes[i].over == true) 
                    {
                      fill('#FFFAFF');
                      textAlign(CENTER);
                      //coloca el texto del dato mas abajo de la burbuja
                      text(mes[i].Month+" Numero de personas "+mes[i].TUNJUELITO, (50*(i+1)+50), 590-(50*i));
                      pop();
                  } 
                }
            //50 =100 % 
           
        }
        numeroTotal=0;

        


    } else{
        velocidad6=0;
        velocidadmenos6=800;
    }

    fill(250);
    rect(0, 0, 800, 10);
    rect(0, 60, 800, 10);
    rect(0, 110, 800, 10);
    rect(0, 160, 800, 10);
    rect(0, 210, 800, 10);
    rect(0, 260, 800, 10);
    rect(0, 310, 800, 10);
    rect(0, 360, 800, 10);
    rect(0, 410, 800, 10);
    rect(0, 460, 800, 10);
    rect(0, 510, 800, 10);
    rect(0, 560, 800, 10);
    rect(0, 610, 800, 10);
    rect(0, 660, 800, 10);


    /*
    for (let i = 0; i < mes.length; i++){
        if(contador==0){
            if(i==0){
            totalDePersonas= totalDePersonas+mes[i].SUBA;
            console.log(totalDePersonas)
            }
            

        }
        
     }
     
     contador=1;
     */
}

/*
  //se recorre la cantidad de burbujas, que es lo mismo que recorrer la cantidad de datos
  for (let i = 0; i < bubbles.length; i++)
  //for (let i = 0; i < rowCount; i++) 
  {
  	//recorre cada burbuja y llama a la función dibujar para mostrarla
    bubbles[i].dibujar();
    //recorre cada burbuja y llama a la función mouseOver para mostrar  la información
    bubbles[i].mouseOver(mouseX, mouseY);
  } 
  */

class Mes 
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

function mySelectEvent() 
{
  //guarda la opción seleccionada en la variable opcion
  opcion = sel.value();
  console.log(sel.value());
}
function mySelectEvent1() 
{
  //guarda la opción seleccionada en la variable opcion
  opcion1 = sel1.value();
  console.log(sel1.value());
}



