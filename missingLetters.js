// fearNotLetter("abce") should return "d".

// fearNotLetter("abcdefghjklmno") should return "i".

// fearNotLetter("stvwx") should return "u".

// fearNotLetter("bcdf") should return "e".

// fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.

function fearNotLetter(str) {
    for (let i = 1; i < str.length; i++) {
      let prev = str[i - 1].charCodeAt(0);
      if (prev != str[i].charCodeAt(0) - 1) {
        return String.fromCharCode(prev + 1);
      }
    }
    return ;
  }
  
  fearNotLetter("abce");
  