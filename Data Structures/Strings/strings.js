const mockString = 'John';

// 1 ➝ .startsWith();
// ══════════════════════════════════════════════════════════════
// Checks if a string starts with the given substring
// Returns a boolean value (true or false)
// Case-sensitive (uppercase and lowercase must match)
// ──────────────────────────────────────────────────────────────

const initialLetter = mockString.startsWith('J'); // ➝ true
const initialLetters = mockString.startsWith('Joh'); // ➝ true
const wrongInitialLetter = mockString.startsWith('j'); // ➝ false (case-sensitive)

// Using the optional 'position' parameter:
const checkFromIndex = mockString.startsWith('o', 1); // ➝ true (checks from index 1)

// ══════════════════════════════════════════════════════════════
