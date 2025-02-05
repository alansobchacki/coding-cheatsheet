/// METHODS THAT MODIFY THE ORIGINAL ARRAY

// 1 ➝ .splice(index, deleteCount, item1, item2...);
// ══════════════════════════════════════════════════════════════
// Allows you to add, remove, or replace items in an array
// Only mandatory parameter is 'index'.
// If deleteCount is specified and greater than 0, it will remove elements from the array
// If deleteCount is omitted, it will remove all elements after that index
// ──────────────────────────────────────────────────────────────
const spliceArray = [1,2,3,4,5,6,7]
spliceArray.splice(2); // outputs [3,4,5,6,7], array becomes [1,2]
spliceArray.splice(2, 2); // outputs [3,4], array becomes [1,2,5,6,7]
spliceArray.splice(2, 2, 'a', 'b') // outputs [3,4], array becomes [1,2,'a','b',5,6,7]




/// METHODS THAT DO NOT MODIFY THE ORIGINAL ARRAY

// 1 ➝ .map();
// ══════════════════════════════════════════════════════════════
// Returns a new array where each element is transformed by the callback function
// Requires a return statement, either explicit or implicit
// Creates a copy but does NOT modify the original array
// Time complexity: O(n)
// ──────────────────────────────────────────────────────────────

const mapArray = [1, 2, 3];
const explicitReturnmapArray = mapArray.map((number) => { 
  return number * 2; // Outputs: [2, 4, 6]
}); 

const implicitReturnmapArray = mapArray.map(number => number * 2); // Outputs: [2, 4, 6]

// .map() always returns a new array, even if elements remain unchanged:
const unchangedArray = mapArray.map(number => number); // Outputs: [1, 2, 3]

// ══════════════════════════════════════════════════════════════

