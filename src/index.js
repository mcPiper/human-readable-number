const date = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',    
}

module.exports = function toReadable (number) {
let numberArr = number.toString().split('');
let result = '';
let length = numberArr.length;
if(date[number]) return date[number];
 switch (length) {
     case 3: 
          result += `${date[numberArr[0]]} hundred `;

          if(number % 100 === 0) break;

          numberArr.splice(0, 1); 
      case 2: 
          if(date[numberArr.join('')]) {
              result += `${date[numberArr.join('')]}`;
              break
          } else if(numberArr[0] == 0) {
              numberArr.splice(0, 1);
          } else {
              result += `${date[numberArr[0] * 10]} `;
              numberArr.splice(0, 1);
              console.log(numberArr);
          }
      default:
          result += `${date[numberArr[0]]}`
 } 

 return result.trim();
}
