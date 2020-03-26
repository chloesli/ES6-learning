
// Given input:

// // could be potentially more than 3 keys in the object above
var items = [
{color: 'red', type: 'tv', age: 18},
{color: 'silver', type: 'phone', age: 20},
{color: 'blue', type: 'xbox', age: 12},
{color: 'pink', type: 'xbox', age: 10},
{color: 'cyan', type: 'tv', age: 12}
]

var excludes = [
{k: 'color', v: 'silver'},
{k: 'type', v: 'tv'},
]

function excludeItems(items, excludes) {
   let map = new Map();
   for (let i = 0; i < excludes.length; i++) {
      map.set(excludes[i].k, excludes[i].v); 
   }
   // color => silver
   // type => tv
   console.log(map);
   return items.filter((item) => {
      for(let [key, value] of map) {
         if (item[key] === value) {
            return false;
         }
      }
      return true;;
   })

}
function excludeItems(items, excludes) {
   excludes.forEach(pair => {
      items = items.filter((item) => {
         return item[pair.k] !== pair.v;
      });
   });
   return items;
}

// 1. Describe what this function is doing...
// 2. What is wrong with that function ?
// 3. How would you optimize it ?  

// ---
// Write an array flatten function. 
// [1, [2, [ [3, 4], 5], 6], 7] =; [1, 2, 3, 4, 5, 6]
function flatten(arr, depth = 4,final = [], counter = 1) {
   
   arr.forEach((elem) => {
      if (typeof elem === "object") {
         console.log(counter);
         if (counter < depth) {
            flatten(elem, depth, final, counter + 1);
         } else {
            final.push(elem);
         }
      } else {
         final.push(elem);
      }
   })
   return final;

}
let flattened = flatten([1, [2, [ [3, 4], 5], 6], 7]);
const arr1 = [1, 2, [[3, 4],5]];
console.log(flattened);


function itFlatten(arr) {
   let result = [];
   let stack = [...arr];
   while (stack.length) {
      var curr = stack.shift();
      if (Array.isArray(curr)) {
         stack.unshift(...curr);
      } else {
         result.push(curr);
      }
   }
   return result;
}

let myarr = [1, [2, [ [3, 4], 5], 6], 7];
let itflattened = itFlatten(myarr);
let result2 = [1, 2, [3, 4]];
console.log(itflattened);
// ---
// Write an emitter class:

// emitter = new Emitter();

// // 1. Support subscribing to events.
// sub = emitter.subscribe('event_name', callback);
// sub2 = emitter.subscribe('event_name', callback2);

// // 2. Support emitting events.
// // This particular example should lead to the `callback` above being invoked with `foo` and `bar` as parameters.
// emitter.emit('event_name', foo, bar);

// // 3. Support unsubscribing existing subscriptions by releasing them.
// sub.release(); // `sub` is the reference returned by `subscribe` above

// ---
// flatten an resultay recursively and iteratively in Javascript
// ----
// Basic JavaScript async stuff (you should know event bubbling, debounce (its variant)... know how to code it). 
// It would be a good idea to be aware of JS closure as well.  
// ----
// design/code a poll widget.
// ----
// If you were building a search tool and wanted search results to pop up as you typed 
// but the server call was taxing, write a function that gets called on every key down but calls the server when the user stops typing for 400ms.  
// ----
// Wrap the function that is called by event listener in a debounce function
function debounce(func, delay, immediate = false) {
   let currTimeout;
   return function() {
     if(currTimeout) {
       clearTimeout(currTimeout);
     }
     if(immediate && !currTimeout) func(...arguments);

     currTimeout = setTimeout(() => {
       if (!immediate) func(...arguments);
       currTimeout = null;
     }, delay)

   }
 }

// You are given an result of N elements in the form  "property1: value1; property2: value2;...;propertyX: valueX;" 
// for some some N and any X. There is also another array of M elements of the form "property: value". 
// You are supposed to write an algorithm to remove every element in the N length array that has a "property: value" 
// pair in the M length array. 
// The trick is that the most intuitive solution of iterating through the M array and filtering the N array 
// at each element is already written. You must come up with a solution that solves the problem in less than O(NM) time.
// ----

// Implement a simple store class with set(Node, value), 
// get(Node) and has(Node) methods, which store a given Nodes with corresponding values
// ----------

// 1. In JavaScript, write a function that takes an array as input that can contain both ints and more arrays (which can also contain an array or int) and return the flattened array.

// ex. [1, [2, [ [3, 4], 5], 6]] =&gt; [1, 2, 3, 4, 5, 6]

// 2. Using HTML and CSS, show how you would create an image that would display another image (aligned to the bottom, right) when the… 

