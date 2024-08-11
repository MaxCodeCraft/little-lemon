import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  occasion: "",
  guests: 0,
  lunchOrDinner: "",
  date: "",
};

const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    setOccasion: (state, action) => {
      state.occasion = action.payload;
    },
    setGuests: (state, action) => {
      state.guests = action.payload;
    },
    setLunchOrDinner: (state, action) => {
      state.lunchOrDinner = action.payload;
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },
  },
});

export const { setOccasion, setGuests, setLunchOrDinner, setDate } =
  reservationSlice.actions;

export default reservationSlice.reducer;
