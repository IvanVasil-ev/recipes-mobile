import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};

const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {},
});

const { actions, reducer } = applicationSlice;
// export const {} = actions;

export default reducer;
