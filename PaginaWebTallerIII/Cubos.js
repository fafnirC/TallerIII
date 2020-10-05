let table; 
let rowCount;
let show = [];
let colours = [];
let sync = 0;
let cnv;

let checkbox;
let mostrarHombres = false;
let checkbox2;
let mostrarMujeres = false;
let checkbox3;
let mostrarJoven = false;
let checkbox4;
let mostrarViejo = false;
let checkbox5;
let mostrarInter = false;




function preload() 
{
  //carga el archivo y tiene en cuenta el titulo de las columnas
  table = loadTable("assets/data_2.csv", "header");
}


function setup() {
  cnv = createCanvas(1500, 500);
  
  cnv.parent(P5Usuario);


  background(0);

  rowCount = table.getRowCount();
  // colours = [color(255,0,0),color(0,255,0),color(0,0,255)];
   const row = table.getRows();  

  for (let i = 0; i < rowCount; i++) 
  {
    const x = row[i].getNum("x");

    const y = row[i].getNum("y");

    const width = row[i].getNum("width");


    const height1 = row[i].getNum("height");

 
    const name = row[i].getString("name");

  }
  checkbox = createCheckbox('Hombres'); 
  checkbox.parent(P5Usuario);

  checkbox.changed(MostrarH);

  checkbox2 = createCheckbox('Mujeres'); 
  checkbox2.parent(P5Usuario);
  
  checkbox2.changed(MostrarM);

  checkbox5 = createCheckbox('Intersexuales'); 
  checkbox5.parent(P5Usuario);
;  
  checkbox5.changed(MostrarI);

  checkbox3 = createCheckbox('De 18 a 30'); 
  checkbox3.parent(P5Usuario);
  
  checkbox3.changed(MostrarEdad1);

  checkbox4 = createCheckbox('De 30 a 45'); 
  checkbox4.parent(P5Usuario);
  checkbox4.changed(MostrarEdad2);
}


 function MostrarH() 
{
  //si el boton esta activo
  if (checkbox.checked()) 
  {
    //coloque la variable mostrarCirculo en true
    mostrarHombres = true;
  } 
  //si el boton esta desactivado 
  else 
  {
    //coloque la variable mostrarCirculo en false
    mostrarHombres = false;
  }
}

 function MostrarM() 
{
  //si el boton esta activo
  if (checkbox2.checked()) 
  {
    //coloque la variable mostrarCirculo en true
    mostrarMujeres = true;
  } 
  //si el boton esta desactivado 
  else 
  {
    //coloque la variable mostrarCirculo en false
    mostrarMujeres = false;
  }
}

 function MostrarEdad1() 
{
  //si el boton esta activo
  if (checkbox3.checked()) 
  {
    //coloque la variable mostrarCirculo en true
    mostrarJoven = true;
  } 
  //si el boton esta desactivado 
  else 
  {
    //coloque la variable mostrarCirculo en false
    mostrarJoven = false;
  }
}

function MostrarEdad2() 
{
  //si el boton esta activo
  if (checkbox4.checked()) 
  {
    //coloque la variable mostrarCirculo en true
    mostrarViejo = true;
  } 
  //si el boton esta desactivado 
  else 
  {
    //coloque la variable mostrarCirculo en false
    mostrarViejo = false;
  }
}

function MostrarI() 
{
  //si el boton esta activo
  if (checkbox5.checked()) 
  {
    //coloque la variable mostrarCirculo en true
    mostrarInter = true;
  } 
  //si el boton esta desactivado 
  else 
  {
    //coloque la variable mostrarCirculo en false
    mostrarInter = false;
  }
}



function draw() {
  
  fill(0,10);
  rect(0,0,width,height);




   if(mostrarHombres == true)
  {
  for(let iter = 0; iter < show.length; iter++) {   
    show[iter].render();
  }
  if (millis() > sync) {
    show.push(new Firework(random(900),random(400))); 
    sync = millis() + random(300,500);
    }
  }

  if(mostrarMujeres == true)
  {
  for(let iter = 0; iter < show.length; iter++) {   
    show[iter].render();
  }
  if (millis() > sync) {
    show.push(new Firework2(random(900),random(400))); 
    sync = millis() + random(300,3000);
    }
  }

if(mostrarInter == true)
  {
  for(let iter = 0; iter < show.length; iter++) {   
    show[iter].render();
  }
  if (millis() > sync) {
    show.push(new Firework5(random(900),random(400))); 
    sync = millis() + random(300,5000);
    }
  }

  if(mostrarJoven == true)
  {
  for(let iter = 0; iter < show.length; iter++) {   
    show[iter].render();
  }
  if (millis() > sync) {
    show.push(new Firework3(random(900),random(400))); 
    sync = millis() + random(300,500);
    }
  }
  if(mostrarViejo == true)
  {
  for(let iter = 0; iter < show.length; iter++) {   
    show[iter].render();
  }
  if (millis() > sync) {
    show.push(new Firework4(random(900),random(400))); 
    sync = millis() + random(300,1000);
    }
  }

}




class Firework {
  constructor(x, y) {
    this.xPos = x;
    this.yPos = y;
    this.colour = color(155,0,155);
    // this.colour = colours[int(random(colours.length))];
    this.lights = [];
    for (let iter = 0; iter < 50; iter++)
      this.lights.push(new Particle(this));
  }
  
  render() {
    fill(this.colour);
    // lights.forEach();
    for(let iter = 0; iter < this.lights.length; iter++)
      this.lights[iter].render();
  }
}


class Firework2 {
  constructor(x, y) {
    this.xPos = x;
    this.yPos = y;
    this.colour = color(0,255,0);
    // this.colour = colours[int(random(colours.length))];
    this.lights = [];
    for (let iter = 0; iter < 100; iter++)
      this.lights.push(new Particle2(this));
  }
  
  render() {
    fill(this.colour);
    // lights.forEach();
    for(let iter = 0; iter < this.lights.length; iter++)
      this.lights[iter].render();
  }
}

class Firework3 {
  constructor(x, y) {
    this.xPos = x;
    this.yPos = y;
    this.colour = color(0,0,255);
    // this.colour = colours[int(random(colours.length))];
    this.lights = [];
    for (let iter = 0; iter < 100; iter++)
      this.lights.push(new Particle(this));
  }
  
  render() {
    fill(this.colour);
    // lights.forEach();
    for(let iter = 0; iter < this.lights.length; iter++)
      this.lights[iter].render();
  }
}

class Firework4 {
  constructor(x, y) {
    this.xPos = x;
    this.yPos = y;
    this.colour = color(255,0,0);
    // this.colour = colours[int(random(colours.length))];
    this.lights = [];
    for (let iter = 0; iter < 100; iter++)
      this.lights.push(new Particle2(this));
  }
  
  render() {
    fill(this.colour);
    // lights.forEach();
    for(let iter = 0; iter < this.lights.length; iter++)
      this.lights[iter].render();
  }
}

class Firework5 {
  constructor(x, y) {
    this.xPos = x;
    this.yPos = y;
    this.colour = color(255,0,0);
    // this.colour = colours[int(random(colours.length))];
    this.lights = [];
    for (let iter = 0; iter < 100; iter++)
      this.lights.push(new Particle3(this));
  }
  
  render() {
    fill(this.colour);
    // lights.forEach();
    for(let iter = 0; iter < this.lights.length; iter++)
      this.lights[iter].render();
  }
}

class Particle {
  constructor(parent) {
    this.xPos = parent.xPos;
    this.yPos = parent.yPos;
    this.direction = random(TWO_PI);
    this.speed = random(1,5);
    this.size = random(1,40);
  }
  render() {
    if (this.size < 0)
      return;
    this.size -= 0.05;
    this.xPos += sin(this.direction) * this.speed;
    this.yPos += cos(this.direction) * this.speed;
    if (this.direction < PI)
      this.direction = lerp(this.direction, 0, 0.01);
    else
      this.direction = lerp(this.direction,TWO_PI, 0.01);
    noStroke();
    ellipse(this.xPos,this.yPos,this.size,this.size);
  }
}

class Particle2 {
  constructor(parent) {
    this.xPos = parent.xPos;
    this.yPos = parent.yPos;
    this.direction = random(TWO_PI);
    this.speed = random(1,5);
    this.size = random(1,10);
  }
  render() {
    if (this.size < 0)
      return;
    this.size -= 0.02;
    this.xPos += sin(this.direction) * this.speed;
    this.yPos += cos(this.direction) * this.speed;
    if (this.direction < PI)
      this.direction = lerp(this.direction, 0, 0.01);
    else
      this.direction = lerp(this.direction,TWO_PI, 0.01);
    noStroke();
    ellipse(this.xPos,this.yPos,this.size,this.size);
  }
}
class Particle3 {
  constructor(parent) {
    this.xPos = parent.xPos;
    this.yPos = parent.yPos;
    this.direction = random(TWO_PI);
    this.speed = random(1,5);
    this.size = random(1,10);
  }
  render() {
    if (this.size < 0)
      return;
    this.size -= 1;
    this.xPos += sin(this.direction) * this.speed;
    this.yPos += cos(this.direction) * this.speed;
    if (this.direction < PI)
      this.direction = lerp(this.direction, 0, 0.01);
    else
      this.direction = lerp(this.direction,TWO_PI, 0.01);
    noStroke();
    ellipse(this.xPos,this.yPos,this.size,this.size);
  }
}