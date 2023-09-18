import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    items: {},
  },
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      if (!state.items[id]) {
        state.items[id] = { ...action.payload, quantity: 1 };
      } else {
        state.items[id].quantity += 1;
      }
    },

    // increment: (state, action) => {
    //   const { id } = action.payload;
    //   if (state.items[id]) {
    //     state.items[id].quantity += 1;
    //   }
    // },

    decrement: (state, action) => {
      const { id } = action.payload;
      if (state.items[id]) {
        if (state.items[id].quantity > 1) {
          state.items[id].quantity -= 1;
        } else {
          delete state.items[id];
        }
      }
    },

    clearOrder: (state) => {
      state.items = {};
    },
  },
});

export const { addToCart, increment, decrement, clearOrder } =
  orderSlice.actions;

export default orderSlice.reducer;
