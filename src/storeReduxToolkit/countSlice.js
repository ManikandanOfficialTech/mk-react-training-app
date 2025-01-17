import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}
const countSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increament: (state) => state.count + 1,
        decreament: (state) => state.count - 1,
    }
});

export const [increament, decreament] = countSlice.actions;

export default countSlice.reducer;