import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  products: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers:{
    addToCart: (state, action) => {
      const cartItem = state.products.find(item => item.id === action.payload.id)
      if(cartItem){
        cartItem.quantity += action.payload.quantity
        return
      }
      state.products.push(action.payload)
    },
    removeItem: (state, action) => {
      state.products = state.products.filter(item => item.id !== action.payload )
    },
    resetCart: (state) => {
      state.products = []
    }
  }
})

export const { addToCart, removeItem, resetCart } = cartSlice.actions

export default cartSlice.reducer