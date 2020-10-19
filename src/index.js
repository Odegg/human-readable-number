module.exports = function toReadable (number) {
  let finishArr = '';
  let startArr = number.toString().split('');
  startArr.forEach(function(item, i, startArr) {
    if (startArr[i] == 0) {
      switch (item) {
        case 1:
          return 'one hundred';
          break;
        case 2:
          return 'two hundred';
          break;
        case 3:
          return 'three hundred';
          break;
        case 4:
          return 'four hundred';
          break;
        case 5:
          return 'five hundred';
          break;
        case 6:
          return 'six hundred';
          break;
        case 7:
          return 'seven hundred';
          break;
        case 8:
          return 'eight hundred';
          break;
        case 9:
          return 'nine hundred';
          break;
      }
    } if (startArr[i] == 1) {
      if (item == 0) {
        return '';
      } else if (item == 1) {
        return deciFunc();
      } else {
        switch (item) {
          case 2:
            return 'twenty'
            break;
          case 3:
            return 'thirty'
            break;
          case 4:
            return 'forty'
            break;
          case 5:
            return 'fifty'
            break;
          case 6:
            return 'sixty'
            break;
          case 7:
            return 'seventy'
            break;
          case 8:
            return 'eighty'
            break;
          case 9:
            return 'ninety'
            break;
        }
      }
    }
  });
  function deciFunc() {
    if (startArr[2] == 1) {
      return 'eleven';
    } else if (startArr[2] == 2) {
      return 'twelve';
    } else if (startArr[2] == 3) {
      return 'thirteen';
    } else if (startArr[2] == 4) {
      return 'fourteen';
    } else if (startArr[2] == 5) {
      return 'fifteen';
    } else if (startArr[2] == 6) {
      return 'sixteen';
    } else if (startArr[2] == 7) {
      return 'seventeen';
    } else if (startArr[2] == 8) {
      return 'eighteen';
    } else if (startArr[2] == 9) {
      return 'nineteen';
    }
  }
}