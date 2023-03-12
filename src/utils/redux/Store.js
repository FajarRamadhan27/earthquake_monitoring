import { configureStore } from "@reduxjs/toolkit"
import markerReducer from "./reducers/MarkerSlice"

export default configureStore({
  reducer: {
    marker: markerReducer
  }
})