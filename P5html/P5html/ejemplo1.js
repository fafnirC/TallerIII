//variable de checkbox
let checkbox;
//variable que muestra el circulo cuando el checkbox esta activo
let mostrarCirculo = false;

//variable que crea el canvas de P5
let cnv;

//variable de InputField
let textoInputField = " ";

//variable de slider
let slider;
//variable que guarda el valor del slider
let valorSlider;

//variable del selector de opciones
let sel;
//variable que guarda la opción seleccionada por el usuario
let opcion = " ";

//variable que agrupa los botones creados
let buttons;

//se crean 3 botones
let btn1;
let btn2;
let btn3;

//se crea el elemento h2
let textoH2;

//variable de radio button
let radio;
//variable que guarda el valor de radio button escogido
let valorRadioBtn;

//variable de input field
let inputField;


function setup() 
{
  //variable de input field
  inputField = createInput('');
  inputField.position(10, 10);
  //inputField.parent(P5ejemplo);
  //cada que se escribe una letra llama a la funcion myInputEvent
  inputField.input(myInputEvent);

  //variable del selector de opciones
  sel = createSelect();
  sel.position(10, 80);
  sel.parent(P5ejemplo);
  sel.option('pear');
  sel.option('kiwi');
  sel.option('grape');
  //cuando se selecciona una opción llama a la funcion mySelectEvent
  sel.changed(mySelectEvent);

  //variable de slider, el valor seleccionado por el usuario lo lee directamente en draw usando slider.value()
  slider = createSlider(0, 255, 100); //(min, max, start)
  slider.position(10, 150);
  //slider.parent(P5ejemplo);
  slider.style('width', '80px');

  //variable de radio button, el valor seleccionado por el usuario lo lee directamente en draw usando radio.value()
  radio = createRadio();
  radio.option('black');
  radio.option('white');
  radio.option('gray');
  //radio.position(10, 190);
  radio.parent(P5ejemplo);
  radio.style('width', '60px');

  //variable de checkbox 
  checkbox = createCheckbox('fill'); //palabra al lado del checkbox
  checkbox.position(200, 190);
  //checkbox.parent(P5ejemplo);
  //cuando se selecciona una opción llama a la funcion changeFill
  checkbox.changed(changeFill);

  //se crean 3 botones
  btn1 = createButton('btn');
  btn2 = createButton('2nd btn');
  btn3 = createButton('3rd btn');  
  //se determina la función de cada botón cuado se oprime
  btn1.mousePressed(btnPressed1);
  btn2.mousePressed(btnPressed2);
  btn3.mousePressed(btnPressed3);

  //se crea un elemento que agrupa todos los botones
  buttons = selectAll('button');
  //a los botones se les da caracteristicas
  for (let i = 0; i < buttons.length; i++) 
  {
    //que tengan este tamaño
    buttons[i].size(100, 100);
    //que se ubiquen de esta forma
    buttons[i].position((100*i)*1.2, 350);
    //buttons[i].parent(P5ejemplo);
  }

  //se crea el canvas de P5
  cnv = createCanvas(900, 500);
  //se le da ubicación al canvas
 // cnv.position(980, 150);
//IMPORTANTEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
  cnv.parent(P5ejemplo); //IMPORTANTEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
 //IMPORTANTEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
}

//esta función lee las teclas orpimidas en el inputfield 
function myInputEvent() 
{
  //coloca en la consola las teclas del inputfield
  console.log('you are typing: ', this.value());

  //lo escrito el el input field se guarda en la variable textoInputField como un string
  textoInputField = str(this.value());
  
}

//esta función lee la opción seleccionada por el usuario de los botones desplegables
function mySelectEvent() 
{
  //guarda la opción seleccionada en la variable opcion
  opcion = sel.value();
}

//esta función se ejecuta cuando el checkbox es oprimida
function changeFill() 
{
  //si el boton esta activo
  if (checkbox.checked()) 
  {
    //coloque la variable mostrarCirculo en true
    mostrarCirculo = true;
  } 
  //si el boton esta desactivado 
  else 
  {
    //coloque la variable mostrarCirculo en false
    mostrarCirculo = false;
  }
}

//cuando se oprime el botón btn
function btnPressed1() 
{
  //escriba en la consola 
  console.log('boton oprimido 1');  
}

//cuando se oprime el botón 2nd btn
function btnPressed2() 
{
  //escriba en la consola 
  console.log('boton oprimido 2');  
}

//cuando se oprime el botón 3rd btn
function btnPressed3() 
{
  //escriba en la consola 
  console.log('boton oprimido 3');  
}




function draw() 
{
  //el valor seleccionado del slider lo lee directamente en draw y se guarda en la variable valorSlider
  valorSlider = slider.value();
  //el valor del slider es el background
  background(valorSlider);


  //disbujar el circulo en la ubicación del mouse
  if (mouseIsPressed) 
  {
    fill(0);
  } 
  else 
  {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);


  //el valor seleccionado de los radio buttons lo lee directamente en draw y se guarda en la variable valorRadioBtn
  valorRadioBtn = radio.value();
  //el nombre del color seleccionado es el collor del relleno de las figuras y el texto
  fill(valorRadioBtn);
  
  //si oprimieron el checkbox y esta activado
  if(mostrarCirculo == true)
  {
    //muestre un circulo
    ellipse(50, 50, 50, 50);
  }

  //se muestra lo escrito por el usuario en el inputfield, ya que la variable textoInputFiel guarda los valores tecleados en el infutfield
  text(textoInputField,10,180);
  
  //dibuja el texto
  text("holaaaaaaaaaaaa",10,210);

  //muestra este texto con la opcíon seleccionada del despliegue de botones
  text("Seleccionaste: " + opcion + '!', 100, 50);


}


