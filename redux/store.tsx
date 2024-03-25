import { configureStore } from "@reduxjs/toolkit";
import toast from "./slice/toast";
import todolist from "./slice/todolist";

const store = configureStore({
    reducer: {
        toast,
        todolist,
    }
});

export default store;
