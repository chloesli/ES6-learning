// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace
function isUpper(c) {
    let upper = c.toUpperCase();
    return (upper === c);
  }
  function myReplace(str, before, after) {
    var splitted = str;
    splitted = splitted.split(before);

    console.log(splitted);
    if (splitted === str) {
    }
  
    var replace = after;
    if (isUpper(before[0])) {
      replace = [...replace];
      replace.splice(0, 1, after[0].toUpperCase());
      replace = replace.join(""); 
    } 
    
    splitted.splice(1, 0, replace);
    return splitted.join(""); 
  }
  console.log(myReplace("Let us go to the Store", "Store", "mall"));
  console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
  