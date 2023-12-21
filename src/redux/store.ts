import { configureStore } from "@reduxjs/toolkit";
import signupSliceReducer from "./features/signup/signupSlice";
import authSliceReducer from "./features/auth/authSlice";
import patientSliceReducer from "./features/patient/patientSlice";
import hospitalSliceReducer from "./features/hospital/hospitalSlice";
import ambulanceSliceReducer from "./features/ambulance/ambulanceSlice";

const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        signupProcess: signupSliceReducer,
        patient: patientSliceReducer,
        hospital: hospitalSliceReducer,
        ambulance: ambulanceSliceReducer,
    },
});

// Have to call auth function here

export default store;
