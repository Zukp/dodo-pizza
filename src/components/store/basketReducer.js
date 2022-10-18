import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const basketReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const Item = action.payload;
      const exitest = state.items.find((item) => item.itemId === Item.id);
      if (!exitest) {
        state.items.push({
          itemId: Item.id,
          name: Item.name,
          images: Item.images,
          price: Item.price,
          description: Item.description,
          card: Item.card,
        });
      } else {
        exitest.price = exitest.price + Item.price;
        exitest.card = exitest.card + Item.card;
      }
    },
  },
});

export const Action = basketReducer.actions;
export default basketReducer;
