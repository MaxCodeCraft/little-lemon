import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  occasion: false,
  guests: false,
  time: false,
  date: false,
  name: false,
  phone: false,
  email: false,
};

const formerrorSlice = createSlice({
  name: "formerrors",
  initialState,
  reducers: {
    setOccasionError: (state, action) => {
      state.occasion = action.payload;
    },
    setGuestsError: (state, action) => {
      state.guests = action.payload;
    },
    setTimeError: (state, action) => {
      state.time = action.payload;
    },
    setDateError: (state, action) => {
      state.date = action.payload;
    },
    setNameError: (state, action) => {
      state.name = action.payload;
    },
    setPhoneError: (state, action) => {
      state.phone = action.payload;
    },
    setEmailError: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const {
  setOccasionError,
  setGuestsError,
  setTimeError,
  setDateError,
  setNameError,
  setPhoneError,
  setEmailError,
} = formerrorSlice.actions;

export default formerrorSlice.reducer;
