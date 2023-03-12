import { createSlice } from "@reduxjs/toolkit";

export const locationSlice = createSlice({
  name: "location",
  initialState: {
    allLocation: []
  },
  reducers: {
    setAllLocation: (state, value) => {
      state.allLocation = value.payload
    },
  }
})

export const { setAllLocation } = locationSlice.actions
export default locationSlice.reducer