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
    winningline: number[] | null;
}

type WinState = {
    status: GameStatus,
    winner: Player | null,
    winningline: number[] | null
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

    return (
        {
            board: newBoard,
            currentPlayer: "X",
            status: "playing",
            winner: null,
        }
    )
}

function makeMove(game: GameState, move: number): GameState {
    if (!isValidMove(game, move))
        return game

    const gameCopy = structuredClone(game)

    gameCopy.board[move] = gameCopy.currentPlayer

    const winData = checkWinner(gameCopy)
    const isDraw = isGameOver(gameCopy)
    // if (winData.winner !== null && isGameOver(gameCopy) === false)
    //     return gameCopy
    // return {...gameCopy,
    //     winner: winData.winner
    // }
    return {
        ...game,
        winner: winData.winner,
        winningline: winData.winningline,
        status: winData.status
    }
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

export function checkWinner(game: GameState): WinState {
    for (const [a, b, c] of winlines) {
        if (game.board[a] !== null && game.board[a] === game.board[b] && game.board[b] === game.board[c]) {
            return {
                status: "won",
                winner: game.board[a],
                winningline: [a, b, c]
            }
        }
    }
    return {status: "playing",
        winner: null,
        winningline: null
    };
}

export function isDraw(game: GameState): boolean {
    return game.board.every((cell) => cell !== null)

}

function isValidMove(game: GameState, move: number) {
    return game.board[move] !== null
}

export type { Player, CellValue, Board, GameStatus }