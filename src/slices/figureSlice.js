import { createSlice,  } from '@reduxjs/toolkit';
import { setActiveFigureReducer } from './reducers';

const initialState = {
  figure: null,
};

export const figureSlice = createSlice({
    name: 'activeFigure',
    initialState,
    reducers: {
      setActiveFigure: setActiveFigureReducer, 
    },
});

export const { setActiveFigure } = figureSlice.actions;
export const selectActiveFigure = (state) => state.activeFigure.figure;
export default figureSlice.reducer;