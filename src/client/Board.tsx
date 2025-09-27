import Tile from './Tile'
import { useState } from "react";
import * as gameEngine from '../server/gameEngine'
import type { Player, CellValue, Board, GameStatus } from '../server/gameEngine'

function Board() {
    // piece of state to track board clientside
    const [board, setBoard] = useState<Mark[]>(Array(9).fill(null))
    //
    function handleClick(i: number) {
        const nextGameState = gameEngine.makeValidMove(i);

        setBoard(nextGameState.board);
    }

    return (
        <div className='grid grid-cols-3 gap-2'>
            {cells.map(i => <Square key={i} value={board[i]} onClick={() => handleClick(i)} />)}
        </div>
    );
}

export default { Board }