const mockArray = [1, 2, 3];

// 1 ➝ .map();
// ══════════════════════════════════════════════════════════════
// Returns a new array where each element is transformed by the callback function
// Requires a return statement, either explicit or implicit
// Creates a copy but does NOT modify the original array
// Time complexity: O(n)
// ──────────────────────────────────────────────────────────────

const explicitReturnMockArray = mockArray.map((number) => { 
  return number * 2; // Outputs: [2, 4, 6]
}); 

const implicitReturnMockArray = mockArray.map(number => number * 2); // Outputs: [2, 4, 6]

// .map() always returns a new array, even if elements remain unchanged:
const unchangedArray = mockArray.map(number => number); // Outputs: [1, 2, 3]

// ══════════════════════════════════════════════════════════════

