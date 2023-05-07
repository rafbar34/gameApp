import {createSlice} from '@reduxjs/toolkit';
import {gamesData} from '../../constants/gamesData';
const initialState = {
  game: gamesData,
  id: null,
};
export const getData = createSlice({
  name: 'getData',
  initialState,
  reducers: {
    getGame: (state, action) => {
      const gameData = gamesData.filter((gameData) => {
        return Number(gameData.id) === Number(state.id);
      });
      state.id = action.payload.id;
      state.game = gameData;
    },
  },
});
export const {getGame} = getData.actions;

export default getData.reducer;
