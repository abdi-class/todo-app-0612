import { createSlice } from "@reduxjs/toolkit";

interface IThemeState {
  mode: string;
}

const initialState: IThemeState = {
  mode: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { setMode } = themeSlice.actions; // fungsi ACTION

export default themeSlice.reducer; // fungsi REDUCER
