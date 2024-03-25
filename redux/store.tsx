import { configureStore } from "@reduxjs/toolkit";
import toast from "./slice/toast";
import todolist from "./slice/todolist";

const store = configureStore({
    reducer: {
        toast,
        todolist,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
