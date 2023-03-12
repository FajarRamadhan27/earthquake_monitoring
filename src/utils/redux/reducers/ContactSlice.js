import { createSlice } from "@reduxjs/toolkit"

export const ContactSlice = createSlice({
  name: "contact",
  initialState: {
    contacts: [],
  },
  reducers: {
    setContact: (state, value) => {
      state.contacts = value.payload
    }
  }
})

export const { setContact } = ContactSlice.actions
export default ContactSlice.reducer