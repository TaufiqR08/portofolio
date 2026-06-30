import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type UiState = {
  activeSection: string;
  menuOpen: boolean;
};

const initialState: UiState = {
  activeSection: "home",
  menuOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setActiveSection(state, action: PayloadAction<string>) {
      state.activeSection = action.payload;
    },
    setMenuOpen(state, action: PayloadAction<boolean>) {
      state.menuOpen = action.payload;
    },
    toggleMenu(state) {
      state.menuOpen = !state.menuOpen;
    },
  },
});

export const { setActiveSection, setMenuOpen, toggleMenu } = uiSlice.actions;
export default uiSlice.reducer;
