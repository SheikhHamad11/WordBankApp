import {configureStore} from '@reduxjs/toolkit';
<<<<<<< HEAD
import newProjectSlice from './Reducer';
=======
import WordBankSlice, {StoreData} from './Reducer';
>>>>>>> 1e70226e65360686cd46d8b4e244bd14c7bc6dd0

const store = configureStore({
  reducer: {
    newProject: newProjectSlice.reducer,
  },
});
store.dispatch(StoreData());
export default store;
