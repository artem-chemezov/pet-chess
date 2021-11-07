import { configureStore } from '@reduxjs/toolkit';
import boardReducer from '../slices/boardSlice';
import figureSlice from '../slices/figureSlice';

export const store = configureStore({
  reducer: {
    board: boardReducer,
    activeFigure: figureSlice,
  },
});
