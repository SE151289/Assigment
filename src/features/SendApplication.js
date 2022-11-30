import { createSlice } from "@reduxjs/toolkit";
import { ApplicationData } from '../components/ListOfApplication.js';
export const applicationSlice = createSlice({
    name: "applications",
    initialState: { value: ApplicationData },
    reducers: {
        SendApplication: (state, action) => {
            window.confirm("send đơn thành công !!")
            state.value.push(action.payload)
        },
        updateApplication: (state, action) => {
            state.value.forEach((application) => {
                if (application.id === action.payload.id) {
                    application.email = action.payload.email;
                    application.phone = action.payload.phone;
                }
            });
        },
        deleteApplication: (state, action) => {
             if(window.confirm("bạn có chắc muốn xóa đơn ?")) {
                state.value = state.value.filter((application) => application.id !== action.payload.id)
             }
        },
    }
});

export default applicationSlice.reducer;
export const { SendApplication, updateApplication, deleteApplication} = applicationSlice.actions;