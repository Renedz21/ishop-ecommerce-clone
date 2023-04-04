import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

//* Define a type for the slice state
interface AuthState {
    token: string;
}

//* Define the initial state using that type
const initialState: AuthState = {
    token: localStorage.getItem('token') || '',
}

export const authSlice = createSlice({
    name: 'auth',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<AuthState>) => {
            console.log('action.payload', action.payload)
            console.log('state', state)
            state.token = action.payload.toString()
            localStorage.setItem('token', action.payload.toString())
        },
        clearToken: (state) => {
            state.token = ''
            localStorage.removeItem('token')
        }
    },
})

export const { setToken, clearToken } = authSlice.actions