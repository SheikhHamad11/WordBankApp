import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import data from '../data/data.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

const GetData = async () => {
  try {
    const tempdata = await AsyncStorage.getItem('WordBank');
    return tempdata;
  } catch (error) {
    console.error('Error retrieving data:', error);
    return null;
  }
};
const SetData = async () => {
  try {
    await AsyncStorage.setItem('WordBank', JSON.stringify(data));
  } catch (error) {
    console.error('Error storing data:', error);
  }
};
const StoreData = createAsyncThunk('slice/fetchData', async () => {
  let storedata = await GetData();
  if (!storedata) {
    await SetData();
    return data;
  } else {
    return JSON.parse(storedata);
  }
});
const WordBankSlice = createSlice({
  name: 'WordBank',
  initialState: {data: {}},
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(StoreData.pending, state => {
      })
      .addCase(StoreData.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(StoreData.rejected, (state, action) => {
      });
  },
});

export default WordBankSlice;
export {StoreData};
