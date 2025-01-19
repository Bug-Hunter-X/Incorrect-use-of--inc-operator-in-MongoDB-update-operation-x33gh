# Incorrect use of $inc operator in MongoDB update operation

This example demonstrates an incorrect usage of the `$inc` operator in a MongoDB update operation. The `$inc` operator is designed to increment numeric fields, but using it on non-numeric fields leads to an error.

## Bug
The `bug.js` file contains code that attempts to increment a non-numeric field using `$inc`. This will result in an error because the field is not a number.

## Solution
The `bugSolution.js` file provides a corrected version of the code.  It first checks that the field exists and is of type number before attempting the increment.  If not, a different approach is used to handle the situation (e.g., setting a default numeric value).

## How to reproduce
1. Create a MongoDB collection with at least one document.
2. Run the code in `bug.js`. Observe the error.
3. Run the code in `bugSolution.js` to see the corrected behavior.