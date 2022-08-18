import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  categories: [
    { id: 1, title: 'Избранное' },
    { id: 2, title: 'Всё' },
    { id: 3, title: 'Горячее' },
    { id: 4, title: 'Второе' },
    { id: 5, title: 'Напитки' },
    { id: 6, title: 'Десерты' },
    { id: 7, title: 'Салаты' },
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
