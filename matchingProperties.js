function whatIsInAName(collection, source) {
    var arr = [];
    // For each object in collection
      // Look through source 
    collection.forEach((elem) => {
      let hasAll = true;
      for (let [key, value] of Object.entries(source)) {
        if (elem[key] !== value) {
          hasAll = false;
        }
      }
      if (hasAll) arr.push(elem);
    })
      //O(C*S); 
    
    // Only change code above this line
    return arr;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet"});
  // [{first: "Tybalt", last: "Capulet"}]
  whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }); 
  //should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]