import { combineReducers } from 'redux';

import applicationReducer from './application/reducer';
import categoriesReducer from './categories/reducer';

export const rootReducer = combineReducers({
  applicationReducer,
  categoriesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
