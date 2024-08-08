import { configureStore } from '@reduxjs/toolkit'
import itemsNavReducer from './slice/itemsNavSlice'
import productsReducer from './slice/productsSlice'
import shoppingReducer from './slice/shoppingSlice'
import {
  loadFromLocalStorage,
  saveToLocalStorage
} from '../utils/localStorageUtils'

const preloadedState = loadFromLocalStorage()

export const store = configureStore({
  reducer: {
    itemsNav: itemsNavReducer,
    products: productsReducer,
    shopping: shoppingReducer
  },
  preloadedState
})

store.subscribe(() => {
  saveToLocalStorage(store.getState())
})
