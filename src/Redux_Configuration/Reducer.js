import {createSlice} from '@reduxjs/toolkit';
import data from '../data/data.json';

const WordBankSlice = createSlice({
  name: 'WordBank',
  initialState: data,

  reducers: {},
});

export default WordBankSlice;
