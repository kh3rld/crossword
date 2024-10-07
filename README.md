# Crossword Solver

Crossword puzzle solver that takes an empty crossword grid and a list of words, attempting to fill the grid according to specified rules.

## Features

- Validates input crossword and word list.
- Parses the crossword grid into a usable format.
- Implements backtracking to place words in both horizontal and vertical directions.
- Outputs the filled crossword grid or an error message if placement is not possible.

## Requirements

- Node.js 

## Installation

1. Clone the repository:

   ```bash
   https://learn.zone01kisumu.ke/git/khahussein/crossword
   cd crossword
   ```

## Usage

To use the crossword solver, you can run below command:

### Example

```ruby
node crosswordSolver.js
```

### Output

The output will be a filled crossword grid or an error message if the words cannot be placed according to the rules. For example:

```
casa
i..l
anta
o..n
```

## Error Handling

The solver will print "Error" if:

- The input crossword string is invalid.
- The word list is invalid or contains duplicates.
- The number of starting positions does not match the number of words.

## Contributing

Contributions are welcome! If you have suggestions for improvements or bug fixes, please create an issue or submit a pull request.
