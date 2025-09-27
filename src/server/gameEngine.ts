// type definitions
export type Player = "X" | "O"
export type CellValue = "X" | "O" | null
export type Board = CellValue[]
export type GameStatus = "playing" | "won" | "draw"

export interface GameState {
    board: Board;
    currentPlayer: Player;
    status: GameStatus;
    winner: Player | null;
    winningline: number[] | null;
}

export type WinState = {
    status: GameStatus,
    winner: Player | null,
    winningline: number[] | null
}

export const winlines: number[][] = [
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

    return (
        {
            board: newBoard,
            currentPlayer: "X",
            status: "playing",
            winner: null,
        }
    )
}

export function isValidMove(game: GameState, move: number) {
        return game.board[move] !== null
    }

export function checkWinner(game: GameState): Player | null {
    for (const [a, b, c] of winlines) {
        if (game.board[a] !== null && game.board[a] === game.board[b] && game.board[b] === game.board[c]) {
            return game.board[a]
        }
    }
    return null;
}

export function isDraw(game: GameState): boolean {
        return game.board.every((cell) => cell !== null)

    }

export function makeMove(game: GameState, move: number): GameState {
    if (!isValidMove(game, move))
        return game

    const gameCopy = structuredClone(game)

    gameCopy.board[move] = gameCopy.currentPlayer

    const winData = checkWinner(gameCopy)
    const isDraw = isDraw(gameCopy)
   
    return {
        game
}

// function makeMove(game: GameState, move: number): GameState {
//     if (!isValidMove()) {
//         game;
//     }

//     const newGame = copyGame();

//     const winner = checkWinner(newGame);
//     if (winner) {
//         newGame.winner = winner;
//     }

//     const isGameOver = checkGameOver();
//     newGame.gameover = isGameOver;

//     if (!winner && !isGameOver) {
//         newGame.player = newGame.player === 'X' ? 'O' : 'X';
//     }

//     return newGame;
// }





    export type { Player, CellValue, Board, GameStatus }
    export default { newGame, makeMove }
