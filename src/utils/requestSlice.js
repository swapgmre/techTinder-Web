import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "connections",
  initialState: null,
  reducers: {
    addRequests: (state, action) => action.payload
  }
});


export const { addRequests } = requestSlice.actions;
export default requestSlice.reducer;