function destroyer(arr,...del) {
    var myMap = new Map();
    del.forEach((item) => {
      myMap.set(item, true);
    })
  
    for (let i = arr.length; i >= 0; i--) {
      // Check mymap
      if (myMap.get(arr[i])) {
        arr.splice(i, 1);
      }
  }
  
    console.log(arr);
    return arr;
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
  // [1, 1]

  console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")); 
  //should return [12,92,65]