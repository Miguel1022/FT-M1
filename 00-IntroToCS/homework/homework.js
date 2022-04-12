function BinarioADecimal(num) {
  // tu codigo aca
  var a = String(num);
  var x = 0
<<<<<<< HEAD
  for(i=0; i<str.length; i++){
    x += str[i] * 2 **((str.length-1)-i)
=======
  for(i=0; i<a.length; i++){
    x += Number(str[i]) * 2 **((a.length-1)-i)
>>>>>>> ff70b9215b394a0710954ea5a8d29c207fe84ae3
    }
  return x;
}

function DecimalABinario(num) {
  var str = '';
  while (num > 0) {
    str = (num%2) + str;
    num = Math.floor(num/2);
  }
  return str; 
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}