import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: []
  },
  reducers: {
    add: (state, action) => {
      state.user = action.payload
    },
    remove: state => {
      state.user = null
    }
  }
  }
)

export const { add, remove } = userSlice.actions

export default userSlice.reducer