import { useSelector, useDispatch } from 'react-redux';
import { selectIsAvailableCell } from '../slices/boardSlice';
import { setStateOfCell } from '../slices/boardSlice';
import { selectActiveFigure, setActiveFigure } from '../slices/figureSlice';
import '../styles/Cell.css';
import Bishop from './figures/Bishop';
import King from './figures/King';
import Knight from './figures/Knight';
import Pawn from './figures/Pawn';
import Qween from './figures/Qween';
import Rook from './figures/Rook';

const Cell = props => {

    let figure;
    const dispatch = useDispatch();
    const availabilityCell = useSelector(selectIsAvailableCell({x: props.cellNum, y: props.rowNum}));
    const activeFigure = useSelector(selectActiveFigure);

    const onClick = () => {
        if (!!activeFigure) {
            if (availabilityCell) {
                dispatch(setStateOfCell({ x: props.cellNum, y: props.rowNum, type: activeFigure.type, isWhite: activeFigure.isWhite }));
                dispatch(setStateOfCell({ x: activeFigure.x, y: activeFigure.y, type: null, isWhite: null }));
            }
            dispatch(setActiveFigure(null));
        }
    }

    switch (props.figure.type) {
        case 'PAWN':
            figure = <Pawn isWhite={props.figure.isWhite} x={props.cellNum} y={props.rowNum} />
            break
        case "ROOK":
            figure = <Rook isWhite={props.figure.isWhite} x={props.cellNum} y={props.rowNum} />
            break
        case "KNIGHT":
            figure = <Knight isWhite={props.figure.isWhite} x={props.cellNum} y={props.rowNum} />
            break
        case "BISHOP":
            figure = <Bishop isWhite={props.figure.isWhite} x={props.cellNum} y={props.rowNum} />
            break
        case "KING":
            figure = <King isWhite={props.figure.isWhite} x={props.cellNum} y={props.rowNum} />
            break
        case "QWEEN":
            figure = <Qween isWhite={props.figure.isWhite} x={props.cellNum} y={props.rowNum} />
            break
        default:
            figure = null;
    }

    const styleForCell = 'availableWrapper ' + 
        (props.figure.available === 'AVAILABLE' ? (!!figure) ? 'availableForKill ' : 'availableForMove ' : 
        (props.figure.available  === 'KILL' && !!figure ? 'availableForKill ' : '' ));

    return (
        <div className={'Cell ' + (props.isWhite ? 'white-cell ' : '')} >
            <div className={styleForCell} onClick={onClick} >
                { figure }
            </div>
        </div>
    )
};

export default Cell;