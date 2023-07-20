import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './CategorySlice'
import ProductSlice from './ProductSlice'
import CardSlice from './CardSlice'

export const store = configureStore({
  reducer: {
    categories:categorySlice,
    products:ProductSlice,
    cards:CardSlice
  },
})