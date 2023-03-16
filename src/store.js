import { configureStore, createSlice } from '@reduxjs/toolkit'

// Navbar section
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

// Hide li tag as initial value on mobile (Navbar section)
const getInitialState = () => {
  return {
    toggleSlice: {
      toggle: window.innerWidth >= 1024 ? true : false,
    },
  };
};


// About section
const dataSlice = createSlice({
  name : 'data',
  initialState : { languages: [], skills: [] },
  reducers: {
    setLanguages: (state, action) => {
      state.languages = action.payload;
    },
    setSkills: (state, action) => {
      state.skills = action.payload;
    }
  }
});
export const { setLanguages, setSkills } = dataSlice.actions;


// Goals section
const goalsSlice = createSlice({
  name : 'goals',
  initialState : { activeBtn: 'front' },
  reducers: {
    setActiveBtn: (state, action) => {
      state.activeBtn = action.payload;
    },
  },
});
export const { setActiveBtn } = goalsSlice.actions;




// export
export default configureStore({
  reducer: {
    toggleSlice : toggleSlice.reducer,
    dataSlice : dataSlice.reducer,
    goalsSlice : goalsSlice.reducer
  },
  preloadedState: getInitialState(),
});


