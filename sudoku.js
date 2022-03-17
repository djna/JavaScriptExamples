let row = 0;
0.toString();
let col = 0;
let matrix = [
    [0, 4, 0, 0, 0, 0, 1, 7, 9],
    [0, 0, 2, 0, 0, 8, 0, 5, 4],
    [0, 0, 6, 0, 0, 5, 0, 0, 8],
    [0, 8, 0, 0, 7, 0, 9, 1, 0],
    [0, 5, 0, 0, 9, 0, 0, 3, 0],
    [0, 1, 9, 0, 6, 0, 0, 4, 0],
    [3, 0, 0, 4, 0, 0, 7, 0, 0],
    [5, 7, 0, 1, 0, 0, 2, 0, 0],
    [9, 2, 8, 0, 0, 0, 0, 6, 0]
];

matrix = [
    [0, 0, 0, 0, 5, 4, 3, 0, 6],
    [0, 0, 0, 0, 0, 3, 2, 7, 0],
    [0, 0, 0, 7, 2, 0, 0, 0, 1],
    [9, 0, 0, 0, 7, 0, 0, 5, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [8, 2, 0, 0, 1, 0, 0, 0, 9],
    [3, 0, 0, 0, 6, 1, 0, 0, 0],
    [0, 4, 6, 9, 0, 0, 0, 0, 0],
    [7, 0, 1, 5, 4, 0, 0, 0, 6]
];

let solved = "Not solved";
function sudoku(matrix, row, col) {
    if (row == 9) {
        console.log(matrix);
        solved = "solved";
        return;
    }

    let next_row = 0;
    let next_col = 0;
    if (col == 8) {
        next_col = 0;
        next_row = row + 1;
    }
    else {
        next_col = col + 1;
        next_row = row;
    }
    if (matrix[row][col] != 0) {
        sudoku(matrix, next_row, next_col);
    }
    else {
        for (let i = 0; i <= 9; i++) {
            if (isSafe(matrix, row, col, i) == true) {
                matrix[row][col] = i;

                sudoku(matrix, next_row, next_col);
                matrix[row][col] = 0;
            }
        }

    }
    return false;
}

function isSafe(matrix, row, col, value) {

    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][col] == value) {
            return false;
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        if (matrix[row][i] == value) {
            return false;
        }
    }

    let x = Math.floor(row / 3) * 3;
    let y = Math.floor(col / 3) * 3;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (matrix[x + i][y + j] == value) {
                return false;
            }
        }
    }
    return true;
}

sudoku(matrix, row, col);
console.log(solved );