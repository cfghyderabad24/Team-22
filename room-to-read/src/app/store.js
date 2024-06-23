import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../features/student/studentSlice";
import teacherReducer from "../features/teacher/teacherSlice";
import checkoutReducer from "../features/checkout/checkoutSlice";

export const store = configureStore({
    reducer:{
        student:studentReducer,
        teacher:teacherReducer,
        checkinout:checkoutReducer
    },
})
