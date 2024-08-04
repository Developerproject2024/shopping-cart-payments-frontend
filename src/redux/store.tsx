import { configureStore } from '@reduxjs/toolkit'
import itemsNavReducer from './slice/itemsNavSlice'

export const store = configureStore({
  reducer: {
    itemsNav: itemsNavReducer
  }
})
