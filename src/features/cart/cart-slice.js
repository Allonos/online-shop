import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  chosenItems: [],
  orderHistory: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const foundItem = state.chosenItems.find(x => x.item.id === action.payload.id);
      if (!foundItem) state.chosenItems.push({ quantity: 1, item: action.payload });
    },
    updateCartItem: (state, action) => {
      const { id, quantity } = action.payload;
      const newArray = state.chosenItems.map(x => {
        if (x.item.id === id) {
          const newItem = {
            quantity,
            item: x.item,
          }

          return newItem;
        } else {
          return x;
        }
      })

      state.chosenItems = newArray;
    },
    removeItemToCart: (state, action) => {
      state.chosenItems = state.chosenItems.filter(item => item.id !== action.payload);
    },
    resetItems: (state, action) => {
      state.chosenItems = [];
    },
    setOrderHistory: (state, action) => {
      const newItems = action.payload;
      if (Array.isArray(newItems)) {
        state.orderHistory = [...state.orderHistory, ...newItems]
      } else {
        state.orderHistory = [...state.orderHistory, newItems]
      }
    },
    clearHistory: (state, action) => {
      state.orderHistory = [];
    }
  },
})

export const { addItemToCart, removeItemToCart, updateCartItem, resetItems, setOrderHistory, clearHistory } = cartSlice.actions

export default cartSlice.reducer