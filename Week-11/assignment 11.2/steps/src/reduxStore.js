import {createSlice} from '@reduxjs/toolkit';

const initialState = 0;

export const steps = createSlice({
    name:"steps",
    initialState:{value:initialState},
    reducers:{
        addStep:(state,action)=>{
            state.value += 1;
        },
        resetSteps:(state,action)=>{
            state.value = 0;
        }
    }
})

export const {addStep,resetSteps} = steps.actions;

export default steps.reducer;