function crosswordSolver(str, words) {
  // Check if the string(str) and words are valid
  if (!str || !words || words.length === 0) {
    console.log("Error");
    return;
  }

  // Split str into rows
  const rows = str.split("\n");
  const cols = rows[0].length;
  const grid = rows.map((row) => row.split(""));

  // Function to place a word in the grid
  function placeWord(word, r, c, direction) {
    for (let i = 0; i < word.length; i++) {
      if (direction === "across") {
        grid[r][c + i] = word[i];
      } else {
        grid[r + i][c] = word[i];
      }
    }
  }

  // Function to check if a word can be placed
  function canPlaceWord(word, row, col, direction) {
    for (let i = 0; i < word.length; i++) {
      const r = direction === "across" ? row : row + i;
      const c = direction === "across" ? col + i : col;

      if (grid[r][c] !== "." && grid[r][c] !== word[i]) {
        return false;
      }
    }
    return true;
  }
}
