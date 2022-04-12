function BinarioADecimal(num) {
  // tu codigo aca
  var a = String(num);
  var x = 0
  for(i=0; i<a.length; i++){
    x += Number(str[i]) * 2 **((a.length-1)-i)
    }
  return x;
}

function DecimalABinario(num) {
  var str = '';
  while (num > 0) {
    str += num%2;
    num = Math.floor(num/2);
  }
  var x = str.split('').reverse().join('');
  return x; 
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}