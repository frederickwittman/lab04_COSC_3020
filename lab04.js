// Frederick Wittman
// Lars Kotthoff
// Rajiv Khadka
// COSC 3020-01
// Lab 04
// 10/04/19

// I took the getAllPermutations function directly from this website:
// https://initjs.org/all-permutations-of-a-set-f1be174c79f8
// I did modify the function so that it does not produce duplicate permutations.  This makes 
// the sorting function unstable.


// Takes a string.  Only sorts numbers
function permutationSort(a) {

  var permutations = getAllPermutations(a);

  for (var i = 0; i < permutations.length; i++) {
    if (isSorted(permutations[i])){
      return i + 1;
    }
  }
}

// Returns all permutations.  Modified to ignore duplicates
function getAllPermutations(string) {
  var results = [];
  var usedFirstChars = [];

  if (string.length === 1) {
    results.push(string);
    return results;
  }

  for (var i = 0; i < string.length; i++) {
    var firstChar = string[i];
    if (!usedFirstChars.includes(firstChar)) {
      usedFirstChars.push(firstChar);
    var charsLeft = string.substring(0, i) + string.substring(i + 1);
    var innerPermutations = getAllPermutations(charsLeft);
    for (var j = 0; j < innerPermutations.length; j++) {
      results.push(firstChar + innerPermutations[j]);
    }
    }
  }
  return results;
}

// Checks if string of numbers is sorted
function isSorted (a) {
 sorted = true;
 for (var i = 0; i < a.length - 1; i++) {
   if (a[i] > a[i + 1]) {
     sorted = false;
     break;
   }
 }
  return sorted;
 }

// Tests

a = "111";
b = "1234";
c = "5432";
d = "1121"

console.log(getAllPermutations(a));
console.log(permutationSort(a));

console.log(getAllPermutations(b));
console.log(permutationSort(b));

console.log(getAllPermutations(c));
console.log(permutationSort(c));

console.log(getAllPermutations(d));
console.log(permutationSort(d));
