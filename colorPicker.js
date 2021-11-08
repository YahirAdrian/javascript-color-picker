const sliders = document.getElementsByClassName('sliders');
const rgb = document.getElementById('rgb');
const hexadecimal = document.getElementById('hexadecimal');
const valores = document.getElementById('color')
var red = document.getElementById('red');
var green = document.getElementById('green');
var blue = document.getElementById('blue');
var visual = document.getElementById('color');

//Agregar un evento a los sliders
for(var index = 0; index <=sliders.length-1; index++){
  sliders[index].addEventListener("mousemove", cambiar);
}


function cambiar(){
    cadena = "rgb(" + red.value + "," + green.value + "," + blue.value + ")";
    visual.style.background =cadena;
    rgb.innerHTML=cadena;
    var cadenaHex = "Hex : #" + hex(red.value) + hex(green.value) + hex(blue.value);
    hexadecimal.textContent=cadenaHex;
    var suma = parseInt(red.value) + parseInt(green.value) + parseInt(red.value);
    if (suma<=200) {
      valores.style.color ="#e1e1e1";
    }else{
      valores.style.color="#000";
    }
}

function hex(valor){//CONVIERTE A HEXADECIMAL
  var primero, segundo;
  var hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
  const value = 0.0016;
  var residuo = valor % 16;
  primero = Math.floor(valor/16);
  segundo = residuo;
  return hex[primero] + hex[segundo];
}
