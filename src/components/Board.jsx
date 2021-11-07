import { useSelector } from 'react-redux';
import { selectBoard } from '../slices/boardSlice';
import '../styles/Board.css';
import { MAX_CELLS_IN_ROW } from '../utils/constants';
import Row from './Row';

const Board = () => {
    const board = useSelector(selectBoard);
    console.log(Board);
    const rows = new Array(MAX_CELLS_IN_ROW).fill().map(
        (row, idx) => <Row figures={board[idx]} id={idx} key={idx} rowNum={idx} />
    );

    return (
        <div className='Board'>
            { rows }
        </div>
    )
};

export default Board;