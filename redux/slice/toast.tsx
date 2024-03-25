import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/react";

type InitialState = {
  isSuccess: boolean;
  message: string;
  id: string;
};

const initialState: InitialState = {
  isSuccess: false,
  message: "",
  id: "",
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    postToast: (state, action: PayloadAction<InitialState>) => {
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
      state.id = action.payload.id;
    },
    clearToast: (state) => {
      state.isSuccess = false;
      state.message = "";
      state.id = "";
    },
  },
});

export const { postToast, clearToast } = toastSlice.actions;
export default toastSlice.reducer;

