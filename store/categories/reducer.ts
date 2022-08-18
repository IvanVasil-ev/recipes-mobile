import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  categories: [
    { id: 1, title: 'Избранное' },
    { id: 2, title: 'Горячее' },
    { id: 3, title: 'Второе' },
    { id: 4, title: 'Напитки' },
    { id: 5, title: 'Десерты' },
    { id: 6, title: 'Салаты' },
  ],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
});

const { actions, reducer } = categoriesSlice;
// export const {} = actions;

export default reducer;
