

let initialBoard = [
    [0, 0, 0, 0, 0, 2, 1, 0, 0],
    [0, 0, 4, 0, 0, 8, 7, 0, 0],
    [0, 2, 0, 3, 0, 0, 9, 0, 0],
    [6, 0, 2, 0, 0, 3, 0, 4, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 5, 0, 6, 0, 0, 3, 0, 1],
    [0, 0, 3, 0, 0, 5, 0, 8, 0],
    [0, 0, 8, 2, 0, 0, 5, 0, 0],
    [0, 0, 9, 7, 0, 0, 0, 0, 0]
];

        // Initialising
        console.log("Solving board:");
        printBoard(initialBoard);

        // Set up the stack
        let stack = [];
        stack.push(initialBoard);

        while (stack.length > 0) {
            let board = stack.pop();
            let slot = getEmptySlot(board);

            if (! slot) {
                console.log("Solved!");
                printBoard(board);
                return;
            }

            for (let guess = 1; guess <= 9; guess++) {
                if (isValidInSlot(guess, slot, board)) {
                    stack.push(updateBoard(guess, slot, board));
                }
            }
        }
    

    function getEmptySlot(board)  {

        for ( let row = 0; row < board.length; row++){
            for ( let col = 0; col < board[row].length; col++){
                if ( board[row][col] == 0){
                    return [row, col];
                }
            }
        }
        return null;
    }

    function isValidInSlot(guess, slot, board)  {
        return isValidInRow(slot[0], guess, board) &&
                isValidInCol(slot[1], guess, board) &&
                isValidInSquare(slot, guess, board);
    }

    function isValidInRow(row, guess, board) {
       // TODO implementy
    }

    function isValidInCol(col, guess, board) {
        // TODO - implement
        return false;
    }

    function isValidInSquare( slot, guess, board) {
        let squareX = Math.floor(slot[0] / 3);
        let squareY = Math.floor(slot[1] / 3);

        // TODO implement check within this square
        return false;
    }


    function updateBoard(guess, slot, board) {
        let newBoard = [9];
        for (let row = 0; row < 9; row++) {
            newBoard[row] = [...board[row]];
        }
        newBoard[slot[0]][slot[1]] = guess;
        return newBoard;
    }

    function printBoard(board) {
   
        console.log("*** TODO *** ");
    }


