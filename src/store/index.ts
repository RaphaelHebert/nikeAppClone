import { configureStore } from '@reduxjs/toolkit';

import { productsSlice } from './productSlice';

const store = configureStore({
  reducer: productsSlice.reducer,
});

export { store };
