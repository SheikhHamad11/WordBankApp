import {configureStore} from '@reduxjs/toolkit';
import newProjectSlice from './Reducer';

const store = configureStore({
  reducer: {
    newProject: newProjectSlice.reducer,
  },
});
export default store;
