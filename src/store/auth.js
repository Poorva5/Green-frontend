import axios from 'axios';

const { createSlice } = require("@reduxjs/toolkit");

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        user: {}
    },

    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setLoading: (state) => {
            state.loading = !state.loading
        },
    }
})

export const { setUser, setLoading } = authSlice.actions;

export default authSlice.reducer;