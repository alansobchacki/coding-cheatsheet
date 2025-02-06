// 1 ➝ while loops;
// ══════════════════════════════════════════════════════════════
// Will run until the condition is met
// Or you can set a condition that will never be met, but add a break statement in an if condition
// ──────────────────────────────────────────────────────────────

// a while loop with a break statement since we don't know how many iterations we need
let mySqrt = function(x) {  
  let guess = x;

  while (true) {
      let newGuess = (guess + x / guess) / 2;
      
      if (Math.abs(newGuess - guess) < 1e-6) {
          break; // breaks the loop
      }
      
      guess = newGuess;
  }

  return guess;
};