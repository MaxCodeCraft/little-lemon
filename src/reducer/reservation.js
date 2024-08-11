import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  occasion: "",
  guests: undefined,
  lunchOrDinner: "lunch",
  time: "",
  date: "",
  name: "",
  phone: "",
  email: "",
};

const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    setOccasion: (state, action) => {
      state.occasion = action.payload;
      // console.log(state.occasion);
    },
    setGuests: (state, action) => {
      state.guests = action.payload;
      // console.log(state.guests);
    },
    setLunchOrDinner: (state, action) => {
      action.payload
        ? (state.lunchOrDinner = "dinner")
        : (state.lunchOrDinner = "lunch");
      // console.log(state.lunchOrDinner);
    },
    setTime: (state, action) => {
      state.time = action.payload;
      // console.log(state.time);
    },
    setDate: (state, action) => {
      state.date = action.payload;
      // console.log(state.date);
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const {
  setOccasion,
  setGuests,
  setLunchOrDinner,
  setTime,
  setDate,
  setName,
  setPhone,
  setEmail,
} = reservationSlice.actions;

export default reservationSlice.reducer;
