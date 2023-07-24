import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './CategorySlice'
import ProductSlice from './ProductSlice'
import CardSlice from './CardSlice'
import ExpertSlice from './ExpertSlice'
import  authSlice  from './AuthSlice'
import TestimonialSlice from './TestimonialSlice'


export const store = configureStore({
  reducer: {
    categories:categorySlice,
    products:ProductSlice,
    cards:CardSlice,
    experts:ExpertSlice,
    user:authSlice,
   testimonials:TestimonialSlice
  },
})