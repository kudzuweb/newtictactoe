import type { CellValue } from '../server/gameEngine'

// a component that serves a div with a button that takes a click and passes void up to board

function Tile({value, onClick}: {value: CellValue; onClick: ()=> void; }) {
<div>
    <button>{value}</button>
</div>
}

export default Tile