import {configureStore} from '@reduxjs/toolkit';
import getDataReducer from './redux/features/getData';

export const store = configureStore({
  reducer: {getData: getDataReducer},
});
