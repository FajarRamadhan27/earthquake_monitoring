import { configureStore } from "@reduxjs/toolkit"
import markerReducer from "./reducers/MarkerSlice"
import formLocationSlice from "./reducers/FormLocationSlice"
import locationSlice from "./reducers/LocationSlice"
import contactSlice from "./reducers/ContactSlice"
import ActivityHistory from "./reducers/ActivityHistory"
import DeviceSlice from "./reducers/DeviceSlice"

export default configureStore({
  reducer: {
    marker: markerReducer,
    formLocation: formLocationSlice,
    location: locationSlice,
    contact: contactSlice,
    activityHistory: ActivityHistory,
    device: DeviceSlice
  }
})