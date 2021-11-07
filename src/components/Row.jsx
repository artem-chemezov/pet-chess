import { MAX_CELLS_IN_ROW } from '../utils/constants';
import Cell from './Cell';
import '../styles/Board.css';

const Row = props => {

    const cellsInRow = new Array(MAX_CELLS_IN_ROW).fill().map(
        (el, idx) => <Cell figure={props.figures[idx]} isWhite={(idx + props.rowNum) % 2} key={idx} cellNum={idx} rowNum={props.rowNum}/>
    );

    return (
        <div className='Row'>
            { cellsInRow }
        </div>
    )
}

export default Row;