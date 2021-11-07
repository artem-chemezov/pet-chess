import { createSlice,  } from '@reduxjs/toolkit';
import { MAX_CELLS_IN_ROW } from '../utils/constants';
import { setAvilableForMoveReducer, setStateOfCellReducer } from './reducers';

const initialFiguresPosition = () => {
  const figures = new Array(MAX_CELLS_IN_ROW).fill(new Array(MAX_CELLS_IN_ROW).fill({ type: null }));
  figures[0] = [{ type: 'ROOK', isWhite: true }, { type: 'KNIGHT', isWhite: true }, { type: 'BISHOP', isWhite: true }, { type: 'QWEEN', isWhite: true }, { type: 'KING', isWhite: true }, { type: 'BISHOP', isWhite: true }, { type: 'KNIGHT', isWhite: true }, { type: 'ROOK', isWhite: true }];
  figures[1] = new Array(MAX_CELLS_IN_ROW).fill({ type: 'PAWN', isWhite: true });
  figures[6] = new Array(MAX_CELLS_IN_ROW).fill({ type: 'PAWN', isWhite: false });
  figures[7] = [{ type: 'ROOK', isWhite: false }, { type: 'KNIGHT', isWhite: false }, { type: 'BISHOP', isWhite: false }, { type: 'KING', isWhite: false }, { type: 'QWEEN', isWhite: false }, { type: 'BISHOP', isWhite: false }, { type: 'KNIGHT', isWhite: false }, { type: 'ROOK', isWhite: false }];
  return figures;
}

const initialState = {
  value: initialFiguresPosition(),
};

export const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
      setAvilableForMove: setAvilableForMoveReducer,
      setStateOfCell: setStateOfCellReducer,
    },
});

export const { setAvilableForMove, setStateOfCell } = boardSlice.actions;
export const selectBoard = (state) => state.board.value;
// export const selectBoardCell = pos => (state) => state.board.value[pos.y][pos.x];
export const selectIsAvailableCell = pos => (state) => state.board.value[pos.y][pos.x].available;

export default boardSlice.reducer;