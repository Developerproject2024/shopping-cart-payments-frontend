import { createSlice, PayloadAction } from '@reduxjs/toolkit'
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

export const itemsNavSlice = createSlice({
  name: 'itemsNav',
  initialState,
  reducers: {
    addItmensNav: (state, action: PayloadAction<Item[]>) => {
      state.items = action.payload
    }
  }
})

export const { addItmensNav } = itemsNavSlice.actions
export default itemsNavSlice.reducer
