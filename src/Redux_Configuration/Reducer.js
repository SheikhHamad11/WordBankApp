import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import data from '../data/data.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

const GetData = async () => {
  try {
    const tempdata = await AsyncStorage.getItem('WordBank');
    // console.log(`GetItemData: ${tempdata}`);
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
    // console.log(`Store Data: ${storedata}`);
    return JSON.parse(storedata);
  }
});

const WordBankSlice = createSlice({
  name: 'WordBank',
  initialState: {data: {}}, // Adjust your initial state accordingly

  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(StoreData.pending, state => {
        // Handle loading state if needed
      })
      .addCase(StoreData.fulfilled, (state, action) => {
        state.data = action.payload;
        // Handle other state modifications if needed
      })
      .addCase(StoreData.rejected, (state, action) => {
        // Handle error state if needed
      });
  },
});

export default WordBankSlice;
export {StoreData}; // Export the action creator
