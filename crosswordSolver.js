function crosswordSolver(str, words) {
  const invalid = typeof str !== "string" || !/^[.\n012]+$/.test(str); // Validate input crossword.
  const invalidWords =
    !Array.isArray(words) || words.some((word) => typeof word !== "string");

  if (Array.isArray(words) && hasDuplicates(words)) {
    console.log("Error");
    return;
  }

  // Check if the number of starts is the same as the number of words
  let startWord = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] > "0" && str[i] !== ".") {
      startWord += parseInt(str[i]);
    }
  }

  if (startWord !== words.length) {
    console.log("Error");
    return;
  }

  // Return error if crossword or words are invalid.
  if (invalid || invalidWords) {
    console.log("Error");
    return;
  }

  // Func to convert into a simple array
  function lookIntoCrossword(input) {
    const rows = input.trim().split("\n");
    return rows.map((row) =>
      row.split("").map((char) => (char === "." ? -1 : parseInt(char)))
    );
  }

  // Parse the input crossword into a simple array
  const grid = lookIntoCrossword(str);

  // Create a simple array to store the words in the puzzle
  const puzzleWords = grid.map((row) =>
    row.map((char) => (char === -1 ? "" : ""))
  );

  // Function to add words to the crossword
  const addWords = (currentInd = 0) => {
    if (currentInd === words.length) return true;

    const word = words[currentInd];

    for (let rowInd = 0; rowInd < grid.length; rowInd++) {
      for (let colInd = 0; colInd < grid[0].length; colInd++) {
        if (grid[rowInd][colInd] === 0) continue;

        const char = { row: rowInd, col: colInd };

        function directOfWord(direction) {
          const otherschars = [];

          for (let i = 0; i < word.length; i++) {
            const row = direction === "horizontal" ? char.row : char.row + i;
            const col = direction === "horizontal" ? char.col + i : char.col;

            if (
              row >= grid.length ||
              col >= grid[0].length ||
              (puzzleWords[row][col] !== "" &&
                puzzleWords[row][col] !== word[i])
            ) {
              break;
            }

            otherschars.push({ row, col, value: puzzleWords[row][col] });
            puzzleWords[row][col] = word[i];
          }

          // If we successfully placed all characters of the word, continue with recursion
          if (otherschars.length === word.length && addWords(currentInd + 1)) {
            return true;
          }

          // If it doesn't fit, revert changes
          otherschars.forEach((otherchar) => {
            puzzleWords[otherchar.row][otherchar.col] = otherchar.value;
          });

          return false;
        }

        if (directOfWord("horizontal") || directOfWord("vertical")) {
          return true;
        }
      }
    }
    return false; // If the word cannot be added, return false
  };

  // Try to add all words to the puzzle
  if (!addWords()) {
    console.log("Error");
    return;
  }

  // Convert the puzzleWords array to a string and print the result
  const result = puzzleWords.map((row) => row.join("")).join("\n");
  console.log(result);
}

function hasDuplicates(arr) {
  return new Set(arr).size !== arr.length;
}

const emptyPuzzle = `2001
0..0
1000
0..0`;
const words = ["casa", "alan", "ciao", "anta"];

crosswordSolver(emptyPuzzle, words);
module.exports = { crosswordSolver, hasDuplicates, lookIntoCrossword };