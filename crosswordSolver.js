function crosswordSolver(str, words) {
  // Check if the string(str) and words are valid
  if (!str || !words || words.length === 0) {
    console.log("Error");
    return;
  }

    // Split str into rows
    const rows = str.split('\n');
    const cols = rows[0].length;
    const grid = rows.map(row => row.split(''));

      // Function to place a word in the grid
    function placeWord(word, c, r, direction) {
        for (let i = 0; i < word.length; i++) {
            if (direction === 'across') {
                grid[c][r + i] = word[i];
            } else {
                grid[c + i][r] = word[i];
            }
        }
    }
}
