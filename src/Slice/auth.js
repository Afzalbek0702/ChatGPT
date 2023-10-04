import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	isLoading: false,
	loggedIn: false,
	user: null,
	error: null,
};
export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		loginUserStart: (state) => {
			state.isLoading = true;
		},
		loginUserSucces: (state, action) => {
			state.isLoading = false;
			state.loggedIn = true;
			state.user = action.payload;
			localStorage.setItem("token", action.payload.token);
		},
		loginUserEnd: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});
export const { loginUserStart, loginUserSucces, loginUserEnd } =
	authSlice.actions;
export default authSlice.reducer;
