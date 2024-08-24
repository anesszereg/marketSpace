import { createSlice } from "@reduxjs/toolkit";
import { footerModeTypes, layoutThemeModes } from "Components/constants/layout";

export const initialState = {
    footerModeType: footerModeTypes.DARKMODE,
    layoutThemeMode: layoutThemeModes.LIGHTTHEME
}

const LayoutSlice = createSlice({
    name: "LayoutSlice",
    initialState,
    reducers: {
        changeLayoutModeAction(state, action) {
            state.footerModeType = action.payload
        },
        changeLayoutThemeModeAction(state, action) {
            state.layoutThemeMode = action.payload
        }
    }
})

export const { changeLayoutModeAction, changeLayoutThemeModeAction } = LayoutSlice.actions;
export default LayoutSlice.reducer;