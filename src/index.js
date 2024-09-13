
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!Array.isArray(matrix) || matrix.length === 0) {
    return [];
  }

  return matrix.reduce((acc, row, index) => {
    if (index % 2 !== 0) {
      row.reverse();
    }
    return acc.concat(row);
  }, []);
}
