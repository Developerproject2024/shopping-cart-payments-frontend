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

export const shoppingSlice = createSlice({
  name: 'shopping',
  initialState,
  reducers: {
    addItmensShopping: (state, action) => {
      state.items = action.payload
    }
  }
})

export const { addItmensShopping } = shoppingSlice.actions
export default shoppingSlice.reducer
