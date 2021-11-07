import { MAX_CELLS_IN_ROW } from "../utils/constants";

const makeAvailableCellsNull = cells => {
  cells.forEach(
    row => row
      .filter(state => state.available)
      .forEach(state => state.available = false)
  );
}

const checkCellIndex = (x, y) => ( x < MAX_CELLS_IN_ROW && x >= 0 ) && ( y < MAX_CELLS_IN_ROW && y >= 0 );

export const setAvilableForMoveReducer = (state, action) => {
    makeAvailableCellsNull(state.value);

    action.payload.cells.forEach(pos => {
      if (checkCellIndex(pos.x, pos.y) && 
        (state.value[pos.y][pos.x].type === null || action.payload.activeFigure.isWhite !== state.value[pos.y][pos.x].isWhite))
        state.value[pos.y][pos.x].available = pos.availabilityType;
  
    });
};

export const setStateOfCellReducer = (state, action) => {
  state.value[action.payload.y][action.payload.x] = { type: action.payload.type, isWhite: action.payload.isWhite };
  makeAvailableCellsNull(state.value);
}

export const setActiveFigureReducer = (state, action) => {
  if (!!action.payload)
    state.figure = { x: action.payload.x, y: action.payload.y, type: action.payload.type, isWhite: action.payload.isWhite }

  else state.figure = null;
}