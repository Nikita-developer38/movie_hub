import { configureStore, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoggedIn: false
    },
    reducers: {
        login(state, action) {
            state.isLoggedIn = true;
        },
        logout(state, action) {
            state.isLoggedIn = false;
        }
    }
})

const adminSlice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false
    },
    reducers: {
        login(state, action) {
            state.isLoggedIn = true;
        },
        logout(state, action) {
            state.isLoggedIn = false;
        }
    }
})

export const userActions = userSlice.actions;
export const adminActions = adminSlice.actions;
const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        admin: adminSlice.reducer
    }
})
export default store;



