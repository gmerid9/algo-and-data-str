// this function accepts an array of numbers
// and returns an array of only the odd numbers
// ex: returnOdds([1,2,3,4,5,6,7]); -> [1,3,5,7]
function returnOdds(arrays) {
  // CODE HERE

const odds = []
for(const array of arrays) {
  if(array % 2 === 1) {
    odds.push(array)
  }
}
return odds
}



console.log(returnOdds([1,2,3,4,5,6,7]))


// this function accepts an array of numbers
// and returns an array of only the even numbers
// ex: returnEvent([1,2,3,4,5,6,7]); -> [2,4,6]
function returnEvens(arrays) {
  // CODE HERE
  const evens = []
  for(const array of arrays) {
    if(array % 2 === 0) {
      evens.push(array)
    }
  }
  return evens
}

console.log(returnEvens([1,2,3,4,5,6,7]))
// returns only the max element from the inputted array of numbers
// ex: findMax([1,25,6,3]); -> 25
// input array and output is a number 
function findMax(array) {
  // CODE HERE
  let max = array[0]
   for (i=0; i < array.length; i++) {
       
      if(array[i] > max) {
        max = array[i]
      }
   }
   return max
}

console.log(findMax([1,25,6,3]))
/**
 * remove leading and trailing whitespace or specified characters from string
 * trim(' hello '); -> 'hello'
 */
function trim(string) {
  // CODE HERE
      return string.trim()
}

console.log(trim(' hello '))

// under the hood, a JavaScript array is a specific type of object in which values are paired with sequentially numbered keys.
// the "Array" object also contains a number of methods that give arrays their functionality.
// the below function should return an empty object that has the behavior and functionality of an array. this object should have the following methods:
  // push(val) adds val to the end
  // pop() removes a value from the end and returns it
  // unshift(val) adds val to the beginning
  // shift() removes a value from the beginning and returns it
// the goal of this problem is to reverse engineer what array methods are actually doing and create an object that has those methods
function createArray() {
  // CODE HERE
    return  new Array()
    
}

console.log(createArray())
