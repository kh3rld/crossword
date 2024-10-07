const crosswordSolver = require('./crosswordSolver'); 
  test("should solve valid crossword", () => {
    const puzzle = `2001\n0..0\n1000\n0..0`;
    const words = ["casa", "alan", "ciao", "anta"];
    crosswordSolver(puzzle, words);
    expect(consoleSpy).toHaveBeenCalledWith(`casa\n0..0\nalan\n0..0`);
  });

  test("should return error for invalid crossword input", () => {
    const puzzle = `invalid\npuzzle\ninput`;
    const words = ["test"];
    crosswordSolver(puzzle, words);
    expect(consoleSpy).toHaveBeenCalledWith("Error");
  });

  test("should return error if word count does not match starts", () => {
    const puzzle = `2001\n0..0\n1000\n0..0`;
    const words = ["casa", "alan"]; // Fewer words than needed
    crosswordSolver(puzzle, words);
    expect(consoleSpy).toHaveBeenCalledWith("Error");
  });

  test("should return error for duplicate words", () => {
    const puzzle = `2001\n0..0\n1000\n0..0`;
    const words = ["casa", "alan", "ciao", "alan"]; // Duplicate word
    crosswordSolver(puzzle, words);
    expect(consoleSpy).toHaveBeenCalledWith("Error");
  });
  const hasDuplicates = require('./crosswordSolver').hasDuplicates;

describe("hasDuplicates", () => {
  test("should return true if array has duplicates", () => {
    const arr = ["a", "b", "a"];
    expect(hasDuplicates(arr)).toBe(true);
  });

  test("should return false if array has no duplicates", () => {
    const arr = ["a", "b", "c"];
    expect(hasDuplicates(arr)).toBe(false);
  });

  test("should return false for empty array", () => {
    const arr = [];
    expect(hasDuplicates(arr)).toBe(false);
  });

  test("should handle array with one element", () => {
    const arr = ["a"];
    expect(hasDuplicates(arr)).toBe(false);
  });

  test("should handle array with mixed types", () => {
    const arr = [1, "1", 2];
    expect(hasDuplicates(arr)).toBe(false);
  });
});