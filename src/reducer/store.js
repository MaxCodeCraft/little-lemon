import { configureStore } from "@reduxjs/toolkit";
import reservation from "./reservation";
import formerrors from "./formerrors";

const store = configureStore({
  reducer: {
    reservation,
    formerrors,
  },
});

export default store;
