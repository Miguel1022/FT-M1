function BinarioADecimal(num) {
  // tu codigo aca
  str = String(num);
  var x = 0
  for(i=0; i<str.length; i++){
    x += parseInt(str[i]) * 2 **((str.length-1)-i)
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