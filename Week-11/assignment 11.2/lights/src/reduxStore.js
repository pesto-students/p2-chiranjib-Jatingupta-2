import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = true;

export const lightSlice = createSlice({
    name:"lights",
    initialState:{value:initialStateValue},
    reducers:{
        changeState: (state,action) => {
            state.value = action.payload
        }
    }
})

export const {changeState} = lightSlice.actions;

export default lightSlice.reducer;