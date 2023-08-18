import { configureStore} from '@reduxjs/toolkit'
import categorySlice from './CategorySlice'
import ProductSlice from './ProductSlice'
import CardSlice from './CardSlice'
import ExpertSlice from './ExpertSlice'




export const store = configureStore({
  reducer: {
    categories: categorySlice,
    products: ProductSlice,
    cards: CardSlice,
    experts: ExpertSlice,

 
  },
 
})
