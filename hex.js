function hex(valor){
  var primero, segundo;
  var hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
  const value = 0.0016;
  var residuo = valor % 16;
  console.log("Residuo: "+ residuo);
  primero = Math.floor(valor/16);
  segundo = residuo;
  // console.log("#" + hex[primero] + hex[segundo]);
  console.log(primero + "\n" + segundo);
}

hex(39);
