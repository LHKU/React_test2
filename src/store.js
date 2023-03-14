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


// Hide li tag as initial value on mobile (Navbar)
const getInitialState = () => {
  return {
    toggleSlice: {
      toggle: window.innerWidth >= 1024 ? true : false,
    },
  };
};


export default configureStore({
  reducer: {
    toggleSlice: toggleSlice.reducer,
  },
  preloadedState: getInitialState(),
});


