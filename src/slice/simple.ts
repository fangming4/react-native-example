import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type TSimple = {value: number};

const initialize: TSimple = {value: 0};

export const simple = createSlice({
  name: 'simple',
  initialState: initialize,
  reducers: {
    increaseValue: (state: TSimple, action: PayloadAction<TSimple>) => {
      state.value = state.value + 1;
    },
  },
});
