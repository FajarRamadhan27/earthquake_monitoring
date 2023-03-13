import { createSlice } from "@reduxjs/toolkit"

export const DeviceSlice = createSlice({
  name: "device",
  initialState: {
    devices: [],
  },
  reducers: {
    setDevice: (state, value) => {
      state.devices = value.payload
    }
  }
})

export const { setDevice } = DeviceSlice.actions
export default DeviceSlice.reducer