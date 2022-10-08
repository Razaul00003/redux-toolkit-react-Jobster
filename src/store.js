import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./feautures/user/userSlice";

export const store = configureStore({
  reducer: { user: userSlice },
});
