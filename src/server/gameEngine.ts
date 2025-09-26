// type definitions
type Player = "X" | "O"
type CellValue = "X" | "O" | null
type Board = CellValue[]
type GameStatus = "playing" | "won" | "draw"

interface GameState {
    board: Board;
    currentPlayer: Player;
    status: GameStatus;
    winner: Player | null;
    winningline: number[];
}

const winlines: number[][] = [
    // rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // cols
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diagonals
    [0, 4, 8],
    [2, 4, 6],
];

export function newGame(): GameState {
   const newBoard = Array<CellValue>(9).fill(null);

    return(
      { board: newBoard,
        currentPlayer: "X",
        status: "playing",
        winner: null,
    }
   )
}

function makeMove(game: GameState): GameState {
    cell = game.board[]
}

export function checkForGameOver(game: GameState): GameState {
    // 1. check for win
    for (const [a, b, c] of winlines){
         if(game.board[a] !==null && game.board[a] === game.board[b] && game.board[b] === game.board[c]){
            game.status = "won";
            game.winner = game.board[a];
            game.winningline = [a, b, c];
         }

    }
    // 2. check for tie
    const boardIsFull = game.board.every((cell)=> cell !== null)
    
    if(boardIsFull){game.status = "draw"}

    return(
        game
    )

}

export type { Player, CellValue, Board, GameStatus }