// .map()
// creates a copy of the original array, iterating over each element
// requires a return statement, either explicit or implicit

const mockArray = [1, 2, 3];

// explicit return statement:
const doubleMockArray = mockArray.map((number) => {
  return number * 2; // outputs [2, 4, 6]
}); 

// implicit return statement:
const doubleMockArrayTwo = mockArray.map(number => number * 2); // outputs [2, 4, 6]
