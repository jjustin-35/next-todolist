import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/react";

type ToastInitialState = {
  isSuccess: boolean;
  message: string;
  id: string;
};

const initialState: ToastInitialState = {
  isSuccess: null,
  message: "",
  id: "",
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    postToast: (state, action: PayloadAction<ToastInitialState>) => {
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
      state.id = action.payload.id;
    },
    clearToast: (state) => {
      state.isSuccess = null;
      state.message = "";
      state.id = "";
    },
  },
});

export const { postToast, clearToast } = toastSlice.actions;
export default toastSlice.reducer;

