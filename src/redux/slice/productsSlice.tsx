import { createSlice } from '@reduxjs/toolkit'
export interface Item {
  id: number
  name: string
  href: string
}
export interface Item1 {
  items: Item[]
}

const initialState: Item1 = {
  items: []
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addItmensProducts: (state, action) => {
      state.items = action.payload
    }
  }
})

export const { addItmensProducts } = productsSlice.actions
export default productsSlice.reducer
