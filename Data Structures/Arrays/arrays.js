/// METHODS THAT MODIFY THE ORIGINAL ARRAY

// 1 ➝ .splice(index, deleteCount, item1, item2...);
// ══════════════════════════════════════════════════════════════
// Allows you to add, remove, or replace items in an array
// Only mandatory parameter is 'index'.
// If deleteCount is specified and greater than 0, it will remove elements from the array
// If deleteCount is omitted, it will remove all elements after that index
// ──────────────────────────────────────────────────────────────

const example1 = [1,2,3,4,5,6,7];
example1.splice(2); // outputs [3,4,5,6,7], array becomes [1,2]
example1.splice(2, 2); // outputs [3,4], array becomes [1,2,5,6,7]
example1.splice(2, 2, 'a', 'b') // outputs [3,4], array becomes [1,2,'a','b',5,6,7]

// 2 ➝ .sort()
// ══════════════════════════════════════════════════════════════
// Sorts an array converting its elements into strings
// ──────────────────────────────────────────────────────────────

const example2 = [1,7,2,9,4];
example2.sort(); // turns the integers into strings, returning a wrongfully sorted array.
example2.sort((a, b) => a - b); // outputs [1,2,4,7,9]

const shallowCopy = [...example2];
shallowCopy.sort(); // sorts the array without changing the original

// ══════════════════════════════════════════════════════════════

/// METHODS THAT DO NOT MODIFY THE ORIGINAL ARRAY

// 1 ➝ .map();
// ══════════════════════════════════════════════════════════════
// Returns a new array where each element is transformed by the callback function
// Requires a return statement, either explicit or implicit
// Creates a copy but does NOT modify the original array
// Time complexity: O(n)
// ──────────────────────────────────────────────────────────────

const example3 = [1, 2, 3];
const explicitReturnexample3 = example3.map((number) => { 
  return number * 2; // Outputs: [2, 4, 6]
}); 

const implicitReturnexample3 = example3.map(number => number * 2); // Outputs: [2, 4, 6]

// .map() always returns a new array, even if elements remain unchanged:
const unchangedArray = example3.map(number => number); // Outputs: [1, 2, 3]

// ══════════════════════════════════════════════════════════════

// 2 ➝ .toSorted()
// ══════════════════════════════════════════════════════════════
// Sorts an array converting its elements into strings
// Won't work on old browsers

const example4 = ['1','5','2','9','4'];
example4.toSorted(); // outputs a sorted array and does not alter the original array

// ══════════════════════════════════════════════════════════════
