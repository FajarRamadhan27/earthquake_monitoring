import { createSlice } from "@reduxjs/toolkit"

const initialData = {
  location_id: null,
  name: null,
}

export const FormLocationSlice = createSlice({
  name: "formLocation",
  initialState: {
    isFormOpen: false,
    data: initialData
  },
  reducers: {
    toogleLocationForm: (state) => {
      state.isFormOpen = !state.isFormOpen
    },
    setLocationData: (state, value) => {
      state.data = value.payload
    },
    clearLocationData: (state) => {
      state.data = initialData
    }
  }
})

export const { toogleLocationForm, setLocationData, clearLocationData } = FormLocationSlice.actions
export default FormLocationSlice.reducer