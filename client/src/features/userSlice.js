import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: {},
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInSuccess: (state, action) => {
      console.log("signInSuccess:", action.payload);
      state.currentUser = action.payload;
    },
  },
});

export const { signInSuccess } = userSlice.actions;

export default userSlice.reducer;
