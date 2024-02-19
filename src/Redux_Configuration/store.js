import {configureStore} from '@reduxjs/toolkit';
import WordBankSlice from './Reducer';

const store = configureStore({
  reducer: {
    WordBank: WordBankSlice.reducer,
  },
});
export default store;
