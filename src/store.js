import { configureStore, createSlice } from '@reduxjs/toolkit'

// Navbar section - 1
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

// Navbar section - 2
const colorSlice = createSlice({
  name : 'color',
  initialState : { isNavColored : false },
  reducers : {
    setIsNavColored: (state, action) => {
      state.isNavColored = action.payload;
    }
  }
});
export const { setIsNavColored } = colorSlice.actions;


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


// Review section
const words = ["💗HTML💗", "💞CSS💞", "💕React💕"];
export const getWords = () => words;

const reviewSlice = createSlice({
  name : 'review',
  initialState : { currentSlide: 0 },
  reducers: {
    setCurrentSlide: (state, action) => {
      state.activeBtn = action.payload;
    },
    incrementCurrentSlide: (state) => {
      state.currentSlide = (state.currentSlide + 1) % words.length; // Repeating slices indefinitely with %
    },
  },
});
export const { setCurrentSlide, incrementCurrentSlide } = reviewSlice.actions;




// export
export default configureStore({
  reducer: {
    toggleSlice : toggleSlice.reducer,
    dataSlice : dataSlice.reducer,
    goalsSlice : goalsSlice.reducer,
    colorSlice : colorSlice.reducer,
    reviewSlice : reviewSlice.reducer
  },
  preloadedState: getInitialState(),
});


