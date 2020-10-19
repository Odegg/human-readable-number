module.exports = function toReadable (number) {
  return number.toString().split('').reverse().map((item, index, array) => {
    return index < 2 ? twoFirstNums(item, index, array) : notTwoFirstNums(simpleNumber(item), index, array); 
  }).reverse().join(' ').reduceWhiteSpace().trim();
  
  function twoFirstNums(item, index, array) {
    if (index == 0) {
      if (!array[1] && item == '0') return 'zero';
      if (array[1] == '0' || !array[1]) {
        return simpleNumber(item);
      } else if (array[1] == '1') {
        return decimNumber(item);
      } else {
        return decimNumberAfterOne(array[1], simpleNumber(item));
      }
    }
  }

  function notTwoFirstNums(item, index, array) {
    switch (index) {
      case 2:
        return item + ' hundred'
    }
  }

  function simpleNumber(item) {
    switch (item) {
      case '0':
        return '';
      case '1':
        return 'one';
      case '2':
        return 'two';
      case '3':
        return 'three';
      case '4':
        return 'four';
      case '5':
        return 'five';
      case '6':
        return 'six';
      case '7':
        return 'seven';
      case '8':
        return 'eight';
      case '9':
        return 'nine';
      default:
        break;
    }
  }

  function decimNumber(item) {
      switch (item) {
        case '0':
          return 'ten';
        case '1':
          return 'eleven';
        case '2':
          return 'twelve';
        case '3':
          return 'thirteen';
        case '4':
          return 'fourteen';
        case '5':
          return 'fifteen';
        case '6':
          return 'sixteen';
        case '7':
          return 'seventeen';
        case '8':
          return 'eighteen';
        case '9':
          return 'nineteen';
        default:
          break;
      }
  }
  function decimNumberAfterOne(fNum, tNum) {
      switch (fNum) {
        case '2':
          return 'twenty ' + tNum;
        case '3':
          return 'thirty ' + tNum;
        case '4':
          return 'forty ' + tNum;
        case '5':
          return 'fifty ' + tNum;
        case '6':
          return 'sixty ' + tNum;
        case '7':
          return 'seventy ' + tNum;
        case '8':
          return 'eighty ' + tNum;
        case '9':
          return 'ninety ' + tNum;
      }
  }
}

String.prototype.reduceWhiteSpace = function() {
  return this.replace(/\s+/g, ' ');
};