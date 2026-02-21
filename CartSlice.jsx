import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addItem(state, action) {
      const plant = action.payload;
      const existing = state.items.find((i) => i.name === plant.name);
      if (existing) {
        existing.quantity += plant.quantity;
      } else {
        state.items.push(plant);
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter((i) => i.name !== action.payload);
    },
    updateQuantity(state, action) {
      const { name, quantity } = action.payload;
      const item = state.items.find((i) => i.name === name);
      if (item) {
        item.quantity = quantity;
      }
    }
  }
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
