import { configureStore, createSlice } from '@reduxjs/toolkit'

// Navbar
const toggleSlice = createSlice({
  name : 'toggle',
  initialState : { toggle : true },
  reducers : {
    setToggle: (state, action) => {
      state.toggle = action.payload;
    }
  }
});

export const { setToggle } = toggleSlice.actions;

export default configureStore({
  reducer: { 
    toggleSlice : toggleSlice.reducer
  }
}) 



