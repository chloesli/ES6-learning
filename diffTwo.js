function diffArray(arr1, arr2) {
    const final = [];
    var tallyMap = new Map();
    arr1.forEach((item) => {
      if (!tallyMap.get(item)) {
        tallyMap.set(item, 0);
      }
      let val = tallyMap.get(item) + 1;
      tallyMap.set(item, val);
    })
  
    arr2.forEach((item) => {
      if (!tallyMap.get(item)) {
        tallyMap.set(item, 0);
      }
      let val = tallyMap.get(item) + 1;
      tallyMap.set(item, val);
    })
    
    for (let [key, value] of tallyMap) {
      if (value === 1) {
        final.push(key);
      }
    }
    console.log("=== final ===")
    console.log(final);
    return final.sort();
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
  diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);