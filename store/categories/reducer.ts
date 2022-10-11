import { createSlice } from '@reduxjs/toolkit';
import { categories as C } from '../../constants/categories';

export const initialState = {
  categories: [
    { id: C.FAVOURITES, title: 'Избранное' },
    { id: C.HOT, title: 'Горячее' },
    { id: C.SALADS, title: 'Салаты' },
    { id: C.BAKING, title: 'Выпечка' },
    { id: C.DRINKS, title: 'Напитки' },
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
