import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  categories: [
    { id: 1, title: 'Избранное' },
    { id: 3, title: 'Горячее' },
    { id: 4, title: 'Второе' },
    { id: 5, title: 'Напитки' },
    { id: 6, title: 'Десерты' },
    { id: 7, title: 'Салаты' },
  ],
  activeCategory: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setActiveCategory(state, action) {
      state.activeCategory = action.payload;
    },
  },
});

const { actions, reducer } = categoriesSlice;
export const { setActiveCategory } = actions;

export default reducer;
