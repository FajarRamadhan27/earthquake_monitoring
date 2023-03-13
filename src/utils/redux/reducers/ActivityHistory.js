import { createSlice } from "@reduxjs/toolkit"

export const ActivityHistorySlice = createSlice({
  name: "activityHistory",
  initialState: {
    histories: [],
  },
  reducers: {
    setActivityHistories: (state, value) => {
      state.histories = value.payload
    }
  }
})

export const { setActivityHistories } = ActivityHistorySlice.actions
export default ActivityHistorySlice.reducer