import {configureStore} from '@reduxjs/toolkit';
import WordBankSlice, {StoreData} from './Reducer';

const store = configureStore({
  reducer: {
    WordBank: WordBankSlice.reducer,
  },
});
store.dispatch(StoreData());
export default store;
