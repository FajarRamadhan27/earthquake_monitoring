import { configureStore } from "@reduxjs/toolkit"
import markerReducer from "./reducers/MarkerSlice"
import formLocationSlice from "./reducers/FormLocationSlice"
import locationSlice from "./reducers/LocationSlice"
import contactSlice from "./reducers/ContactSlice"

export default configureStore({
  reducer: {
    marker: markerReducer,
    formLocation: formLocationSlice,
    location: locationSlice,
    contact: contactSlice
  }
})