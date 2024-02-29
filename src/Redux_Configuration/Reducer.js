import {createSlice} from '@reduxjs/toolkit';
import data from '../data/data.json';

const newProjectSlice = createSlice({
  name: 'newProject',
  initialState: data,

  reducers: {},
});

export default newProjectSlice;
