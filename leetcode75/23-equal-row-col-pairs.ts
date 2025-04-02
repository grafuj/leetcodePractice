function equalPairs(grid: number[][]): number {
  const rowLength: number = grid.length;

  // we need to check through all rows in columns and columns in rows

  // rows checker
  function checkRows(first: Array<number>, second: Array<number>): boolean {
    const firstLength: number = first.length;
    if (firstLength !== second.length) {
      console.log("rows different lengths")
    }

    for (let i = 0; i < firstLength; i++) {
      if (first[i] !== second[i]) {
        return false;
      }
    }
    return true;
  }

  // checking rows into columns
  const rowFound: number = 0;
  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < rowLength; j++) {
      // whole row comparison
      // do i have to make the column array? we need to send [3,2,1], [3,1,2] to checkRows

      // what is [3,1,2]? it is [0][0] [1][0] [2][0]

      // this will be checkRows(grid[i], [grid[0][0], grid[1][0], grid[2][0]]
      // if we translate this into i and j, it becomes:
      console.log(grid[i], [grid[j][i]]); // this is an array vs single element
      console.log(checkRows(grid[i], [grid[j][i]]));




      // console.log("grid[i]:", grid[i], [grid[j][i]]);
      // if (checkRows(grid[i], [])){

      // }
      // single element comparison
      // console.log("grid[i]:", grid[i][j], grid[j][i]);
      // if(grid[i][j] === grid[j][i]){

      // }
    }
  }

  console.log("rowFound:", rowFound);

  // checking columns into rows
  const columnFound: number = 0;

  return rowFound + columnFound;
};

// expects one, row 2, col 1 with 2,7,7
console.log(equalPairs([[3, 2, 1], [1, 7, 6], [2, 7, 7]]))
// expects three
// console.log(equalPairs([[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]))