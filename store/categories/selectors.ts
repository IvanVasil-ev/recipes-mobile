import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../rootReducer';

export const getState = (state: RootState) => state.categoriesReducer;

export const getCategories = createSelector([getState], (state) => state.categories);
