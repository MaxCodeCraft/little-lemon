import { configureStore } from "@reduxjs/toolkit";
import reservation from "./reservation";

const store = configureStore({
  reducer: {
    reservation,
  },
});

export default store;
