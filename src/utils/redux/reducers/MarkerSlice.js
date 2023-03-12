import { createSlice } from "@reduxjs/toolkit"

const initSelectedMarker = {
  name: null,
  id: null,
  long: null,
  lat: null
}

export const markerSlice = createSlice({
  name: "marker",
  initialState: {
    selectedMarker: initSelectedMarker
  },
  reducers: {
    setSelectedMarker: (state, value) => {
      state.selectedMarker = value.payload
    },
    clearMarker: (state) => {
      state.selectedMarker = initSelectedMarker
    }
  }
})

export const { setSelectedMarker, clearSelectedMarker } = markerSlice.actions
export default markerSlice.reducer