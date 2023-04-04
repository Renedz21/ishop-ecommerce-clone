import { createSlice } from "@reduxjs/toolkit";
import { lightTheme, darkTheme } from "../../utils/theme";

interface ThemeState {
    isDarkMode: boolean,
    theme: {
        bg: string,
        text: string,
    }
}

const initialState: ThemeState = {
    isDarkMode: false,
    theme: lightTheme,
}

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.isDarkMode = !state.isDarkMode;
            state.theme = state.isDarkMode ? darkTheme : lightTheme;
        }
    }
})

export const { toggleTheme } = themeSlice.actions;