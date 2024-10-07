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

  // Iterate through the grid to place words
  for (let word of words) {
    let placed = false;

    for (let row = 0; row < rows.length; row++) {
      for (let col = 0; col < cols; col++) {
        // Check for horizontal placement
        if (canPlaceWord(word, row, col, "across")) {
          placeWord(word, row, col, "across");
          placed = true;
          break;
        }
        // Check for vertical placement
        if (canPlaceWord(word, row, col, "down")) {
          placeWord(word, row, col, "down");
          placed = true;
          break;
        }
      }
      if (placed) break;
    }

    // If a word couldn't be placed, print error and exit
    if (!placed) {
      console.log("Error");
      return;
    }
  }

  // Join rows into string and print solved puzzle
  const solved = grid.map((row) => row.join("")).join("\n");
  console.log(solved);
}

const str = `2001\n0..0\n1000\n0..0`;
const words = ["casa", "alan", "ciao", "anta"];
crosswordSolver(str, words);
