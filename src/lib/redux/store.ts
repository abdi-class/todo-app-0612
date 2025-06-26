import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "@/lib/redux/features/themeSlice";
export const store = configureStore({
  reducer: {
    // define config reducer
    themeReducer,
  },
});

// define type structure
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
